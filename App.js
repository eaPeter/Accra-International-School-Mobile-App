import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//import each screen
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import Tabs from "./screens/Tabs";
import Notifications from "./screens/Notifications";

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1, }}>
      <NavigationContainer>
        <MainNavigator.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="Home"
          >
          <MainNavigator.Screen name="Splash" component={Splash}/>
          <MainNavigator.Screen name="Onboarding" component={Onboarding}/>
          <MainNavigator.Screen name="Home" component={Home}/>
          <MainNavigator.Screen name="Tabs" component={Tabs}/>
          <MainNavigator.Screen name="Notifications" component={Notifications}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
