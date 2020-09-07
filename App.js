import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {BottomTabNavigator,SwitchNavigator} from './src/router';

const AppContainer = createAppContainer(SwitchNavigator)
export default class App extends Component{
  render() {
    return <AppContainer />
  }
}
