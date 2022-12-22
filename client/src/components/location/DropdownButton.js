import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DropdownButton() {
  return (
    <View style={styles.buttonView}>
    <TouchableOpacity
      style={styles.touchable}
      onPress={() =>navigation.navigate("HomeScreen")
        // Alert.alert(`Elegiste ${cityName}, ${stateName}, ${countryName}`)
      }
      // navigation.navigate("HomeScreen")}
    >
      <View style={styles.textView}>
        <Text style={styles.text}>ACEPTAR</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonView: {
        width: "100%",
        // flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-evenly",
        // marginVertical: 150,
        height: 600,
      },
touchable: {
    backgroundColor: "#833CF0",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  textView: {
    width: "100%",
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: 16,
  },
})