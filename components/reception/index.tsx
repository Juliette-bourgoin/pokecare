import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { IPokemon, IPokemonGetAll } from "../../services/interfaces/Pokemon.interface";



export function ReceptionView() {
  const [receptionPokemon, setReceptionPokemon] = useState()
  let randomPokemon: IPokemonGetAll;
  
  
  

  useEffect(( ) => {
    const fetchPokemon = async () => {
      const pokemon =  ;
      new Promise((res: Function, rej: Function) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(Math.random() * 1000)}`)
        .then((pokemon: any) => {
          res(pokemon.json())
        }
        )
      })
    };
    fetchPokemon();
    
    const fetchDetails = async (pokemon: IPokemonGetAll) => {
      const pokemonDetails =  await fetch(`${pokemon.url}`);
      setReceptionPokemon( await pokemonDetails.json());
    };
    fetchDetails(randomPokemon);
  }, []);

  return (
    <Text style={{margin: 50}}>{JSON.stringify(receptionPokemon.name)}</Text>
    // <Image source={{ uri: receptionPokemon.sprites. }} style={{ width: 100, height: 100 }} />
  );
}
