import { Event } from "@/types";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { Colors } from "@/constants/Colors";
import { EVENTS_QUERY } from "@/graphql/queries";

import { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { useQuery } from "@apollo/client";

import styles from "./styles";

export default function Index() {
  const { data, loading, called, refetch } = useQuery<{ events: Event[] }>(
    EVENTS_QUERY
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const renderProductItem = ({ item }: { item: Event }) => <Card item={item} />;
  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (called && loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.events}
        style={styles.eventsList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            tintColor={Colors.primary}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
        ListEmptyComponent={() => (
          <View style={styles.containerAbsoluteCenter}>
            <Image
              source={require("@/assets/images/alone-person.png")}
              style={styles.image}
            />
            <Text style={styles.mainTitle}>Oh no!</Text>
            <Text style={styles.text}>
              There are no events available. Come back later.
            </Text>
          </View>
        )}
      />
    </View>
  );
}
