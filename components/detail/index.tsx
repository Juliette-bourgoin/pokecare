import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { RandomImagesJSON2 } from "../../types";
import { InstaCard } from "../instaCard";


export interface DetailImageProps {
  route: any;
}
export function Detail({ route }: DetailImageProps) {
  const { id } = route.params;
  const [author, setAuthor] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(`https://picsum.photos/id/${id}/info`)
    .then((data) => {
      // setAuthor(data.author);
      navigation.setOptions

    })
  })
  return (
    <View>

      {/* <InstaCard image={`https://picsum.photos/id/${id}/1544/1024`}>
      </InstaCard> */}
    </View>
  )

}
