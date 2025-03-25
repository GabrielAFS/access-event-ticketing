import { graphqlClient } from "@/graphql";
import { Colors } from "@/constants/Colors";
import { CheckoutProvider } from "@/hooks/useCheckout";

import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProvider client={graphqlClient}>
      <CheckoutProvider>
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={"light-content"}
        />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.background,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='details' />
          <Stack.Screen name='success_purchase' />
        </Stack>
      </CheckoutProvider>
    </ApolloProvider>
  );
}
