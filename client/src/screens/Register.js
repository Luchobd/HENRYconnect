import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://res.cloudinary.com/do3dbemlj/image/upload/v1672259058/Screenshot_2022-12-28_at_17.23.55_ofc09t.png ",
};

const Register = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.inputContainers}>
            <View style={styles.inputDiv}>
              <TextInput placeholder="Ingresa tu nombre" style={styles.input} />
            </View>
            <View style={styles.inputDiv}>
              <TextInput placeholder="Ingresa tu apellido" style={styles.input} />
            </View>
            <View style={styles.inputDiv}>
              <TextInput placeholder="Ingresa tu email" style={styles.input} />
            </View>
            <View style={styles.inputDiv}>
              <TextInput placeholder="Ingresa tu contraseña" style={styles.input} />
            </View>   
          </View>
          <View style={styles.viewContainerIngresar}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              style={{
                width: "80%",
                paddingVertical: 150,
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonLoginText}>CREAR CUENTA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    register: {
      // fontWeight: "bold",
      fontSize: 14,
      letterSpacing: 1,
      opacity: 0.8,
      color: "blue",
      textDecorationLine: "underline",
    },
    viewRegister: {
      width: "100%",
      height: 50,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      // paddingTop: 40
    },
    buttonRegister: {
      // width: "80%",
      // paddingHorizontal: 10,
    },
    viewContainerRegister: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingTop: 30,
    },
    inputDiv: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 85
    },
    inputContainers: {
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      fontSize: 20,
      marginLeft: 20,
      marginTop: 30,
      width: "80%",
      backgroundColor:'rgba(255,255,255,0.7)',
      height: 60,
      color:"black",
      paddingHorizontal: 8,
    },
    viewContainerIngresar: {
      width: "100%",
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 150,
    },
    buttonLoginText: {
      fontWeight: "bold",
      fontSize: 14,
      letterSpacing: 1,
      opacity: 0.8,
      color: "white",
    },
    button: {
      width: "100%",
      borderRadius: 5,
      borderColor: "#DEDEDE",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#833CF0",
      borderRadius: 50,
      height: 75,
    },
  });

export default Register;