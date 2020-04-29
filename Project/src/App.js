/**
 * Capstone Project: Churchill Solitaire
 * Development and Design: Matthew Swarens, AK, Yanet Fonseca Lopez
 */

import * as React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,StackActions } from 'react-navigation';


class Rules extends React.Component {
  _goHome = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }
  render(){
    return(
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}>  
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = { styles.TextStyle }> The Objective </Text>
        </View>
      </ImageBackground>
    )
  }
}
class Settings extends React.Component {
  _goHome = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }
  render(){
    return(
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = { styles.TextStyle }> Settings </Text>
        </View>
      </ImageBackground>
    )
  }
}
class Credits extends React.Component {
  _goHome = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }
  render(){
    return(
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text style = { styles.TextStyle }> Credits </Text>
        </View>
      </ImageBackground>
    )
  }
}
class Play extends React.Component {
  _goHome = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }
  render(){
    return(      
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text style = { styles.TextStyle }> Play </Text>
        </View>
      </ImageBackground>     
    )
  }
}

class Home extends React.Component {

   _goToPlay = () => {
    const pushAction = StackActions.push({
    routeName: 'Play',
      params: {
        myUserId: 9,
      },      
    });
    this.props.navigation.dispatch(pushAction);
  }
  _goToRules = () => {
    const pushAction = StackActions.push({
    routeName: 'Rules',
      params: {
        myUserId: 9,
      },      
    });
    this.props.navigation.dispatch(pushAction);
  }
  _goToCredits = () => {
    const pushAction = StackActions.push({
    routeName: 'Credits',
      params: {
        myUserId: 9,
      },      
    });
    this.props.navigation.dispatch(pushAction);
  }
  _goToSettings = () => {
    const pushAction = StackActions.push({
    routeName: 'Settings',
      params: {
        myUserId: 9,
      },      
    });
    this.props.navigation.dispatch(pushAction);
  }
  
  render() {
    return (
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}>       
        <View style={[{ width: "20%", margin: 15, backgroundColor: "white" }]}>          
          <Button title="Play" onPress={this._goToPlay} color= "#000000"/>
        </View>
        <View style={[{ width: "20%", margin: 15, backgroundColor: "white" }]}>
          <Button title="Rules" onPress={this._goToRules} color= "#000000"/>
        </View>
        <View style={[{ width: "20%", margin: 15, backgroundColor: "white" }]}>
          <Button title="Settings" onPress={this._goToSettings} color= "#000000"/>
        </View>
        <View style={[{ width: "20%", margin: 15, backgroundColor: "white" }]}>
          <Button title="Credits" onPress={this._goToCredits} color= "#000000"/>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  TextStyle: {
    color: "#000000",
    textAlign: 'center',
    fontSize: 40,
    marginTop: 5,
  },
});


const App = createStackNavigator({
  Home,
  Play,
  Rules,
  Settings,
  Credits,
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(App);