import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
	},
	typeBar: {
        marginLeft: 15,
        flexDirection: 'row',
		justifyContent: 'space-evenly'
    },
	profileContainer: {
        marginTop: 15,
		marginLeft: 15,
        flexDirection: 'row',
	},
	profileNumbers: {
		fontSize: 50,
		flex: 1,
	},
    profileText: {
        fontSize: 16,
        flex: 1,
		textAlign: 'left',
        fontWeight: '100'
    },
    userName: {
		alignSelf:'flex-start',
        fontSize: 20,
        marginLeft: '2%',
    },
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
});
export default styles;
