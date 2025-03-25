import { gql } from "@apollo/client";

export const EVENTS_QUERY = gql`
  query {
    events {
      id
      name
      description
      numberOfTickets
      price
    }
  }
`;

export const ORDER_MUTATION = gql`
  mutation {
    createOrder(
      createOrderInput: { numberOfTickets: $tickets, eventId: $eventId }
    ) {
      id
      code
      numberOfTickets
      event {
        name
        description
        date
      }
    }
  }
`;
