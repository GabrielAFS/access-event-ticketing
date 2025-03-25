import useCheckout from "@/hooks/useCheckout";
import { RootStackParamList } from "@/types/navigation";

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProp } from "@react-navigation/core";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const SuccessPurchaseScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { purchasedOrder } = useCheckout();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/checkmark-icon.png")}
        style={styles.banner}
      />
      <Text style={styles.title}>Purchase Successful!</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Order Number:</Text>
        <Text style={styles.value}>{purchasedOrder?.code}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Event Details:</Text>
        <Text style={styles.value}>{purchasedOrder?.event.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Tickets Purchased:</Text>
        <Text style={styles.value}>{purchasedOrder?.numberOfTickets}</Text>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("index")}
      >
        <Text style={styles.continueButtonText}>Back to Events list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.primary,
  },
  infoContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.title,
  },
  banner: {
    maxHeight: 300,
    aspectRatio: 2 / 5,
    resizeMode: "contain",
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SuccessPurchaseScreen;
