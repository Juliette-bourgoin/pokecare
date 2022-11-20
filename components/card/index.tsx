import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Button } from "react-native";
import MyButton from "../button";
import { Icon } from '@rneui/themed';
import { IPokemon } from "../../app/interfaces/Pokemon.interface";





export function Card({pokemon}: any) {


  const [modalVisible, setModalVisible] = useState(false);

	const [number, setNumber] = React.useState(1);

	const getRandomNumber = () => {
		const randomNumber = Math.floor(Math.random() * 5) + 1;
		setNumber(randomNumber);
}



  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.card}>
          <View style={styles.cardView}>
					<Image
						source={{ uri: pokemon.sprites.front_default }}
						style={styles.image}/>
					<Text style={styles.name}>{pokemon.name}</Text>
					<Text style={styles.health}>Niveau de faim : {number}</Text>
					<Text style={styles.type}>Type : {pokemon.types[0].type.name}</Text>
					<MyButton title="Rendre à son dresseur"/>



					<Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setModalVisible(!modalVisible); getRandomNumber() }}>
						<Text style={styles.textStyle}><Icon name='close' color='#FFF' /></Text>
					</Pressable>


          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Clique sur le pokemon</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
		width: "100%",
		height: "100%"
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
	buttonClose: {
		position: 'absolute',
		right: -10,
		top: -10,
		backgroundColor: "#19462A",
		color: "white"
	},
  cardView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#294935",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
	name: {
		textAlign: "center",
		fontSize: 26,
		marginBottom: 10,
		color: "black"
	},
	type: {
		textAlign: "center",
		fontSize: 20,
	},
	image: {
		width: 180,
		height: 180,
		textAlign: "center",
		marginBottom: 4,
	},
	health: {
		fontSize: 20,
	}
});



/* Dans les card, on affiche le nom, la photo, le type, on affiche le bouton rendre à son dresseur, + niveau de faim
0 à 5

si on lui donne une baie dans la room, ça augmente de point
quand il est à 5/5 > le bouton est disable */
