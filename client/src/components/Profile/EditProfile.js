import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const EditProfile = ({ route, navigation }) => {
  const { firstName, lastName, profileImage, description, educationStatus } =
    route.params;
  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };
  return (
    <LinearGradient
      style={styles.gradient}
      colors={["#5947C2", "#877BC9"]}
      // dark first
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>  
       */}
      <View style={styles.container}>
        <View style={styles.picName}>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Image source={profileImage} style={styles.image} />
            <Text
              style={{
                color: "white",
              }}
            >
              Change photo
            </Text>
          </View>

          <View style={styles.nameLastName}>
            <TextInput
              placeholder="Nombre"
              defaultValue={firstName}
              style={styles.inputName}
            />

            <TextInput
              placeholder="Apellido"
              defaultValue={lastName}
              style={styles.inputLName}
            />
          </View>
        </View>

        <TextInput
          placeholder="Descripción"
          defaultValue={description}
          style={styles.inputDescription}
          multiline
          numberOfLines="3"
        />
        {/* </View> */}
        <View>
          {/* <Text
            style={{
              opacity: 0.5,
            }}
          >
            Estado academico
          </Text> */}
          <TextInput
            placeholder="Estado academico"
            defaultValue={educationStatus}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textButtonView}>
            <Text style={styles.textButton}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    marginLeft: 20,
  },
  picName: {
    flexDirection: "row",
  },
  image: {
    resizeMode: "cover",
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#5947C2",
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 18,
    marginLeft: 20,
    width: "85%",
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
  input: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 50,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderRadius: 100,
  },
  inputDescription: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 50,
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 90,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    paddingTop: 15,
    borderRadius: 100,
  },
  inputName: {
    fontSize: 16,
    // marginLeft: 20,
    marginTop: 20,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 50,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderRadius: 100,
  },
  inputLName: {
    fontSize: 16,
    marginTop: 20,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 50,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderRadius: 100,
  },
  nameLastName: {
    width: 168,
  },
});
