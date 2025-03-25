import { Colors } from "@/constants/Colors";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: { paddingHorizontal: 16, paddingBottom: 100 },
  contentContainerNoPadBottom: {
    paddingHorizontal: 16,
  },
  eventsList: {
    flex: 1,
    paddingTop: 16,
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.title,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.title,
  },
  blackText: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.title,
  },
  ticketInput: {
    padding: 8,
    fontSize: 16,
    color: Colors.title,
  },
  rowAlignedCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
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
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.background,
  },
});

export default styles;
