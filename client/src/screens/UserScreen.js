import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProfileBody, ProfileButtons} from "../Profile/ProfileBody";
const UserScreen = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
    <View style={{width: '100%', padding: 10}}>
      <ProfileBody
        name="Mario Villalba"
        profileImage={require('../components/Profile/fotomario.png')}
        country="Argentina"
        description="Soy proactivo, me gusta programar y trabajar en equipo. Me egresé de Henry en 2022."
        status="Egresado de Henry"
        ubicacion="Buenos Aires"
        followers="3.6M"
        following="35"
        post="458"
      />
      <ProfileButtons
        id={0}
        name="obody"
        accountName="mr_peobody"
        profileImage={require('../components/Profile/fotomario.png')}
      />
    </View>
    </View>
  );
}

export default UserScreen;