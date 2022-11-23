import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from "react-native";
import { IBerry } from "../../app/interfaces/Berry.interface";
import { IPokemon } from "../../app/interfaces/Pokemon.interface";
import MyButton from "../button";
import { PokemonCard } from "../pokemonCard";

export default function CareView({ route }: any) {
  const pokemonInstance = route.params;
  const [pokemon, setPokemon] = useState<IPokemon>({
    name: pokemonInstance.name,
    sprite: pokemonInstance.sprite,
    health: pokemonInstance.health,
    type: pokemonInstance.type,
  });

  const berries: IBerry[] = [
    {
      name: "Cheri",
      path: require("../../assets/cheri-berry.png"),
    },
    {
      name: "Oran",
      path: require("../../assets/oran-berry.png"),
    },
    {
      name: "Leppa",
      path: require("../../assets/leppa-berry.png"),
    },
  ];

  const updateHealth = () => {
    const updatedPokemon: IPokemon = {
      ...pokemon,
      ...{ health: pokemon.health + 1 },
    };
    setPokemon(updatedPokemon);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
        }),
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
        }),
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
        }),
      ]),
      { iterations: 3 }
    ).start();
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.centeredView}>
      <ImageBackground
        source={require("../../assets/back-care.png")}
        resizeMode="cover"
        style={styles.image}
      >

        <PokemonCard pokemon={pokemon} />

        <View>
            <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
          <Pressable
            style={[styles.button_food]}
            onPress={() => setModalVisible(true)}
          >
            <MyButton onPress={shake} title="Donner à manger 🫐"></MyButton>
          </Pressable>
        </Animated.View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {pokemon.health < 5 ? (
                <View>
                  <View style={styles.container_food}>
                    <TouchableOpacity
                      style={styles.baie}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        updateHealth();
                      }}
                    >
                      <Image
                        style={styles.image_baie}
                        source={require("../../assets/cheri-berry.png")}
                      />
                      <Text>Cheri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.baie}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        updateHealth();
                      }}
                    >
                      <Image
                        style={styles.image_baie}
                        source={require("../../assets/leppa-berry.png")}
                      />
                      <Text>Leppa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.baie}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        updateHealth();
                      }}
                    >
                      <Image
                        style={styles.image_baie}
                        source={require("../../assets/oran-berry.png")}
                      />
                      <Text>Oran</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={styles.baie}>
                  <Text>Ton {pokemon.name.split('-')[0].charAt(0).toUpperCase() + pokemon.name.split('-')[0].slice(1)} n'a plus faim ! </Text>
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setModalVisible(!modalVisible);}}>
                    <Icon name='close' color='#FFF' />
                  </Pressable>

                </View>
              )}
            </View>
          </View>
        </Modal> 
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cross_close: {
		marginTop: 6
	},
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  container_food: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 14,
  },
  baie: {
    marginRight: 14,
    marginLeft: 14,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  image_baie: {
    marginBottom: 8,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  button_food: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 48,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text_food: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

enum images {
  cheri = "../../assets/berries/cheri-berry.png",
}
