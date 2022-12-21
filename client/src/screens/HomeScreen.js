import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AccordionList from "../components/AccordionList";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={["#833CF0", "#FFFFFF"]}>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      /> */}
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
          color: "white",
        }}
      >
        HENRYconnect
      </Text>
      <AccordionList />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
});
// containerStyle= {backgroundColor: orange}
export default HomeScreen;
