/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import AppRouteContainer from './Route';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Hello World!</Text>
        <View style={styles.header}>
          <Image style={styles.wjbc} source={require('./assets/images/wjbc.png')} />
        </View>
        <AppRouteContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F1EA',
    paddingTop: 60,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
