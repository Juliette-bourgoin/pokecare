import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from './components/card';
import HomeView from './components/Home';
import ReceptionView from './components/reception';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Reception" component={ReceptionView} />
      {/* <Stack.Screen name="Care" component={CareView} /> */}
    </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
