import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Registration from "./src/Registration";
import Image from "./src/Image";
import Registrations from "./src/Registrations";
import Date from "./src/Date";
import Location from "./src/Location";
import BodyParameters from "./src/BodyParameters";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    // <View style={styles.container}>
    //   <Registrations />

    //   <StatusBar />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="registrations"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="registrations"
          component={Registrations}
          // options={{
          //   title: "Registration",
          //   headerStyle: {
          //     backgroundColor: "#1C1853",
          //   },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //   },
          // }}
        />
        <Stack.Screen name="bodyparameters" component={BodyParameters} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
