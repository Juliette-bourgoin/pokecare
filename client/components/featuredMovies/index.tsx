import React from "react";
import { FlatList, View, Text } from "react-native";
import { useGetAllMovies } from "../../hooks/useGetAllMovies";
import AddMovie from "../addMovie/addMovie";
import { MovieCard } from "../card";

export function FeatureMovies() {
  const { data, loading } = useGetAllMovies()
  if (loading) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  } 
  return (
    <FlatList
      horizontal
      data={data.getAllMovies}
      
      renderItem={({item}) => (
        <MovieCard
        picture={item.picture}
        title={item.title}>
        </MovieCard>
      )}>
      

    </FlatList>
  )
  
}