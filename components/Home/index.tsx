import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ImageBackground, Text, Pressable } from "react-native";
import MyButton from "../button";
import { Card } from "../card";
export default function HomeView() {
  const { navigate } = useNavigation();
  const handleOnPress = () => {
    navigate('Réception', {});
  };


  return (
      <View style={styles.container}>
				<ImageBackground source={require('../../assets/background-home.png')} resizeMode="cover" style={styles.image}>
					{/* <MyButton
          title="Entrer"
          onPress={handleOnPress}
					style={styles.button}/> */}
					<Pressable style={styles.button} onPress={handleOnPress}>
        		<Text style={styles.text}>Clique pour entrer</Text>
      		</Pressable>
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
    justifyContent: "center",
		width: "100%",
		alignItems: "center"
  },
	button: {
		backgroundColor: "#DFF7E8",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 340,
		borderRadius: 20,
		shadowColor: 'black',
		shadowOpacity: 0.8,
		shadowRadius: 6,
    shadowOffset: {width: 0, height: 0},
	},
	text: {
		textAlign: "center",
		fontWeight: "700"
	}
});
