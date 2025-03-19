import { Event } from "@/types";

import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface Props {
  item: Event;
}

const Card: React.FC<Props> = ({ item }) => {
  const [amount, setAmount] = useState<number>(0);

  const onIncrement = () => setAmount((prevValue) => prevValue + 1);
  const onDecrement = () => setAmount((prevValue) => prevValue - 1);

  const isSoldOut = item.numberOfTickets === 0;
  const isDecrementDisable = amount === 0 || isSoldOut;
  const isIncrementDisable = amount === item.numberOfTickets || isSoldOut;

  return (
    <View style={styles.container}>
      {isSoldOut && (
        <View style={styles.soldOutContainer}>
          <Text style={{ ...styles.productPriceText, color: "white" }}>
            SOLD OUT
          </Text>
        </View>
      )}
      <View style={styles.productCard}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>
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
          <Text style={styles.amountText}>{amount}</Text>
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
      <View style={styles.footer}>
        <Text style={styles.productPrice}>
          ${item.price.toFixed(2)}{" "}
          <Text style={styles.productPriceText}>per item</Text>
        </Text>
        <Text style={styles.productPriceText}>{item.date}</Text>
      </View>
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
    padding: 16,
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
