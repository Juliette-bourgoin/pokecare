import React from "react";
import { StyleSheet, Image, View, Text, Button } from "react-native";
import MyButton from "../button";



export interface Card {
  name?: string;
  type?: string;
}

export function Card({ name, type }: Card) {
  const truc: Card = {
    // option espace
  };

	const pokemon: any = {
		name: "Bulbizarre",
		type: "Terre",
		health: 3,
		image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png"
	};

  return (
    <View style={styles.container}>
			<View style={styles.card}>
				<Image
						source={{ uri: pokemon.image }}
						style={styles.image}
					/>
				<Text style={styles.name}>{pokemon.name}</Text>
				<Text style={styles.health}>Niveau de faim : {pokemon.health}</Text>
				<Text style={styles.type}>Type : {pokemon.type}</Text>
				<MyButton title="Rendre à son dresseur"/>

			</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: "#A2C796",
		width: '100%',
		justifyContent: "center",
		alignItems: 'center'
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#FFF",
		shadowOffset: { width: 1, height:1 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		width: '70%',
		height: '35%',
		justifyContent: "center",
		alignItems: 'center'
	},
	name: {
		textAlign: "center",
		fontSize: 26,
		marginBottom: 10,
	},
	type: {
		textAlign: "center",
		fontSize: 20,
	},
	image: {
		width: 180,
		height: 180,
		textAlign: "center",
		marginBottom: 4,
	},
	health: {
		fontSize: 20,
	}
});



/* Dans les card, on affiche le nom, la photo, le type, on affiche le bouton rendre à son dresseur, + niveau de faim
0 à 5

si on lui donne une baie dans la room, ça augmente de point
quand il est à 5/5 > le bouton est disable */
