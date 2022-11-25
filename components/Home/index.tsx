import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeView({ route }: any) {
  const { navigate } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnPress = () => {
    navigate("Réception", {});
  };

  const alertDismission = (name: string) => {
    return Alert.alert(
      "Un Pokemon est parti",
      `${
        name.split("-")[0].charAt(0).toUpperCase() + name.split("-")[0].slice(1)
      } est rentré avec son dresseur 👋🏻`,
      [
        {
          text: "Fermer",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK, j'y retourne!",
          onPress: () => {
            handleOnPress();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background-home.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable style={styles.button} onPress={handleOnPress}>
          <Text style={styles.text}>Clique pour entrer</Text>
        </Pressable>
      </ImageBackground>
      <View>
        {route && route.params ? alertDismission(route.params.name) : ''}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DFF7E8",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 340,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  text: {
    textAlign: "center",
    fontWeight: "700",
  },
});
