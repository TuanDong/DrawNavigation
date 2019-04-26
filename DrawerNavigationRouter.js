import React, {Component} from 'react';
import {createAppContainer,createDrawerNavigator} from 'react-navigation'
import MyHomeScreen from './MyHomeScreen'
import LinkScreen from './LinkScreen'
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Link:{
        screen: LinkScreen,
    }
  },{
      initialRouteName:'Home',
      drawerPosition:'let',
      drawerBackgroundColor: '#7b8faf',
      drawerWidth:200,

  });
  
export default MyApp = createAppContainer(MyDrawerNavigator);