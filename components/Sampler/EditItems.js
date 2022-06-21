import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { editSampler } from "./SamplerSlice";

/**
 * @param {*} item - item and properties item
 * @param {*} index - item index in pad
 */
const EditItems = ({item, navigation, index}) => {
  const [sound, setSound] = React.useState();

  const dispatch = useDispatch();

  /**
	 * Edit sampler by redux store action
	 */
  const editSamplerSelected = () => {
    dispatch(editSampler({index: index, item:item}));
    navigation.pop();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Button onPress={editSamplerSelected} title="Select" color="#FF9900"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  name: {
    padding: 20,
    fontSize: 19,
    color: "#FFF",
    backgroundColor: "#424242",
    fontWeight: "700",
  },
});

export default EditItems;
