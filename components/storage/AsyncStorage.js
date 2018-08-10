import React, { Component } from 'react';
import { Text, View, AsyncStorage, Button, StyleSheet } from 'react-native';

export default class AsyncStorageTest extends Component {
   constructor(props) {
        super(props);
        this.state = {
        };
    }
    calling(){
        
        //AsyncStorage.setItem("name","Prakash");
        const encodedValue = encodeURIComponent('admin');
        const encodedValue1 = encodeURIComponent('admin');

        //fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', {

        fetch('http://192.168.2.1:8000/login?username=${encodeURIComponent(encodedValue)}&password=${encodeURIComponent(encodedValue)}', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}).then(function(response) {

    console.log(response.json());
    return response.json();
  }).catch((error)=>{
    console.log("Api call error");
    alert(error.message);
 });
;

        try {
             AsyncStorage.setItem('name', 'I like to save it.');
          } catch (error) {
            // Error saving data
          }

        alert("Hi");

        
    }

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('name');
          if (value !== null) {
            // We have data!!
            console.log(value);

            alert(value);
          }
         } catch (error) {
           // Error retrieving data
         }
      }

    render() {
        return (
            <View>
                <Text> App 123</Text>

                <Button style = {{marginTop:100,backgroundColor:'red'}} title="Save Data" onPress = {this.calling}/>
                <Button style = {{marginTop:100,backgroundColor:'red'}} title="get Data" onPress = {this._retrieveData}/>
            </View>
        )
    }
}