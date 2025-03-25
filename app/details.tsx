import Button from "@/components/Button";
import { dateFormat } from "@/utils/date";
import SoldOut from "@/components/SoldOut";
import useCheckout from "@/hooks/useCheckout";
import RoundedButton from "@/components/RoundedButton";

import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./styles";

export default function Checkout() {
  const { selectedEvent, purchaseTickets } = useCheckout();
  const [ticketQuantity, setTicketQuantity] = useState<number>(0);

  const isSoldOut = selectedEvent?.numberOfTickets === 0;
  const isDecrementDisable = ticketQuantity === 0 || isSoldOut;
  const isIncrementDisable =
    ticketQuantity === selectedEvent?.numberOfTickets || isSoldOut;

  const onIncrement = () => setTicketQuantity((prevValue) => prevValue + 1);
  const onDecrement = () => setTicketQuantity((prevValue) => prevValue - 1);

  const handleGetTickets = () => {
    purchaseTickets(ticketQuantity, selectedEvent?.id as number);
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior='padding'>
      <View style={styles.container}>
        <ScrollView style={styles.flex} keyboardDismissMode='interactive'>
          <View>
            {isSoldOut && <SoldOut />}
            <Image
              source={{
                uri: "https://shakopee.org/wp-content/uploads/2019/09/event-placeholder-e1569596788649.jpg",
              }}
              style={styles.banner}
            />
          </View>
          <View style={styles.contentContainerNoPadBottom}>
            <Text style={styles.mainTitle}>{selectedEvent?.name}</Text>
            <Text style={styles.text}>{selectedEvent?.description}</Text>
            <Text style={styles.textBold}>
              Date: {dateFormat.format(new Date(selectedEvent?.date as string))}
            </Text>
            <Text style={styles.blackText}>Number of Tickets:</Text>
            <View style={styles.rowAlignedCenter}>
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
          onPress={handleGetTickets}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
