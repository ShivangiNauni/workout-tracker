import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExerciseListItem from "../components/exerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient";
const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      equipment
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn:  () => client.request(exercisesQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
    return <Text>Failed to fetch exercises</Text>;
  }
  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.exercises || []}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",

    // justifyContent: "center",
    padding: 10,
    gap: 10,
  },
});
