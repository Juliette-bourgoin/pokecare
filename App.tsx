import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import HomeView from './components/Home';
import ReceptionView from './components/reception';
import { Audio } from 'expo-av';

const buttonColor = ['red', 'orange', 'violet'];

/* const xylophoneSounds = [
	source('https://lasonotheque.org/UPLOAD/mp3/0097.mp3')
]; */







export default function App() {




	const handlePlaySound = async () => {
		const soundObj = new Audio.Sound()

		try {
			let source = 'https://lasonotheque.org/UPLOAD/mp3/0097.mp3'
			await soundObj.loadAsync({uri : source})
			await soundObj
			.playAsync()
			.then(async playbackStatus => {
				setTimeout(() => {
					soundObj.unloadAsync()
				// }, playbackStatus.playableDurationMillis)
			}, 800)
			})
			.catch(error => {
				console.log(error)
			})
		} catch (error) {
			console.log(error)
		}
	}






  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Reception" component={ReceptionView} />
			<View>
				{buttonColor && buttonColor.map((item, index) => (
					<View key={index}>
						<TouchableOpacity onPress={handlePlaySound}>
						<Text>{`Sound ${index+1}`}</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
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
