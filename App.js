import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SupportScreen from './src/components/screens/SupportScreen';
import DigidexScreen from './src/components/screens/DigidexScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Digidex"
        component={DigidexScreen}
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

const styles = StyleSheet.create({});

export default App;
