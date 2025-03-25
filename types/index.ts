export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  numberOfTickets: number;
  price: number;
}

export interface Order {
  id: number;
  code: string;
  numberOfTickets: number;

  event: Partial<Event>;
}
