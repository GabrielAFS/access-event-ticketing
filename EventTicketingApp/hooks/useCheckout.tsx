import { CheckoutContext } from "@/context/checkout";
import { Event, EventCheckout } from "@/types";
import React, { useCallback, useContext, useMemo, useState } from "react";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [events, setEvents] = useState<Map<number, EventCheckout>>(new Map());

  const addEventTicket = useCallback(
    (event: Event) => {
      setEvents((prevValue) => {
        const updatedEvents = new Map(prevValue);

        if (updatedEvents.has(event.id)) {
          const eventUpdated = updatedEvents.get(event.id) as EventCheckout;
          eventUpdated.amount += 1;
          updatedEvents.set(event.id, eventUpdated);
        } else {
          updatedEvents.set(event.id, { ...event, amount: 1 });
        }

        return updatedEvents;
      });
    },
    [setEvents]
  );

  const removeEventTicket = useCallback(
    (id: number) => {
      setEvents((prevValue) => {
        const updatedEvents = new Map(prevValue);
        const selectedEvent = updatedEvents.get(id);

        if (!selectedEvent) return updatedEvents;

        if (selectedEvent.amount > 1) {
          selectedEvent.amount -= 1;
          updatedEvents.set(id, selectedEvent);
        } else {
          updatedEvents.delete(id);
        }

        return updatedEvents;
      });
    },
    [setEvents]
  );

  const getEventTicketAmount = useCallback(
    (id: number) => {
      return events.get(id)?.amount ?? 0;
    },
    [events]
  );

  const getEventsAsArray = useCallback(
    () => Array.from(events, ([_, event]) => event),
    [events]
  );

  const value = useMemo(
    () => ({
      events,
      addEventTicket,
      removeEventTicket,
      getEventTicketAmount,
      getEventsAsArray,
    }),
    [events]
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
