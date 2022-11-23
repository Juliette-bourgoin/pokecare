import React from "react";
import { Button, StyleSheet, Pressable, Text } from "react-native";

export interface MyProps {
  title?: string;
	style?: string;
  onPress?: ()=>{}
}

/* export default function MyButton({ title, onPress, style }: MyProps) {
  return <Button title={title} onPress={onPress} style={style} />;
} */

export default function MyButton(props) {
  const { onPress, title = 'Save', style } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		fontWeight: "700"
	},
});

{
  /* <MyButton
                title="Retour au début"
                onPress={() => navigation.navigate('start')}
              /> */
}
