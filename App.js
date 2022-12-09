import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DigimonNavigation from './src/components/screens/NavigationScreen';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>{<DigimonNavigation></DigimonNavigation>}</Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
