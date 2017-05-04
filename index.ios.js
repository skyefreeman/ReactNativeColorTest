/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import StandardTableView from './StandardTableView.js'
import ColorScreen from './ColorScreen.js'

const AppContainer = StackNavigator({
    ListScreen: { screen: StandardTableView },
    ColorScreen: { screen: ColorScreen }
});

AppRegistry.registerComponent('testbed', () => AppContainer);




