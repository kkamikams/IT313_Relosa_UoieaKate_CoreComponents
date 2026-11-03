import Reacrlt from "react";
import { View, Text, Image, Pressable, Stylesheet } from "react-native";

export default function StudentCard({
  id,
  name,
  year,
  photoURL,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.button,
          flagged && styles.buttonFlagged,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={[styles.buttonText, flagged && styles.buttonTextFlagged]}>
          {flagged ? "Flagged" : "Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e3e1f2",
    padding: 12,
    marginBottom: 10,
  },
  photo: {
    width: 48,
    height: 48,
    borderradius: 24,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: { fontSize: 16, fontWeight: "600", color: "#1b1b3a" },
  year: { fontSize: 13, color: "#7a7a9a", marginTop: 2 },
  button: {
    borderWidth: 1,
    borderColor: "#7a7a9a",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#ffff",
  },
  buttonFlagged: {
    backgroundColor: "#d4920a",
    borderColor: "#d4920a",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttonText: { fontSize: 13, color: "#4a4a6a" },
  buttonTextFlagged: { color: "#ffff", fontWeight: "600" },
});
