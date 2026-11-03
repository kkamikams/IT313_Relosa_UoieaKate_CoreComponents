import React, { useState } from "react";
import { View, Teext, TextInput, ScrollView, StyleSheet } from "react-native";

import StudentCrad from "./StudentCard";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const toggleFlag = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, flagged: !s.flagged } : s)),
    );
  };

  const visibleStudents = students.filter((s) =>
    s.nametoLowercase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.subtitle}>
          {students.length} students this term.
        </Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search students..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView contentContainerStyle={styles.list}>
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f3fb" },
  header: {
    backgroundColor: "#1e1b5e",
    paddingTop: 50,
    paddingBottom: 14,
    paddingHorizontal: 16,
  },
  title: { color: "#ffff", fontSize: 20, fontWeight: "700" },
  subtitle: { color: "#c9c6f0", fontSize: 12, marginTop: 2 },
  search: {
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#e3e1f2",
    borderRadius: 12,
    margin: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
  },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
});
