import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: "100%",
		padding: 10,
	},
	leftContainer: {
		flexDirection: 'row',
	},
	midContainer: {
		justifyContent: 'space-around'
	},
	avatar: {
		width: 50,
		height: 50,
		marginRight: 15,
		borderRadius: 50,
	},
	userName: {
		fontWeight: 'bold',
		fontSize: 16,
		
	},
	status: {
		fontSize: 16,
		color: 'grey',
		width: '100%'
	},
});

export default styles