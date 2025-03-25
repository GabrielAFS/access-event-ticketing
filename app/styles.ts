import { Colors } from "@/constants/Colors";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 100 },
  eventsList: {
    flex: 1,
    paddingTop: 16,
  },
});

export default styles;
