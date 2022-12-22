import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProfileBody, ProfileButtons} from "../components/Profile/ProfileBody"
const UserScreen = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
    <View style={{width: '100%', padding: 10}}>
      <ProfileBody
        lastName="Villalba"
        firstName="Mario"
        username="mariovillalba98"
        profileImage={require('../components/Profile/fotomario.png')}
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
        profileImage={require('../components/Profile/fotomario.png')}
        description="Soy proactivo, me gusta programar y trabajar en equipo. Me egresé de Henry en 2022."
        educationStatus="Egresado de Henry"
      />
    </View>
    </View>
  );
}

export default UserScreen;