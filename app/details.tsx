import Button from "@/components/Button";
import { dateFormat } from "@/utils/date";
import { Colors } from "@/constants/Colors";
import useCheckout from "@/hooks/useCheckout";
import RoundedButton from "@/components/RoundedButton";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function Checkout() {
  const { selectedEvent, purchaseTickets } = useCheckout();
  const [ticketQuantity, setTicketQuantity] = useState<number>(0);

  const isSoldOut = selectedEvent?.numberOfTickets === 0;
  const isDecrementDisable = ticketQuantity === 0 || isSoldOut;
  const isIncrementDisable =
    ticketQuantity === selectedEvent?.numberOfTickets || isSoldOut;

  const onIncrement = () => setTicketQuantity((prevValue) => prevValue + 1);
  const onDecrement = () => setTicketQuantity((prevValue) => prevValue - 1);

  return (
    <KeyboardAvoidingView style={styles.flex} behavior='padding'>
      <View style={styles.container}>
        <ScrollView style={styles.flex} keyboardDismissMode='interactive'>
          <View>
            {isSoldOut && (
              <View style={styles.soldOutContainer}>
                <Text style={styles.soldOutText}>SOLD OUT</Text>
              </View>
            )}
            {/* Image Banner */}
            <Image
              source={{
                uri: "https://shakopee.org/wp-content/uploads/2019/09/event-placeholder-e1569596788649.jpg",
              }}
              style={styles.banner}
            />
          </View>

          <View style={styles.contentContainer}>
            {/* Event Name */}
            <Text style={styles.eventName}>{selectedEvent?.name}</Text>

            {/* Event Description */}
            <Text style={styles.eventDescription}>
              {selectedEvent?.description}
            </Text>

            {/* Event Date */}
            <Text style={styles.eventDate}>
              Date: {dateFormat.format(new Date(selectedEvent?.date as string))}
            </Text>

            {/* Ticket Quantity Input */}
            <Text style={styles.ticketLabel}>Number of Tickets:</Text>
            <View style={styles.productAmount}>
              <RoundedButton
                title='-'
                onPress={onDecrement}
                disabled={isDecrementDisable}
              />
              <TextInput
                style={styles.ticketInput}
                keyboardType='numeric'
                placeholder='Enter quantity'
                value={ticketQuantity.toString()}
                onChangeText={(value) =>
                  setTicketQuantity(
                    Math.max(
                      0,
                      Math.min(
                        Number(value),
                        selectedEvent?.numberOfTickets ?? 0
                      )
                    )
                  )
                }
              />
              <RoundedButton
                title='+'
                onPress={onIncrement}
                disabled={isIncrementDisable}
              />
            </View>
          </View>
        </ScrollView>
        <Button
          title='Get tickets'
          disabled={ticketQuantity < 1}
          onPress={() =>
            purchaseTickets(ticketQuantity, selectedEvent?.id as number)
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
}

// TODO: Create a styles.ts file
const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
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
    color: Colors.title,
  },
  eventDescription: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.title,
  },
  ticketLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.title,
  },
  ticketInput: {
    padding: 8,
    fontSize: 16,
    color: Colors.title,
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  soldOutContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.badge,
    zIndex: 999,
  },
  soldOutText: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.background,
  },
});
