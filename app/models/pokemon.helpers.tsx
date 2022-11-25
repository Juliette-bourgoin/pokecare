import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "../../components/styles/styles";
import { IPokemon } from "../interfaces/Pokemon.interface";

export const getHealthBar = (health: number) => {
  const miam = [];
  for (let i = 0; i < health; i++) {
    miam.push("🍓");
  }
  return (
    <View style={styles.divnourriture}>
      <Text style={styles.health}>Niveau de faim :</Text>
      <Text style={styles.divfaim}>{miam}</Text>
    </View>
  );
};
