import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";

async function getLocationPermission() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if(status !== "granted") {
    alert ("Permission denied")
    return
  }
  let location = await Location.getCurrentPositionAsync({})
  const current = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
  setOrigin(current)
}

React.useEffect(()=> {
getLocationPermission()
}, [])
export default function Maps() {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "80%",
  },
});
