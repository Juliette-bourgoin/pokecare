import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={{ margin: 50 }}>{receptionPokemon.name}</Text>
          <Image
            source={{ uri: receptionPokemon.sprites.front_default }}
            style={{ width: 100, height: 100 }}
          />
        </>
      )}
    </View>
  );
}
