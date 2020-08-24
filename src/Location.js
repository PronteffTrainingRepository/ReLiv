import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
function Location({ navigation }) {
  const [region, changeRegion] = useState({
    latitude: 17.4435,
    longitude: 78.3772,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, changeMarkers] = useState([]);
  onRegionChange = (region) => {
    changeRegion({ region });
  };

  return (
    <View style={styles.Container}>
      <Text>Select your Location...</Text>
      <MapView
        style={{ width: wd * 1, height: ht * 0.8 }}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Marker draggable coordinate={region} />
      </MapView>
      <Button
        title="Submit Location"
              onPress={() => navigation.navigate("registrations", {
                  lat: latitude,
              long })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Location;
