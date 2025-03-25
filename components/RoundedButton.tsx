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

const RoundedButton: React.FC<Props> = ({ title, disabled, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        ...styles.container,
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.background,
    fontSize: 18,
  },
});

export default RoundedButton;
