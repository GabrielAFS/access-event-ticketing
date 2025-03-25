import Button from "@/components/Button";
import useCheckout from "@/hooks/useCheckout";
import { RootStackParamList } from "@/types/navigation";

import React from "react";
import { View, Text, Image, TextStyle } from "react-native";
import { NavigationProp } from "@react-navigation/core";
import { useNavigation } from "expo-router";

import styles from "./styles";

const SuccessPurchaseScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { purchasedOrder } = useCheckout();

  const valueStyles: TextStyle = {
    ...styles.textBold,
    fontSize: 18,
    marginBottom: 0,
  };

  return (
    <View style={styles.containerStartAlignedCenter}>
      <Image
        source={require("@/assets/images/checkmark-icon.png")}
        style={styles.image}
      />
      <Text style={styles.greenTitle}>Purchase Successful!</Text>
      <View style={styles.colAlignedCenter}>
        <Text style={styles.textMedium}>Order Number:</Text>
        <Text style={valueStyles}>{purchasedOrder?.code}</Text>
      </View>
      <View style={styles.colAlignedCenter}>
        <Text style={styles.textMedium}>Event Details:</Text>
        <Text style={valueStyles}>{purchasedOrder?.event.name}</Text>
      </View>
      <View style={styles.colAlignedCenter}>
        <Text style={styles.textMedium}>Tickets Purchased:</Text>
        <Text style={valueStyles}>{purchasedOrder?.numberOfTickets}</Text>
      </View>

      <Button
        title='Back to Events list'
        onPress={() => navigation.navigate("index")}
      />
    </View>
  );
};

export default SuccessPurchaseScreen;
