import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addLibrary } from "../Library/LibrarySlice";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
} from "react-native";

export default function SearchScreen() {
  const url = "https://freesound.org/apiv2/search/text/?query=";
  const key = "&token=tCQu8YPpeTTck0MOBWRcELYgHeuTqgHYuk8JBMP4";
  const [state, setState] = useState({
    name: "",
    results: [],
  });
  const [sounds, setSounds] = useState([])
  const dispatch = useDispatch();

  /**
	 * Load sounds from freesound API
	 */
  const searchSampler = () =>
    axios(url + state.name + key).then(async (data) => {
      if (data.data.results) {
        setSounds(data.data.results);
      }
    })


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search sampler in FreeSound</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) =>
          setState((data) => {
            return { ...data, name: text };
          })
        }
        placeholder="Please enter a text..."
        onSubmitEditing={searchSampler}
        value={state.name}
      />

      <FlatList
        data={sounds}
        renderItem={(result) => (
          <View style={styles.data}>
            <Text style={styles.name}> {result.item.name}</Text>
            <Button color="#FF9900" title="add" onPress={() => {
                dispatch(addLibrary({item:result.item}));
            }}></Button>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 40,
  },
  data: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    textAlign:'center',
  },
  name: {
    padding: 20,
    fontSize: 18,
    color: "#FFF",
    backgroundColor: "#454545",
    fontWeight: "600",
  },
});
