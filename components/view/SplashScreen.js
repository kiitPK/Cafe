/* Parent.js */
import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

import LoginScreen from './LoginScreen'


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
      <View style = {{marginTop:100, backgroundColor:'palegreen', fontSize: 20,
      fontWeight: 'bold'}}>
        <Text style={{textAlign: 'center'}}> Awfis Cafe   Splash Screen</Text>
      </View>
    
    );
  }
}