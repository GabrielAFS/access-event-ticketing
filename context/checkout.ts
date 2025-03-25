import { Event, Order } from "@/types";
import { createContext } from "react";

interface CheckoutProps {
  selectedEvent: Event | null;
  purchasedOrder: Order | null;

  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;
  purchaseTickets: (amount: number, id: number) => Promise<void>;
}

const initialValue = {} as CheckoutProps;

export const CheckoutContext = createContext<CheckoutProps>(initialValue);
