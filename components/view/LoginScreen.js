/* Parent.js */
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TextInput
} from "react-native";

import { getLoginFromServer } from "../network/Server";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      status: false,
      message: null
    };
  }

  onPressLogin() {
    getLoginFromServer()
      .then(data => {
        this.setState({ status: data.status, message: data.message });
        console.log("2222222222211");
        if (this.state.status) {
          console.log("LoggedIn Successfully...!!!");
          this.props.navigation.navigate("Home");
        } else {
          console.log("LoggedIn failed...!!!!");
          alert(this.state.message);
        }
      })
      .catch(error => {
        console.log("------------" + error);
      });
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27, textAlign: "center" }}>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={{ margin: 7 }} />
        <Button onPress={() => this.onPressLogin()} title="Submit" />
      </ScrollView>
    );
  }
}
