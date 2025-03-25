import { Event } from "@/types";
import { CheckoutContext } from "@/context/checkout";
import { EVENTS_QUERY, ORDER_MUTATION } from "@/graphql/queries";

import { useMutation } from "@apollo/client";
import React, { useContext, useMemo, useState } from "react";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [createOrder] = useMutation(ORDER_MUTATION);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const purchaseTickets = async (amount: number, id: number) => {
    await createOrder({
      variables: {
        tickets: amount,
        eventId: id,
      },
      refetchQueries: [EVENTS_QUERY],
      onCompleted: (data) => console.log("DONE", data),
      onError: (error) =>
        console.log(error.message, error.cause, error.networkError),
    });
  };

  const value = useMemo(
    () => ({
      selectedEvent,
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
