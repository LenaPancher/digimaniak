import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SupportScreen from './src/components/screens/SupportScreen';
import DigidexScreen from './src/components/screens/DigidexScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Digidex" component={DigidexScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
