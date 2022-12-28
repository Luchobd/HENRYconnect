// import { View, Text } from "react-native";
// import React from "react";
// import * as Location from "expo-location";

// //https://www.youtube.com/watch?v=UcWG2o2gVzw
// export default class LocationPermission  extends React.Component{
//   state = {
//     location: {},
//     errorMessage: "",
//   };

//   componentWillMount() {
//     this._getLocation();
//   }
//   _getLocation = async () => {
//     const { status } = await Permissions.askAsync(Permissions.LOCATION);

//     if (status !== "granted") {
//       console.log("permission not granted");

//       this.setState({
//         errorMessage: "permission not granted",
//       });
//     }
//     const location = await Location.getCurrentPositionAsync();
//     this.setState({
//       location,
//     });
//   };

//   render() {
//     return (
//       <View>
//         <Text>{JSON.stringify(this.state.location)}</Text>
//       </View>
//     );
//   }
// }

//así lo refactorizó AI
import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import Permissions from 'react-native-permissions';

export default class LocationPermission extends React.Component {
  state = {
    location: {},
    errorMessage: '',
  };

  _getLocation = async () => {
    // Request permission to access the device's location
    const status = await Permissions.request('location');

    if (status !== 'authorized') {
      console.log('permission not granted');
      this.setState({
        errorMessage: 'permission not granted',
      });
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    this.setState({
      location,
    });
  };

  render() {
    return (
      <View>
        <Button title="Get Location" onPress={this._getLocation} />
        <Text>{JSON.stringify(this.state.location)}</Text>
      </View>
    );
  }
}
