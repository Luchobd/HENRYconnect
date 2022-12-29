import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput, Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://res.cloudinary.com/do3dbemlj/image/upload/v1672327364/Screenshot_2022-12-29_at_12.20.17_pn4bev.png",
};

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <View style={styles.HenryContainer}>
          <Text style={styles.Henry}>HENRY</Text>
          <Text style={styles.connect}>connect</Text>
        </View> */}
        <View style={styles.inputContainers}>
          <TextInput placeholder="Ingresa tu email" style={styles.input} />
          <TextInput placeholder="Ingresa tu contraseña" style={styles.input} />
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
              <Text style={styles.buttonLoginText}>INGRESAR</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={ styles.gB}>
          <View>
            <Text style={ styles.textSignInG}>o ingresa con Google</Text>
          </View>
          <TouchableOpacity style={styles.buttonG}>
            <View style={styles.insideGoogB}>

          <Image
        style={styles.G}
        source={require('../assets/g.png')}
        />
            <Text style={styles.gText}>Google</Text>
        </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewContainerRegister}>
          <Text style={styles.text}>No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.buttonRegister}
          >
            <View style={styles.viewRegister}>
              <Text style={styles.register}> Registrate</Text>
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
    color: "#1239E2",
    textDecorationLine: "underline",
    textShadowColor: "white",
    textShadowOffset: { width: 0.4, height: 0.4 },
    textShadowRadius: 0.01,
  },
  viewRegister: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
  // paddingTop: 40,
    color: "white",
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
    paddingTop: 10,
  },
  inputContainers: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  input: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    // marginBottom: 40,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 70,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#833CF0",
    borderRadius: 50,
    height: 70,
  },
  G: {
    height: 22,
    width: 22,
  
  },
  insideGoogB: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gText: {
    fontSize: 16,
    color: "white",
    paddingLeft: 16
  },
  textSignInG: {
    color: "white",

  },
  gB: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,

  },
  buttonG: {
    fontSize: 16,
    marginTop: 30,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.4)",
    height: 70,
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderColor: "black",
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  // HenryContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",
  // },
  // Henry: {
  //   fontFamily: "inter"
  // },
  // connect: {
  //   fontFamily: "pacifico"
  // }
});

export default Login;
