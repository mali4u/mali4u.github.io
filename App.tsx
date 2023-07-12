import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import externalStyle from './style/externalStyle';
//import * as SplashScreen from 'expo-splash-screen';

import { Nunito_600SemiBold} from '@expo-google-fonts/nunito';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font/build/FontHooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Nunito_600SemiBold
  });

  /*const onLaycoutRootView = useCallback(async () =>{
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
  }, [fontsLoaded]);*/

  if(!fontsLoaded){
    return null;
  }

  

  return (
    <View style={styles.container}>
      <Text style={[externalStyle.H2, externalStyle.purple]}>Open up App.js to start working on your app!</Text>
      <Text style={externalStyle.P}>Hello! here is my app!</Text>
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
