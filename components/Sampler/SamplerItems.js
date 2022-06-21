import React from "react";
import { View, TouchableHighlight } from "react-native";
import { Audio } from "expo-av";
import defaultSound from '../../config'

/**
 * @param {*} id - item identification number
 * @param {*} name - item name
 * @param {*} uri - address of the sound recorded by the microphone
 * @param {*} type - sound type of the item
 * @param {*} type - color of the item
 * @param {*} index - index of the item in the pad
 */
const SamplerItems = ({ id, name, type, uri, color, navigation, index }) => {
  const [sound, setSound] = React.useState();

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  /**
	 * Play recorded sound or default sound
	 */
  const playSoundSelected = async() => {
    const { sound } = await Audio.Sound.createAsync(type == "default" ? defaultSound[id - 1] : {uri:uri});
    setSound(sound);
    await sound.playAsync();
  }

  return (
    <View style={{ margin: 20 }}>
      <TouchableHighlight
        onPress={playSoundSelected}
        onLongPress={() => {
          navigation.navigate("Edit", {
            id: id,
            name: name,
            index: index,
          });
        }}
      >
        <View style={{ backgroundColor: color, height: 50, width: 50 }} />
      </TouchableHighlight>
    </View>
  );
};

export default SamplerItems;
