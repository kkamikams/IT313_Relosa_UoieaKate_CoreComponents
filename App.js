import React from "react";
import { StatusBar } from "expo-status-bar";
import StudentDirectoty from "./components/StudentDirectory";

export default function App() {
  return (
    <>
      <Statusbar style="light" />
      <StudentDirectory />
    </>
  );
}
