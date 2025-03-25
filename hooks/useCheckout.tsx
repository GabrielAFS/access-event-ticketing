import { Event, Order } from "@/types";
import { CheckoutContext } from "@/context/checkout";
import { RootStackParamList } from "@/types/navigation";
import { EVENTS_QUERY, ORDER_MUTATION } from "@/graphql/queries";

import React, { useContext, useMemo, useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/core";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [createOrder] = useMutation(ORDER_MUTATION);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [purchasedOrder, setPurchasedOrder] = useState<Order | null>(null);

  const purchaseTickets = async (amount: number, id: number) => {
    await createOrder({
      variables: {
        tickets: amount,
        eventId: id,
      },
      refetchQueries: [EVENTS_QUERY],
      onCompleted: (data) => {
        setPurchasedOrder(data.createOrder);
        navigation.navigate("success_purchase");
      },
      onError: (error) =>
        console.log(error.message, error.cause, error.networkError),
    });
  };

  const value = useMemo(
    () => ({
      selectedEvent,
      purchasedOrder,
      setSelectedEvent,
      purchaseTickets,
    }),
    [selectedEvent]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default function useCheckout() {
  return useContext(CheckoutContext);
}
