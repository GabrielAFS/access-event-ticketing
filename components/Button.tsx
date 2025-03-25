import { Colors } from "@/constants/Colors";

import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
  },
  text: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
