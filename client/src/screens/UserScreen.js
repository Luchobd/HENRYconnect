import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProfileBody, ProfileButtons } from "../components/Profile/ProfileBody";
const UserScreen = () => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={["#5947C2", "#877BC9"]}
      // dark first
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {/* <View style={styles.container}> */}
      <View style={styles.profile}>
        <ProfileBody
          lastName="Villalba"
          firstName="Mario"
          username="mariovillalba98"
          profileImage={require("../components/Profile/fotomario.png")}
          country="Argentina"
          description="Soy proactivo, me gusta programar y trabajar en equipo. Me egresé de Henry en 2022."
          educationStatus="Egresado de Henry"
          city="Buenos Aires"
          email="villalbamario18@gmail.com"
          password="lucho1234"
        />
        <ProfileButtons
          id={0}
          firstName="Mario"
          lastName="Villalba"
          profileImage={require("../components/Profile/fotomario.png")}
          description="Soy proactivo, me gusta programar y trabajar en equipo. Me egresé de Henry en 2022."
          educationStatus="Egresado de Henry"
        />
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
  },
});
