import React, {useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import externalStyle from './style/externalStyle';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from './pages/Homepage'

import { Nunito_600SemiBold} from '@expo-google-fonts/nunito';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font/build/FontHooks';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Nunito_600SemiBold
  });

  const onLaycoutRootView = useCallback(async () => {
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  

  return (
    
    <NavigationContainer>
      <Stack.Screen name='Home' component={Homepage}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
});
