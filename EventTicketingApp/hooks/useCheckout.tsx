import { CheckoutContext } from "@/context/checkout";
import { Event } from "@/types";
import React, { useContext, useMemo, useState } from "react";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const purchaseTickets = async (amount: number, id: number) => {};

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
