import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

//import each screen
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import Notifications from "./screens/Notifications";
import SideDrawer from './assets/components/Drawer';

const MainNavigator = createStackNavigator();

export default function App() {


  const [loaded] = useFonts({
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
      <NavigationContainer>
        <MainNavigator.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="Splash"
          >
          <MainNavigator.Screen name="Splash" component={Splash}/>
          <MainNavigator.Screen name="Onboarding" component={Onboarding}/>
          <MainNavigator.Screen name="Notifications" component={Notifications}/>
          <MainNavigator.Screen name="Drawer" component={SideDrawer}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
  );
}

