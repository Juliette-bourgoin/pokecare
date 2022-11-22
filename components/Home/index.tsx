import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import MyButton from "../button";
import { Card } from "../card";
export default function HomeView() {
  const { navigate } = useNavigation();
  const handleOnPress = () => {
    navigate('Reception', {});
  };


  return (
      <View style={styles.container}>
				<ImageBackground source={require('../../assets/background-home.png')} resizeMode="cover" style={styles.image}>
					<MyButton
          title="Entrer"
          onPress={handleOnPress}/>
    		</ImageBackground>
      </View>
      );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
    flex: 1,
    justifyContent: "center"
  },
});
