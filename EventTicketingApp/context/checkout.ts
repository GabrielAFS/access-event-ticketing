import { Event, EventCheckout } from "@/types";
import { createContext } from "react";

interface CheckoutProps {
  events: Map<number, EventCheckout>;
  addEventTicket: (event: Event) => void;
  removeEventTicket: (id: number) => void;
  getEventTicketAmount: (id: number) => number;
  getEventsAsArray: () => EventCheckout[];
}

const initialValue = {} as CheckoutProps;

export const CheckoutContext = createContext<CheckoutProps>(initialValue);
