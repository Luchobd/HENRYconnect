import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
export const ProfileBody = ({
  lastName,
  firstName,
  profileImage,
  country,
  description,
  educationStatus,
  city,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image source={profileImage} style={styles.image} />
        </View >
        <View >
          <Text style={styles.textName}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.textLocation}>{country}</Text>
        </View>
      </View>
      <View style={styles.textDescriptionView}>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <View style={styles.textEducationView}>
        <Text style={styles.textEducation}>{educationStatus}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textLocation}>Ubicacion Actual: {city}</Text>
      </View>
    </View>
  );
};

export const ProfileButtons = ({
  id,
  firstName,
  lastName,
  profileImage,
  description,
  educationStatus,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.buttons}>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.push("Stack", {
              firstName: firstName,
              lastName: lastName,
              profileImage: profileImage,
              description: description,
              educationStatus: educationStatus,
            })
          }
          style={styles.button}
        >
          <View style={styles.textButtonView}>
            <Text style={styles.textButton}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textButtonView}>
            <Text style={styles.textButton}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  buttons: {
    marginTop: 135,
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: "10%",
    alignContent: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#5947C2",
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 18,
  },
  textButtonView: {
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  textDescription: {
    width: "90%",
    paddingVertical: 5,
    fontSize: 14,
    color: "white",
  },
  textDescriptionView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
  viewImage: {
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  textEducationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
  textEducation: {
    width: "90%",
    paddingVertical: 5,
    fontSize: 16,
    color: "white",
  },
  textLocation: {
    width: "90%",
    paddingVertical: 5,
    fontSize: 16,
    color: "white",
    marginLeft: 20,
  },
  textName: {
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});

