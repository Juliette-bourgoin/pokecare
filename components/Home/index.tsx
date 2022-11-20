import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import { Card } from "../card";
export default function HomeView() {
  const { navigate } = useNavigation();
  const handleOnPress = () => {
    navigate('Reception', {});
  };
  return (
      <View>
        <Button
          title="Enter"
          onPress={handleOnPress}
    />
      </View> 
      );
}