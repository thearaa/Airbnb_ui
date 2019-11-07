import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { SigninScreen } from '../OpeningScreens/SigninScreen';
import { SignupScreen } from '../OpeningScreens/SignupScreen';

const AppStack = createStackNavigator({
    MainA: {
        screen: SigninScreen
    },
    MainB: {
        screen: SignupScreen
    }
}, {
    initialRouteName: 'MainA'
});

export const MainScreen =  createAppContainer(AppStack);