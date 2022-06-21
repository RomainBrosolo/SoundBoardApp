import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { librarySelector } from "../../Library/LibrarySlice";
import EditItems from "../EditItems";

const SamplerEditView = ({ route, navigation }) => {
  const libraryList = useSelector(librarySelector);
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Current : {name} </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        renderItem={({ item }) => (
          <EditItems index={route.params.index} id={route.params.id} item={item} navigation={navigation}></EditItems>
        )}
        keyExtractor={(item) => item.id.toString()}
        data={libraryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    flex: 1,
    paddingTop: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SamplerEditView;
