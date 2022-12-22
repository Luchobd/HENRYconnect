import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from "./src/screens/HomeScreen";
import LocationScreen from "./src/screens/LocationScreen";
import StackScreen from "./src/screens/StackScreen";
import UserScreen from "./src/screens/UserScreen";

//stack
import EditProfile from "./src/components/Profile/EditProfile";


const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
  return(
      <HomeStackNavigator.Navigator
      initialRouteName="UserScreen">
      <HomeStackNavigator.Screen name="UserScreen" component={UserScreen} />
      <HomeStackNavigator.Screen name="Stack" component={EditProfile}/>
      </HomeStackNavigator.Navigator>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
    
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        // headerStyle: {
        //   elevation: 0,
        //   backgroundColor: "#300F34",
        // },
        // headerTintColor: "#ffffff",
        
        // headerTitleAlign: "left",
      
        tabBarStyle: {
            backgroundColor: "#833CF0",
            height: 76
          },
        //  tabBarActiveBackgroundColor: "#5037B6",
        tabBarActiveTintColor: "white",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Location") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "You") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={37} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#F4F2F6",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: "",
            headerShown: false,
        }}

      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
            tabBarLabel: "" ,
            headerShown: false,
    
        }}
      />
      <Tab.Screen
        name="User"
        component={MyStack}
        options={{
            tabBarLabel: "",
            headerShown: false,
  
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
