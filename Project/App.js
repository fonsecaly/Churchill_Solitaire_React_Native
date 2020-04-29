/**
 * 
 * 
 */

import * as React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,StackActions } from 'react-navigation';
import RNRestart from 'react-native-restart';

import RenderPile from "./src/components/RenderPile.js";
import DevilsSixRender from "./src/components/DevilsSixRender.js";
import VictoryRowRender from "./src/components/VictoryRowRender.js";
import DeckRender from "./src/components/DeckRender.js";
import {CardGameContainer} from './src/components/CardGameContainer';


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
        source={require('./images/background5.jpg')}
        alignItems = 'center'> 
        <View style={styles.container}>
          <Text  style = {styles.titleText}> Rules </Text>
          <Text style={styles.paragraph}>
        Create eight piles of cards in the top right Victory Rows. Each stack must go in ascending order, begining with an ace and ending with a king.
        <Text style={styles.paragraph}> { '\n '}  </Text>
        If there are aces, place them in the Victory Rows in the top right. You must place one card below another card that alternates color and is one card higher. Move as many cards as you can.
        <Text style={styles.paragraph}> { '\n '}  </Text>
        When you think you cannot move any more, touch the deck of cards to deal.
        <Text style={styles.paragraph}> { '\n '}  </Text>
        Kings can be placed in any empty column on the main playing surface.
        <Text style={styles.paragraph}> { '\n '}  </Text>
        THE DEVIL'S SIX:
        <Text style={styles.paragraph}> { '\n '}  </Text>
        The six cards at he top left are the key to winning or losing the game. In order to win, you need to move them over to the Victory Rows.
          </Text>
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
        source={require('./images/background5.jpg')}
        alignItems = 'center'>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = { styles.TextStyle }> Settings </Text>
        </View>
      </ImageBackground>
    )
  }
}
class Credits extends React.Component {
  _goHome = () => {
    RNRestart.Restart();
    const popAction = StackActions.pop({
      n: 1,
    });
    
    this.props.navigation.dispatch(popAction);
  }
  render(){
    return(
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}
        alignItems = 'center'>
        <View style={styles.container}>
          <Text  style = {styles.titleText}> Credits </Text>
          <Text style={styles.paragraph}>
           Development and Design:
           <Text style={styles.paragraph}> { '\n '}  </Text>
           Matthew Swarens 
           <Text style={styles.paragraph}> { '\n '}  </Text>
           Khuderchuluun Amgalanbaatar 
           <Text style={styles.paragraph}> { '\n '}  </Text>
           Yanet Fonseca Lopez
          </Text>
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
  /*onButtonClick = () => {
    RNRestart.Restart();
  };
  //<View>
      //    <Button title="Restart Screen" onPress={this.onButtonClick} />
      //</View>  
  */
  render(){
    return(      
      <ImageBackground 
        style={{ flex:1 }}
        source={require('./images/background5.jpg')}
        alignItems = 'center'>       
      
      <CardGameContainer>
        <View style={{marginTop:10, marginRight: 10,  marginEnd: 10}}>
          <View style={{flexDirection:'row'}}>
            <DeckRender/>
            <View style={{flexDirection:'row', marginBottom:100}}>
              <DevilsSixRender />
            </View>
            <View style={{flex:1, flexDirection:'row', marginLeft:200, marginRight: 10}}>
              <VictoryRowRender name={"Spade"}/>
              <VictoryRowRender name={"Heart"}/>
              <VictoryRowRender name={"Club"}/>
              <VictoryRowRender name={"Diamond"}/>
              <VictoryRowRender name={"Spade"}/>
              <VictoryRowRender name={"Heart"}/>
              <VictoryRowRender name={"Club"}/>
              <VictoryRowRender name={"Diamond"}/>
            </View>
          </View>
          <View style={{marginTop: 20,flexDirection:'row'}}>
            <RenderPile data={0}/>
            <RenderPile data={1}/>
            <RenderPile data={2}/>
            <RenderPile data={3}/>
            <RenderPile data={4}/>
            <RenderPile data={5}/>
            <RenderPile data={6}/>
            <RenderPile data={7}/>
            <RenderPile data={8}/>
            <RenderPile data={9}/>
          </View>
        </View>
      </CardGameContainer>    
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
        source={require('./images/background.png')} 
        alignItems = 'center'>               
                       
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: "black" ,
  },
  paragraph: {
    margin: 20,
    marginTop: 2,
    fontSize: 12,    
    textAlign: 'center',
    color: "#ffffff",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffebcd",
  }
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