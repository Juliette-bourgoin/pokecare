import React from "react";
import { Image, View, Text } from "react-native";


export interface MovieCardProps {
  picture?: string
  title?: string
  category?: string
  year?: string
}

export function MovieCard({ picture, title }: MovieCardProps) {
  
  return (
    <View
    style={{}}>
      <Image source={{ uri: picture }} style={{ width: 200, height: 400}} />
      <Text style={{ color: 'white' }} >{title}</Text>
    </View>
  )
}
