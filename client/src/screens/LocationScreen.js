import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import DropdownComponent from "../components/DropdownComponent";

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <View>

      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%"
      }}
      >Seleccione su ubicación</Text>
      <DropdownComponent/>
      </View>
    </View>
  );
}

export default LocationScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AF84F1',

  },
})