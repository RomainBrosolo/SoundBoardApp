import React from "react";
import { View, TouchableHighlight } from "react-native";
import { Audio } from "expo-av";
import defaultSound from '../../config'

const SamplerItems = ({ id, name, type, uri, color, navigation, index }) => {
  const [sound, setSound] = React.useState();

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
