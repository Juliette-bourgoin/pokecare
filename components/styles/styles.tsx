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
	divnourriture: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		marginBottom: 10
	},
	divfaim: {
		width: 90,
		borderColor: "black",
		borderWidth: 1,
		borderStyle: "solid"
	},
	health: {
		fontSize: 20,
		marginBottom: 10,
	}
});
