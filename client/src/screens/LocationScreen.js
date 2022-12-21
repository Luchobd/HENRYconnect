import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import DropdownComponent from "../components/DropdownComponent";

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>

      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%"
      }}
      >Seleccione su ubicación</Text>
      </View>
      <DropdownComponent/>
    </View>
  );
}

export default LocationScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AF84F1',

  },
  title: {
    backgroundColor: 'black',

  }
})