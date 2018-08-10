import React, { Component } from "react";
import { Text, View, AsyncStorage, Button, StyleSheet } from "react-native";

import { getLoginFromServer } from "../network/Server";

export default class AsyncStorageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      message: null
    };
    this.calling = this.calling.bind(this);
  }

  componentDidMount() {
    //this.refreshDataFromServer();
  }

  refreshDataFromServer = () => {
    console.log("1111111");
    // getLoginFromServer("admin", "admin")
    //   .then(data => {
    //     this.setState({ dataFromServer: data });
    //   })
    //   .catch(error => {
    //     this.setState({ dataFromServer: [] });
    //   });
  };

  calling() {
    // //AsyncStorage.setItem("name","Prakash");
    // try {
    //      AsyncStorage.setItem('name', 'I like to save it.');
    //   } catch (error) {
    //     // Error saving data
    //   }

    // alert("Hi");
    console.log("1111111");
    // getLoginFromServer()
    //   .then(data => {
    //     this.setState({ status: data });
    //     //alert("Hi");
    //     console.log("------------" + data);
    //   })
    //   .catch(error => {
    //     //this.setState({ status: false, message: null });
    //   });
    console.log("22222222222");

    getLoginFromServer()
      .then(data => {
        this.setState({ status: data.status, message: data.message });
        console.log("2222222222211");
      })
      .catch(error => {
        console.log("------------" + error);
      });

    console.log("3333333333");
  }

  _retrieveData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('name');
    //   if (value !== null) {
    //     // We have data!!
    //     console.log(value);
    //     alert(value);
    //   }
    //  } catch (error) {
    //    // Error retrieving data
    //  }
    alert(this.state.message);
  };

  render() {
    return (
      <View>
        <Text> App 123</Text>

        <Button
          style={{ marginTop: 100, backgroundColor: "red" }}
          title="Save Data"
          onPress={this.calling}
        />
        <Button
          style={{ marginTop: 100, backgroundColor: "red" }}
          title="get Data"
          onPress={this._retrieveData}
        />
      </View>
    );
  }
}
