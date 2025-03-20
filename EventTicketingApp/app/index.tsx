import { Event } from "@/types";
import Card from "@/components/Card";
import { EventService } from "@/services";

import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [events, setEvents] = useState<Event[]>([]);

  const renderProductItem = ({ item }: { item: Event }) => <Card item={item} />;

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await EventService.list();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#4caf50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
