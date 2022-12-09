import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SupportScreen from './src/components/screens/SupportScreen';
import DigidexScreen from './src/components/screens/DigidexScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DigimonCard from './src/components/items/digimonCard';
import DigimonNavigation from './src/components/screens/NavigationScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return <DigimonNavigation></DigimonNavigation>;
};

const styles = StyleSheet.create({});

export default App;
