import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Loguin = () => {
    const navigation = useNavigation();
  return (
    <View >
      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%"
      }}
      >Loguin</Text>
                {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeScreen')
            }
            style={{
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}>
                Ingresar
              </Text>
            </View>
          </TouchableOpacity> */}
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


    </View>
  );
}

export default Loguin;