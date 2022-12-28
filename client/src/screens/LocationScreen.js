import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropdownComponent from "../components/location/DropdownComponent";
import DropdownButton from "../components/location/DropdownButton";
// import Maps from "../components/location/Maps";

const LocationScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#B591EC", "#833CF0"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
              marginTop: "20%",
            }}
          >
            Seleccione su ubicación
          </Text>
        </View>
        <View>
          {/* <Maps /> */}
          <DropdownComponent/> 
      <DropdownButton/> 
        </View>
      </View>
    </LinearGradient>
  );
};
export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#AF84F1',
  },
  title: {
    // backgroundColor: 'black',
  },
});
