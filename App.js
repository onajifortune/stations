import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import Header from "./src/components/Header";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
