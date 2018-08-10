/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/view/LoginScreen";
import SplashScreen from "./components/view/SplashScreen";
import Home from "./components/view/Home";
import { StackNavigator } from "react-navigation";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setTimePassed();
    }, 3000);
  }

  setTimePassed() {
    console.log("logged");
    this.setState({ timePassed: true });
  }

  render() {
    // Loading Splash Screen- 123
    if (!this.state.timePassed) {
      return <SplashScreen />;
    } else {
      return <AppNavigator />;
    }

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  Home: { screen: Home }
});
