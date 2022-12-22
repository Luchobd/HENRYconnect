import React from 'react';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const getLocation = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status !== 'granted') {
    console.log('permission not granted');
    return {
      errorMessage: 'permission not granted',
    };
  }

  const location = await Location.getCurrentPositionAsync();
  return {
    location,
  };
};

export default getLocation;
