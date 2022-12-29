import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground, TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://res.cloudinary.com/do3dbemlj/image/upload/v1672259058/Screenshot_2022-12-28_at_17.23.55_ofc09t.png ",
};

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>


        <TextInput
          placeholder="Ingresa tu email"
          style={styles.input}
        />
        <TextInput
          placeholder="Ingresa tu contraseña"
          style={styles.input}
        />

        <View
          style={styles.viewContainerButtons}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
              width: "80%",
              paddingVertical: 150,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 50,
                borderRadius: 5,
                borderColor: "#DEDEDE",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#833CF0",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                  color: "white",
                }}
              >
                Ingresar
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewContainerRegister}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.buttonRegister}
          >
            <View style={styles.viewRegister}>
              <Text style={styles.register}>Registrarse</Text>
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
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
    color: "white",
  },
  viewRegister: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  buttonRegister: {
    width: "80%",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  viewContainerRegister: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    marginLeft: 20,
marginTop: 30,
  },
  viewContainerButtons: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  }
  
});

export default Login;
