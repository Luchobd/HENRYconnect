import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from 'react-native'


export default function Maps() {
  return (
    <View>
            <MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
 
    map: {
      width: "100%",
      height: "80%",
    },
  });
  