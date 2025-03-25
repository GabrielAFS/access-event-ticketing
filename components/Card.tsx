import { Event } from "@/types";
import useCheckout from "@/hooks/useCheckout";
import { RootStackParamList } from "@/types/navigation";

import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";

interface Props {
  item: Event;
}

// TODO: Create a reusable Card ui component
const Card: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { setSelectedEvent } = useCheckout();

  const isSoldOut = item.numberOfTickets === 0;

  const handlePress = () => {
    setSelectedEvent(item);
    navigation.navigate("details");
  };

  return (
    <View style={styles.container}>
      {isSoldOut && (
        <View style={styles.soldOutContainer}>
          <Text style={{ ...styles.productPriceText, color: "white" }}>
            SOLD OUT
          </Text>
        </View>
      )}
      <Pressable onPress={handlePress}>
        <View style={styles.productCard}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.productPrice}>
            {item.numberOfTickets}{" "}
            <Text style={styles.productPriceText}>tickets available</Text>
          </Text>
          <Text style={styles.productPriceText}>{item.date}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  soldOutContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#f64f6bbe",
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4caf50",
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#666",
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ffa726",
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
