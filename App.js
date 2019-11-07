import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {HomeScreen} from './Screens/HomeScreen';
import {ExploreScreen} from './Screens/ExploreScreen';
import {ProfileScreen} from './Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { MainScreen } from './Screens/MainScreen';


const TabNvigator = createBottomTabNavigator({
    
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-heart' color={tintColor} size={25}/>
      )
    }
  },
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-bus' color={tintColor} size={25}/>
      )
    }
  }, 
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-person' color={tintColor} size={25}/>
      )
    }
  },
},{
  tabBarOptions: {
    activeTintColo: '#e67e22'
  }
})

export default createAppContainer(TabNvigator);


