import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { IBerry } from "../../app/interfaces/Berry.interface";
import { IPokemon } from "../../app/interfaces/Pokemon.interface";
import { Card } from "../card";

export default function CareView({route}: any) {
  const pokemonInstance = route.params
  const [pokemon, setPokemon] = useState<IPokemon>({
    name: pokemonInstance.name,
    sprite: pokemonInstance.sprite,
    health: pokemonInstance.health,
    type: pokemonInstance.type
  });

  console.log(pokemon)

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

  const [selectedBerry, setSelectedBerry] = useState<IBerry>(berries[0]);

  const updateHealth = () =>{
    const updatedPokemon: IPokemon = {
      ...pokemon,
      ...{health: pokemon.health + 1}
    }
    setPokemon(updatedPokemon)
  }

  // useEffect(() => {}, []);

  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation();
     
  
  return (
    <View style={styles.centeredView}>
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
            <View>
              <SelectDropdown
                data={berries.map((e) => e.name)}
                onSelect={(selectedItem, index) => {
                  setSelectedBerry(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); updateHealth()}}
            >
              <Text style={styles.textStyle}>Feed this {selectedBerry?.name}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Card pokemon = {pokemon}/>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Feed a pokemon</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
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
