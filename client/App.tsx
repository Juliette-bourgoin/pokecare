import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import AddMovie from './components/addMovie/addMovie';
import { FeatureMovies } from './components/featuredMovies';

SplashScreen.preventAutoHideAsync();

const GRAPHQL_PORT = 8000;
// Initialize Apollo Client
const client = new ApolloClient({
  uri: `http://172.20.10.2:${GRAPHQL_PORT}/graphql`,
  cache: new InMemoryCache(),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require('./assets/netflixFont/BebasNeue.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ScrollView
        onLayout={onLayoutRootView}
       style={{backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 20}}>
      <FeatureMovies/>
      <AddMovie/>
      </ScrollView>
    </ApolloProvider>
  );
}

