import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export const ProfileBody = ({
  lastName,
  firstName,
  profileImage,
  country,
  description,
  educationStatus,
  city,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
              
            }}
          />
        </View>
        <View style={{
          alignItems: 'center',
          width: '50%',}}>
        <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
              fontSize: 25
            }}>
            {firstName} {lastName}
          </Text>
          <Text
            style={{
              paddingVertical: 0,
              
            }}>
            {country}
          </Text>
        </View>
      </View>
        <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
          <Text
            style={{
              width: '90%',
              paddingVertical: 5,
              fontSize: 14
            }}>
            {description}
          </Text>
        </View>
        <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
          <Text
            style={{
              width: '90%',
              paddingVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {educationStatus}
          </Text>
        </View>
        <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
          <Text
            style={{
              width: '90%',
              paddingVertical: 5,
              fontSize: 14,
            }}>
            Ubicacion Actual: {city}
          </Text>
        </View>
    </View>
  );
};

export const ProfileButtons = ({id, firstName, lastName, profileImage,description,educationStatus}) => {
  const navigation = useNavigation();
  return (
    <>
     
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Stack',{
                firstName:firstName,
                lastName:lastName,
                profileImage:profileImage,
                description:description,
                educationStatus:educationStatus
              })
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
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

         <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>        
        <TouchableOpacity
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
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
          </View>
          

    </>
  );
};
