import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
		color: "white",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 100,
	},
	cross_close: {
		marginTop: 6
	},
  cardView: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 25,
		paddingBottom: 25,
		paddingRight: 40,
		paddingLeft: 40,
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
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
    elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 1,
		shadowRadius: 6,
    shadowOffset: {width: 0, height: 0},
  },
	button_dresseur: {
		backgroundColor: "#CBDEF3",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
    elevation: 2,
	},
  buttonOpen: {
    backgroundColor: "#294935",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
		marginBottom: 0,
		alignItems: "center",
		alignContent: "center",
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
		marginBottom: 20,
	},
	image: {
		width: 180,
		height: 180,
		textAlign: "center",
		marginBottom: 4,
	},
	divnourriture: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		marginBottom: 10
	},
	divfaim: {
		width: 96,
		borderColor: "#B1CDBB",
		borderWidth: 1,
		borderStyle: "dotted",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		padding: 4,
		borderRadius: 4,
	},
	health: {
		fontSize: 20,
		marginBottom: 10,
	}
});
