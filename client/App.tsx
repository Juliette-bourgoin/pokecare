// import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useFonts } from 'expo-font';

// import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { Card } from './components/card';


// SplashScreen.preventAutoHideAsync();

const GRAPHQL_PORT = 8000;
// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: `http://172.20.10.2:${GRAPHQL_PORT}/graphql`,
//   cache: new InMemoryCache(),
// });

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require('./assets/netflixFont/BebasNeue.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

			<Card />

  );
}

