/* Parent.js */
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import LoginScreen from "./LoginScreen";

export default class SplashScreen extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         timePassed: false,
  //     };
  // }

  // componentDidMount() {
  //     setInterval( () => {
  //         this.setTimePassed();
  //     },1000);
  // }

  // setTimePassed() {
  //     console.log('logged');
  //     this.setState({timePassed: true});
  // }

  render() {
    // if (!this.state.timePassed) {
    //     return <SplashScreen/>;
    // } else {
    //     return <LoginScreen/>;
    // }

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "palegreen",
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        <Image
          style={{ resizeMode: "cover" }}
          source={require("./splash_bg.jpg")}
        />
      </View>
    );
  }
}
