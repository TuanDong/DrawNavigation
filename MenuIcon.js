import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView,TouchableOpacity,Image} from 'react-native';

export default class MenuIcon extends Component{

    render() {
      return (
        <TouchableOpacity
        style={{width:30,height:30,zIndex:1,position:'absolute',top:20,left:20}}
        onPress= {()=>{this.props.navigation.toggleDrawer();}}
        >
        <Image
            source={require('./image/icons8-menu-480.png')}
            style={{width:30,height:30,}}
            
        />
        </TouchableOpacity>
      )
    }
}