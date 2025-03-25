import { CheckoutProvider } from "@/hooks/useCheckout";
import { graphqlClient } from "@/graphql";

import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProvider client={graphqlClient}>
      <CheckoutProvider>
        <Stack>
          <Stack.Screen name='index' />
          <Stack.Screen name='details' />
        </Stack>
      </CheckoutProvider>
    </ApolloProvider>
  );
}
