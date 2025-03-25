import { Colors } from "@/constants/Colors";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerStartAlignedCenter: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
  rowAlignedCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  colAlignedCenter: {
    marginBottom: 15,
    alignItems: "center",
  },

  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  image: {
    maxHeight: 300,
    aspectRatio: 2 / 5,
    resizeMode: "contain",
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.title,
  },
  greenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.primary,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  textMedium: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
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
