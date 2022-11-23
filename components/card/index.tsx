import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import MyButton from "../button";
import { Icon } from '@rneui/themed';
import { styles } from "../styles/styles";





export function Card({pokemon}: any) {

  const [modalVisible, setModalVisible] = useState(false);

  const getHealthBar = (health: number) => {
    const miam = [];
    for (let i = 0; i < health; i++) {
      miam.push("🍓");
    }
    return (
      <View style={styles.divnourriture}>
        <Text style={styles.health}>Niveau de faim :</Text>
				<View style={styles.divfaim}>
        	<Text>{miam}</Text>
				</View>
      </View>
    );
  };

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
						source={{ uri: pokemon.sprite }}
						style={styles.image}/>
					<Text style={styles.name}>{pokemon.name}</Text>
					{getHealthBar(pokemon.health)}
					<Text style={styles.type}>Type : {pokemon.type}</Text>

					<MyButton title="Rendre à son dresseur" style={styles.button_dresseur} />

					<Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setModalVisible(!modalVisible);}}>
						<Text style={styles.cross_close}><Icon name='close' color='#FFF' /></Text>
					</Pressable>


          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Clique pour accueillir un pokemon</Text>
      </Pressable>
    </View>
  );
};

/* Dans les card, on affiche le nom, la photo, le type, on affiche le bouton rendre à son dresseur, + niveau de faim
0 à 5

si on lui donne une baie dans la room, ça augmente de point
quand il est à 5/5 > le bouton est disable */
