import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
// const API_KEY = process.env.API_KEY;
// const BASE_URL = process.env.BASE_URL;
import {BASE_URL} from "@env"
import {API_KEY} from "@env"

const DropdownComponent = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries`,
      headers: {
        "X-CSCAPI-KEY": "TnA1c09zRTZYd29ZYU1DbTh2anpCQXVNSUVJQU5kR202b0pTSGRJRw=="
      },
    };

    axios(config)
      .then(function (response) {
        var count = Object.keys(response.data).length;
        let countryArray = [];
        for (let i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountryData(countryArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const handleState = (countryCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states`,
      headers: {
        "X-CSCAPI-KEY": "TnA1c09zRTZYd29ZYU1DbTh2anpCQXVNSUVJQU5kR202b0pTSGRJRw=="
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (let i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStateData(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCity = (countryCode, stateCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
      headers: {
        "X-CSCAPI-KEY": "TnA1c09zRTZYd29ZYU1DbTh2anpCQXVNSUVJQU5kR202b0pTSGRJRw=="
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (let i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCityData(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }; 

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      {/* //opcional */}
      {/* <StatusBar barStyle="light-content"/> */}
      <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#833CF0" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Seleccione país" : "..."}
          searchPlaceholder="Buscar..."
          value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCountry(item.value);
            handleState(item.value);
            setCountryName(item.label);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#833CF0" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Seleccione provincia o estado" : "..."}
          searchPlaceholder="Buscar..."
          value={state}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setState(item.value);
            handleCity(country, item.value);
            setStateName(item.label);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#833CF0" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Seleccione ciudad" : "..."}
          searchPlaceholder="Buscar..."
          value={city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCity(item.value);
            setCityName(item.label);
            setIsFocus(false);
          }}
        />
        {/* <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name: name,
                profileImage: profileImage,
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
        </View> */}
      </View>

    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF84F1",
    padding: 36,
    justifyContent: "center",
    alignContent: "center",
  },
  dropdown: {
    height: 50,
    borderColor: "white",
    borderWidth: 3.5,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "black"
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white"
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
    fontWeight:"bold"
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },


});
