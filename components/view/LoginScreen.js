/* Parent.js */
import React from 'react'
import {Text, StyleSheet, View, ScrollView,Button,TextInput} from 'react-native'
// import CardView from 'react-native-cardview'


export default class LoginScreen extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onPressLogin(){

        if(this.state.username === 'admin' && this.state.password === 'admin'){
            console.log('LoggedIn Successfully...!!!');
        }else{
            console.log('LoggedIn failed...!!!!');
        }
    }

  render() { 

    return (

 <ScrollView style={{padding: 20}}>
    <Text 
        style={{fontSize: 27,textAlign:'center'}}>
        Login
    </Text>
    <TextInput placeholder='Username' 
    onChangeText = { (text) => this.setState({username:text})}/>
    <TextInput placeholder='Password' 
    onChangeText = { (text) => this.setState({password:text})}/>
    <View style={{margin:7}} />
    <Button 
             onPress={() => this.onPressLogin()}
            title="Submit"
        />
    </ScrollView>
    );
  }
}