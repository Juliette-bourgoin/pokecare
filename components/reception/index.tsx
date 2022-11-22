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
    navigate("Care",receptionPokemon)

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

            <MyButton title="Take care of the Pokemons" onPress={handleClick}/>
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
});
