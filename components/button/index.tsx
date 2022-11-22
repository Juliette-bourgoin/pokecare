import React from "react";
import { Button, StyleSheet } from "react-native";

export interface MyProps {
  title?: string;
  onPress?: ()=>{}
}

export default function MyButton({ title, onPress }: MyProps) {
  return <Button title={title} onPress={onPress} style={styles.button} />;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A2C796",
    color: "white",
    fontSize: 30,
  },
});

{
  /* <MyButton
                title="Retour au début"
                onPress={() => navigation.navigate('start')}
              /> */
}
