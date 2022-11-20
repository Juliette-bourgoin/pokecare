import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { IPokemon, IPokemonGetAll } from "../../app/interfaces/Pokemon.interface";

export default function ReceptionView() {
  const [receptionPokemon, setReceptionPokemon] = useState()
  let randomPokemon: IPokemonGetAll;

  console.log("MIAM")
  
  // useEffect(( ) => {
  //   const fetchPokemon = async () => {
  //     new Promise((res: Function, rej: Function) => {
  //       fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(Math.random() * 1000)}`)
  //       .then((pokemon: any) => {
  //         res(pokemon.json())
  //       }
  //       )
  //     })
  //   };
  //   fetchPokemon();
  
  //   const fetchDetails = async (pokemon: IPokemonGetAll) => {
  //     const pokemonDetails =  await fetch(`${pokemon.url}`);
  //     setReceptionPokemon( await pokemonDetails.json());
  //   };
  //   fetchDetails(randomPokemon);
  // }, []);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);


  if ( receptionPokemon !== undefined  ) {
    return (
      // @ts-ignore
      <Text style={{margin: 50}}>{JSON.stringify(receptionPokemon.name)}</Text>
      // <Image source={{ uri: receptionPokemon.sprites. }} style={{ width: 100, height: 100 }} />
    );
  } 
  return (
    <Text style={{margin: 50}}>Loading...</Text>
  )

  
}
