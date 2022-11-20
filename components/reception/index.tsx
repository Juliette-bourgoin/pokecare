import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import { Card } from "../card";

export default function ReceptionView() {
  const [receptionPokemon, setReceptionPokemon] = useState(null);

  const [isLoading, setLoading] = useState(true);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(
          Math.random() * 1000
        )}`
      );
      const json = await response.json();
      const fetchDetails = await fetch(`${json.results[0].url}`);
      setReceptionPokemon(await fetchDetails.json());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View style={styles.container}>
			<ImageBackground source={require('../../assets/background-reception.png')} resizeMode="cover" style={styles.image}>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<>
						<Card pokemon={receptionPokemon}/>
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
    justifyContent: "center"
  },
});


