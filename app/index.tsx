import { Event } from "@/types";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { EVENTS_QUERY } from "@/graphql/queries";

import { FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const { data, loading, called } = useQuery<{ events: Event[] }>(EVENTS_QUERY);

  const renderProductItem = ({ item }: { item: Event }) => <Card item={item} />;

  if (called && loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.events}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 100 },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
});
