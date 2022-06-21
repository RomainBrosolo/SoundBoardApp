import React from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";
import { Icon } from 'react-native-elements'
import LibraryItems from "../LibraryItems";
import { librarySelector } from "../LibrarySlice";

const LibraryView = ({ navigation }) => {
  const library = useSelector(librarySelector);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Record", {});
        }}>
				<Icon name="mic" size={26} color={'#ffffff'} />
				<Text style={styles.buttonText}>Record a song</Text>
			</TouchableOpacity>
      <FlatList
        renderItem={({ item }) => <LibraryItems {...item} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        data={library}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#242424",
    paddingTop: 30,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 31,
    fontWeight: "700",
    marginBottom: 20,
  },
  button: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 50,
		backgroundColor: '#FF9900',
		marginTop: 5,
    marginBottom: 15,
	},
  buttonText: {
		color: '#ffffff',
		fontSize: 18,
		marginLeft: 10
	},

});

export default LibraryView;
