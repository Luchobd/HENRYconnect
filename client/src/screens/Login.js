import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = {url: "https://res.cloudinary.com/do3dbemlj/image/upload/v1672259058/Screenshot_2022-12-28_at_17.23.55_ofc09t.png "}

const Login = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={image} resizeMode="cover" style= {styles.image} >
      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%"
      }}
      >LogIn</Text>
               
          <View
            style={{
            width: '100%',
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
             marginTop: 150
            }}
          >
                <TouchableOpacity
                onPress={() =>
                    navigation.navigate('HomeScreen')
                }                
 
          style={{
              width: '80%',
              paddingVertical: 150,
              paddingHorizontal: 10,
              
              
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#833CF0",
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                  color: "white"
                }}>
                Ingresar
              </Text>
            </View>
          </TouchableOpacity>
          </View>

          <View
            style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
             
            }}
          >
                <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Registro')
                }                
 
          style={{
              width: '80%',
              paddingVertical: 30,
              paddingHorizontal: 10,
              
              
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "gray",
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                  color: "white"
                }}>
                Registrarse
              </Text>
            </View>
          </TouchableOpacity>
          </View>


    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
  }
 
})

export default Login;