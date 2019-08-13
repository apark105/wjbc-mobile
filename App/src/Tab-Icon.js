import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';

const tabIcon = {
      Feed: require('./assets/images/feed.png'),
      Sermon: require('./assets/images/sermons.png'),
      Events: require('./assets/images/events.png'),
      Podcast: require('./assets/images/podcasts.png'),
      Give: require('./assets/images/give.png'),
  };

const Icon = ({ name, color, style, ...props }) => {
    const icon = tabIcon[name];
  
    return <Image style={styles.img} source={icon} />
  };
  
  export default Icon;


  const styles = StyleSheet.create({
    img: {
      height: 15,
      width: 15,
      
    }

  })
  

