import React, { useMemo, useState } from "react"
import { View, Image, Text, TouchableOpacity, Share } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import * as Random from 'expo-random';
import { Feather } from '@expo/vector-icons'; 


export interface InstaCardProps {
  caption: string;
  image: string;
}
export function InstaCard({ caption, image }: InstaCardProps) {
  const [like, setLike] = useState(false);
  const likeNumber = useMemo(() => Random.getRandomBytes(1), []);
  const shareImage = async () => {
    Share.share({
      message: 'My Super miam'
    });
  } 
  return (
    <View>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      <Text> { caption } </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setLike(!like)}>
        {
          like ? 
          (<AntDesign name="heart" size={24} color="red"/>) :
          (<AntDesign name="hearto" size={24} color="black"/>)
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={(prev) => setLike(!prev)}>
          <EvilIcons name="comment" size={24} color="black" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => shareImage()}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text> Likes {likeNumber}</Text>
    </View>
  )
}