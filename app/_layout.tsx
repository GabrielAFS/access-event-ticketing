import { CheckoutProvider } from "@/hooks/useCheckout";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CheckoutProvider>
      <Stack>
        <Stack.Screen name='index' />
        <Stack.Screen name='details' />
      </Stack>
    </CheckoutProvider>
  );
}
