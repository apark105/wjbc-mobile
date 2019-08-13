import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, } from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import Feed from './components/Feed';
import Give from './components/Give';
import Icon from './Tab-Icon';

const AppRouteContainer = createAppContainer(createMaterialTopTabNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="Feed" color={tintColor} />,
        }
      },
      Sermon: {
        screen: Feed,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="Sermon" color={tintColor} />
        }
      },
      Events: {
          screen: Feed,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Icon name="Events" color={tintColor}/>
            }
        },
      Podcasts: {
          screen: Feed,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Icon name="Podcast" color={tintColor}/>
          }
      },
        Give: {
          screen: Give,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Give" color={tintColor}/>
          }
        },  
    },
    { 
      animationEnabled: false,
      tabBarOptions: {
        activeTintColor: '#00a7e1',
        inactiveTintColor: 'black',
        showLabel: true,
        showIcon:true,
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 10,
        },
        style: {
            backgroundColor: '#F2F1EA',
            // borderBottomLeftRadius: 1000,
          },
        indicatorStyle: {
          backgroundColor:"none",
          // width: 10,
          // marginLeft: 33,
        },
      },
    }
  ));

  export default AppRouteContainer;