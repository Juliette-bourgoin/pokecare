import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Detail } from './components/detail';
import { ReceptionView } from './components/reception';
import type { RandomImagesJSON, RandomImagesJSON2 } from './types';

const data = require('./random-images.json') as RandomImagesJSON[];
const data2 = require('./random-images-2.json') as RandomImagesJSON2[];

function Home() {
  const { navigate } = useNavigation();
  const handleOnPress = (id: string) => {
    // navigate('Detail', {id});
  };
  return (
    <ReceptionView/>

  );

}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ReceptionView/>
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
