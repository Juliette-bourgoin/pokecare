import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { IPokemon } from "../../app/interfaces/Pokemon.interface";
import MyButton from "../button";
import { Card } from "../card";

export default function ReceptionView() {
  const [receptionPokemon, setReceptionPokemon] = useState<IPokemon>();
  const { navigate } = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
  };
  const getPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(
          Math.random() * 1000
        )}`
      );
      const json = await response.json();
      const fetchDetails = await fetch(`${json.results[0].url}`);
      const pokemon = await fetchDetails.json();
      setReceptionPokemon({
        health: getRandomNumber(),
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        type: pokemon.types[0].type.name
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleClick = () => {
    console.log(1223)
    navigate("Soins",receptionPokemon)

  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background-reception.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Card pokemon={receptionPokemon} />
						<View style={styles.container_soin}>
            	<MyButton title="Prendre soin du pokémon 🩺" onPress={handleClick} style={styles.button_soin}/>
						</View>
          </>
        )}
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
  },
	container_soin: {
		marginBottom: 60,
		marginLeft: 80,
		marginRight: 80
	},
	button_soin: {
		backgroundColor: "#DFF7E8",
    color: "white",
    fontSize: 30,
		borderRadius: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
    elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 0.8,
		shadowRadius: 6,
    shadowOffset: {width: 0, height: 0},
	}
});
