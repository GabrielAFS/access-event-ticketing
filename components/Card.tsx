import { Event } from "@/types";
import { dateFormat } from "@/utils/date";
import { Colors } from "@/constants/Colors";
import useCheckout from "@/hooks/useCheckout";
import { RootStackParamList } from "@/types/navigation";

import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

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
          <Text
            style={{ ...styles.productPriceText, color: Colors.background }}
          >
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
          <Text style={styles.productPriceText}>
            {dateFormat.format(new Date(item.date))}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#eee",
    borderRadius: 8,
    shadowColor: Colors.black,
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
    backgroundColor: Colors.badge,
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
    color: Colors.text,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.text,
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
