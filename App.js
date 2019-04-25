/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView,TouchableOpacity} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      url: 'http://amnote.com.vn/news-page/',
      click: false
    }
  }
  render() {
    return (
        <WebView 
            automaticallyAdjustContentInsets = {false}
            source={{uri:'http://amnote.com.vn/news-page/'}}
            javaScriptEnabled = {true}
            domStorageEnabled = {true}
            startInLoadingState = {true}
            onLoadStart={(e) => {
              console.log('onLoadStart');
              console.log(`isLoading: ${e.nativeEvent.loading}`);
              console.log(e.nativeEvent.url);
              this.setState(
                {
                  click:true
                }
              );
              console.log(this.state.click);
            }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
