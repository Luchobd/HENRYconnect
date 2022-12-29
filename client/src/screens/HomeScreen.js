import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AccordionList from "../components/AccordionList";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#B591EC", "#833CF0"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      
      <View>
        <AccordionList />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    // alignItems: "center",
  },
});
// containerStyle= {backgroundColor: orange}
export default HomeScreen;
