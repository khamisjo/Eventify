import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignoutScreen from './src/screens/SignoutScreen';
import CreateEventScreen from './src/screens/CreateEventScreen';
import CreateFlyerScreen from './src/screens/CreateFlyerScreen';
import EventDetailsScreen from './src/screens/EventDetailsScreen';
import MyEventsScreen from './src/screens/MyEventsScreen';
import MapScreen from './src/screens/MapScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin:SigninScreen,
    Signup:SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    Events:createStackNavigator({
      Home:HomeScreen,
      EventDetails:EventDetailsScreen,
      Notifications:NotificationsScreen,
      creationFlow:createStackNavigator({
        CreateEvent:CreateEventScreen,
        CreateFlyer:CreateFlyerScreen
      })
    }),
    Map:MapScreen,
    MyEvents:MyEventsScreen,
    MyProfile:createStackNavigator({
      Profile:ProfileScreen,
      Signout:SignoutScreen
    }),
 
  })
})

export default createAppContainer(switchNavigator);