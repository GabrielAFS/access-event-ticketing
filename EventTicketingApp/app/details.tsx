import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCheckout from "@/hooks/useCheckout";

export default function Checkout() {
  const { selectedEvent } = useCheckout();
  console.log(selectedEvent);

  return (
    <View style={styles.container}>
      {/* TODO: Create a Button ui component */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Get tickets</Text>
      </TouchableOpacity>
    </View>
  );
}

// TODO: Create a styles.ts file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#4caf50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
