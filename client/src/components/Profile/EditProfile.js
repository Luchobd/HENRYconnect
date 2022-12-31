import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput, StyleSheet
} from  'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

const EditProfile = ({route, navigation}) => {
  const {firstName, lastName, profileImage, description, educationStatus} = route.params
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
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
       <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text
          style={{
            color: '#833CF0',
          }}>
          Change profile photo
        </Text>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Nombre"
            defaultValue={firstName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="Apellido"
            defaultValue={lastName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
        <Text
            style={{
              opacity: 0.5,
            }}>
            Descripción
          </Text>
          <TextInput
            placeholder="Descripción"
            defaultValue={description}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
        <Text
            style={{
              opacity: 0.5,
            }}>
            Estado academico
          </Text>
          <TextInput
            placeholder="Estado academico"
            defaultValue={educationStatus}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <TouchableOpacity
          style={styles.button}>
            <View
           style={styles.textButtonView}>
              <Text
                style={styles.textButton}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
    </LinearGradient>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
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

});
