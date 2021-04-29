import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExchangeScreen from '../screens/ExchangeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Exchange : {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarLabel : "Exchange",
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarLabel : "Home",
    }
  }
});
