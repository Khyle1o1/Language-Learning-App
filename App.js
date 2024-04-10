import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Apps/Screens/Splash';
import { createContext, useEffect, useState } from 'react';
import { client } from './Apps/Utils/KindConfig';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export const AuthContext=createContext();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Notosans': require('./assets/fonts/NotoSans-Regular.ttf'),
  });


  const [auth,setAuth]=useState(false);
  useEffect(() => {
    checkAuthenticate();
},[auth]);

const checkAuthenticate = async () => {
  // Using `isAuthenticated` to check if the user is authenticated or not
  if (await client.isAuthenticated) {
    const userProfile = await client.getUserDetails();
    setAuth(true);
      // Need to implement, e.g: call an api, etc...
  } else {
    setAuth(false);
      // Need to implement, e.g: redirect user to sign in, etc..
  }
};

  return (
    <View style={styles.container}>
    {/* <Splash/> */}
    <AuthContext.Provider value={{auth,setAuth}}>
        <NavigationContainer>
          {auth?<TabNavigation/>:<Splash/>}
        </NavigationContainer>
    </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});