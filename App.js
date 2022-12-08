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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DigimonCard from './src/components/items/DigimonCard';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Digidex"
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
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarActiveTintColor: '#145764',
          tabBarIcon: ({focused, color}) => {
            focused ? (color = '#145764') : color;
            return <Ionicons name="person" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarActiveTintColor: '#145764',
          tabBarIcon: ({focused, color}) => {
            focused ? (color = '#145764') : color;
            return (
              <Ionicons name="information-circle" color={color} size={25} />
            );
          },
        }}
      />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="DigimonCard" component={DigimonCard} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const DigimonFeed = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Digidex" component={DigidexScreen} />
      <Stack.Screen name="DigimonCard" component={DigimonCard} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default App;
