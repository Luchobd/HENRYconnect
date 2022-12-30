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
      <View
        style={styles.container}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={profileImage}
            style={{
              resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            {firstName} {lastName}
          </Text>
          <Text
            style={{
              paddingVertical: 0,
            }}
          >
            {country}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            width: "90%",
            paddingVertical: 5,
            fontSize: 14,
          }}
        >
          {description}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            width: "90%",
            paddingVertical: 5,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {educationStatus}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            width: "90%",
            paddingVertical: 5,
            fontSize: 14,
          }}
        >
          Ubicacion Actual: {city}
        </Text>
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
    <>
      <View
        style={styles.buttonView}
      >
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
          <View
          style= {styles.textView}
          >
            <Text
              style={styles.text}
            >
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={styles.buttonView}
      >
        <TouchableOpacity
          style={styles.button}
        >
          <View
             style={styles.textView}
          >
            <Text
               style={styles.text}
              //   fontWeight: "bold",
              //   fontSize: 14,
              //   letterSpacing: 1,
              //   opacity: 0.8,
              // }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },

  buttonView: {
    width: "100%",
    paddingHorizontal: "10%",
    alignContent: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 18
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
});

// ButtonView: {
//   width: "100%",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-evenly",
//   paddingVertical: 5,
// }
// button: {
//   width: "100%",
// }