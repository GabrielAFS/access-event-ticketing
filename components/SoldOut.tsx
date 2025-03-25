import { Colors } from "@/constants/Colors";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeValues = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

const SoldOut: React.FC<Props> = ({ size = "md" }) => {
  return (
    <View style={styles.soldOutContainer}>
      <Text style={{ ...styles.soldOutText, fontSize: sizeValues[size] }}>
        SOLD OUT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "normal",
    color: Colors.background,
  },
});

export default SoldOut;
