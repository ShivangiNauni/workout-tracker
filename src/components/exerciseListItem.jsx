import { Text, View, StyleSheet, Pressable } from "react-native";
import {Link} from 'expo-router'
function ExerciseListItem({ item }) {
  console.log(item, "item")
  return (
    <Link href={`/${item.name}`} asChild>
    <Pressable style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </Pressable>
    </Link>
  );
}

export default ExerciseListItem;

const styles = StyleSheet.create({
  exerciseName: { fontSize: 20, fontWeight: "500" },
  exerciseSubtitle: { color: "dimgray" },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
  },
  marginHorizontal:5
});
