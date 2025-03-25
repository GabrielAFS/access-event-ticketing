import { Colors } from "@/constants/Colors";

import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large' color={Colors.primary} />
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
