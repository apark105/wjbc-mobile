
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import PrayerWall from './prayer';
// import Music from './music';
// import Sermon from './sermon';
// import Events from './events';

export default class Give extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.feedContainer}>

          <Text style={styles.feed}>Give</Text>
          
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  category: {
    marginTop: 15,
  },
  feed: {
    fontSize: 50,
    paddingLeft: 25,
    color: 'black',
  },
  

});


