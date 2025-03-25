import { Event } from "@/types";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { EVENTS_QUERY } from "@/graphql/queries";

import { FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";

import styles from "./styles";

export default function Index() {
  const { data, loading, called } = useQuery<{ events: Event[] }>(EVENTS_QUERY);

  const renderProductItem = ({ item }: { item: Event }) => <Card item={item} />;

  if (called && loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.events}
        style={styles.eventsList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}
