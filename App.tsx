import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Detail } from './components/detail';
import { InstaCard } from './components/instaCard';
import type { RandomImagesJSON, RandomImagesJSON2 } from './types';

const data = require('./random-images.json') as RandomImagesJSON[];
const data2 = require('./random-images-2.json') as RandomImagesJSON2[];

function Home() {
  const { navigate } = useNavigation();
  const handleOnPress = (id: string) => {
    // navigate('Detail', {id});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {handleOnPress(item.id)}}>
            <InstaCard image={item.download_url} caption={"uu"}/>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>

  );

}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Instagram" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
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
