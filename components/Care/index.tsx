import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
	ImageBackground,
	TouchableOpacity,
	Image
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
			<ImageBackground
        source={require("../../assets/background-care.png")}
        resizeMode="cover"
        style={styles.image}
      >
				<Pressable style={[styles.button_food]} onPress={() => setModalVisible(true)}>
        	<Text style={styles.text_food}>Donner à manger 🫐</Text>
      	</Pressable>
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
							<View style={styles.container_food}>
								<TouchableOpacity style={styles.baie} onPress={() => setModalVisible(!modalVisible)}>
									<Image style={styles.image_baie} source={require('../../assets/cheri-berry.png')}/>
									<Text>Cheri</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.baie} onPress={() => setModalVisible(!modalVisible)}>
									<Image style={styles.image_baie} source={require('../../assets/leppa-berry.png')}/>
									<Text>Leppa</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.baie} onPress={() => setModalVisible(!modalVisible)}>
									<Image style={styles.image_baie} source={require('../../assets/oran-berry.png')}/>
									<Text>Oran</Text>
								</TouchableOpacity>
							</View>
              {/* <SelectDropdown
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
              /> */}
            </View>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); updateHealth()}}
            >
              <Text style={styles.textStyle}>Feed this {selectedBerry?.name}</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Card pokemon = {pokemon}/>
      {/* <Pressable
        style={[styles.button_food]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Feed a pokemon</Text>
      </Pressable> */}
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
	image: {
    flex: 1,
    justifyContent: "center",
		width: '100%',
		alignItems: "center"
  },
	container_food: {
		justifyContent: "center",
		flexDirection: "row",
		marginBottom: 14
	},
	baie: {
		marginRight: 14,
		marginLeft: 14,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	image_baie: {
		marginBottom: 8
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
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
	button_food: {
		borderRadius: 20,
    padding: 10,
    elevation: 2,
		backgroundColor: "white",
		width: "40%",
		marginTop: 40,
		shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 8,
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
