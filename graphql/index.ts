import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Platform } from "react-native";

export const graphqlClient = new ApolloClient({
  uri:
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_ANDROID_API_URL
      : process.env.EXPO_PUBLIC_IOS_API_URL,
  cache: new InMemoryCache(),
});
