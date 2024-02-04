import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";
export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return (
      <View>
        <Text>Exercise not Found</Text>
        <Link href="/">Go Back</Link>
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
      </Text>
      </View>
      <View style={styles.panel}>
      <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap:5
  },
  exerciseName: { fontSize: 20, fontWeight: "500" },
  exerciseSubtitle: { color: "dimgray" },

  instructions: {
    fontSize:16,
    lineHeight:22,
    
  },
  panel:{
    backgroundColor:'white',
padding:10,
borderRadius:5
  }
});