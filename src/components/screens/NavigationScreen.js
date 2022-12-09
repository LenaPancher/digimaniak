import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';
import SupportScreen from './SupportScreen';
import LoginScreen from './LoginScreen';
import React from 'react';
import DigidexScreen from './DigidexScreen';
import DigimonCard from '../items/digimonCard';

import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DigimonNavigation = () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DigimonFeed"
        component={DigimonFeed}
        options={{
          tabBarLabel: 'Digidex',
          tabBarActiveTintColor: '#145764',
          tabBarIcon: ({focused, color}) => {
            focused ? (color = '#145764') : color;
            return <Ionicons name="home" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#145764',
          tabBarIcon: ({focused, color}) => {
            focused ? (color = '#145764') : color;
            return <Ionicons name="person" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={SupportScreen}
        options={{
          tabBarLabel: 'About',
          tabBarActiveTintColor: '#145764',
          tabBarIcon: ({focused, color}) => {
            focused ? (color = '#145764') : color;
            return (
              <Ionicons name="information-circle" color={color} size={25} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const DigimonFeed = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Digidex" component={DigidexScreen} />
      <Stack.Screen name="DigimonCard" component={DigimonCard} />
    </Stack.Navigator>
  );
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TestNavigate" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default DigimonNavigation;
