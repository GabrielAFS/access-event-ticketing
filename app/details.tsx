import useCheckout from "@/hooks/useCheckout";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";

export default function Checkout() {
  const { selectedEvent } = useCheckout();
  const [ticketQuantity, setTicketQuantity] = useState<number>(0);

  const isSoldOut = selectedEvent?.numberOfTickets === 0;
  const isDecrementDisable = ticketQuantity === 0 || isSoldOut;
  const isIncrementDisable =
    ticketQuantity === selectedEvent?.numberOfTickets || isSoldOut;

  const onIncrement = () => setTicketQuantity((prevValue) => prevValue + 1);
  const onDecrement = () => setTicketQuantity((prevValue) => prevValue - 1);

  return (
    <View style={styles.container}>
      {/* Image Banner */}
      <Image
        source={{
          uri: "https://shakopee.org/wp-content/uploads/2019/09/event-placeholder-e1569596788649.jpg",
        }}
        style={styles.banner}
      />

      <View style={styles.contentContainer}>
        {/* Event Name */}
        <Text style={styles.eventName}>{selectedEvent?.name}</Text>

        {/* Event Description */}
        <Text style={styles.eventDescription}>
          {selectedEvent?.description}
        </Text>

        {/* Event Date */}
        <Text style={styles.eventDate}>Date: {selectedEvent?.date}</Text>

        {/* Ticket Quantity Input */}
        <Text style={styles.ticketLabel}>Number of Tickets:</Text>
        <View style={styles.productAmount}>
          <TouchableOpacity
            style={{
              ...styles.amountButton,
              opacity: isDecrementDisable ? 0.5 : 1,
            }}
            onPress={onDecrement}
            disabled={isDecrementDisable}
          >
            <Text style={styles.amountButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.ticketInput}
            keyboardType='numeric'
            placeholder='Enter quantity'
            value={ticketQuantity.toString()}
            onChangeText={(value) => setTicketQuantity(Number(value))}
          />
          <TouchableOpacity
            style={{
              ...styles.amountButton,
              opacity: isIncrementDisable ? 0.5 : 1,
            }}
            onPress={onIncrement}
            disabled={isIncrementDisable}
          >
            <Text style={styles.amountButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        disabled={ticketQuantity < 1}
      >
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
  },
  contentContainer: {
    paddingHorizontal: 16,
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
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  ticketLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  ticketInput: {
    padding: 8,
    fontSize: 16,
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: "#4caf50",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  amountButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
});
