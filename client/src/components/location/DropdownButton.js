import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DropdownButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonView}>
    <TouchableOpacity
      style={styles.touchable}
      onPress={() =>navigation.navigate("Home")
        // Alert.alert(`Elegiste ${cityName}, ${stateName}, ${countryName}`)
      }
      // navigation.navigate("HomeScreen")}
    >
      <View style={styles.textView}>
        <Text style={styles.text}>o activar geolocalización</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonView: {
        width: "100%",
        paddingHorizontal: "10%",
        alignContent: 'center',
        // flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-around",
        // marginVertical: 150,
        paddingVertical: "95%"
      },
touchable: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 40,
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
    color: "#833CF0",
    textTransform: "uppercase",
    fontSize: 13,
  },
})