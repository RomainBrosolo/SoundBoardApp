import React from "react";
import { Button, Text, View, StyleSheet} from "react-native";
import { useDispatch } from "react-redux";
import { removeLibrary } from "./LibrarySlice";
import { Audio } from "expo-av";
import defaultSound from '../../config'

const LibraryItems = ({ id, name, uri, type }) => {
  const [sound, setSound] = React.useState();
  const dispatch = useDispatch();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(type == "default" ? defaultSound[id - 1] : {uri:uri});
    setSound(sound);
    await sound.playAsync();
  }

  const removeItemLibrary = () => {
    dispatch(removeLibrary(id));
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
      <Text style={styles.name}>{name}</Text>
      <Button title="Play" color="#FF9900" onPress={playSound} />
      <Button title="Delete" color="black" onPress={removeItemLibrary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454545',
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#454545",
    color: "#FFF",
    marginRight: 50,
    marginLeft:10
  },

});

export default LibraryItems;
