import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Registration from "./src/Registration";
import Image from "./src/Image";
import Registrations from "./src/Registrations";
import Date from "./src/Date";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Registrations />
      {/* <Image /> */}
      {/* <Date/> */}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
});
