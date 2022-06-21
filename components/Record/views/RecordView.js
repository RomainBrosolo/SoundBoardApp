import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput,Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Audio } from "expo-av";
import { addLibrary } from "../../Library/LibrarySlice";

const RecordView = ({ navigation }) => {
  const [recording, setRecording] = React.useState();
  const [uri, setUri] = React.useState();
  const [sound, setSound] = React.useState();
  const [state, setState] = useState({
    name: "",
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  /**
	 * Add sound to Library by redux store action
	 */
  const addToLibrary = () => {
    dispatch(addLibrary({ name: state.name, uri: uri }));
    navigation.navigate("Library", {});
  };

  /**
	 * Play default sound or record sound (uri)
	 */
  const playSound = async() => {
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
    setSound(sound);
    await sound.playAsync();
  }

  /**
	 * Start the recording sound using mic
	 */
  const startRecord =  async() => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  /**
	 * Stop the recording sound using mic
	 */
  const stopRecord = async() => {
    setRecording(null)
		setRecording(false)

		await recording.stopAndUnloadAsync()
		const status = await recording.getStatusAsync()
		const urii = recording.getURI();
    setUri(urii);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={recording ? stopRecord : startRecord}>
				<Text style={styles.buttonText}>{recording ? "Stop Recording" : "Start Recording"}</Text>
			</TouchableOpacity>
      {uri ? (
        <View style={styles.form}>
          <TextInput
            style={styles.search}
            onChangeText={(text) =>
              setState((prevState) => {
                return { ...prevState, name: text };
              })
            }
            placeholder="Please enter a title"
            value={state.name}
          />
          <View style={styles.buttonView}>
          <Button title="Play sound" onPress={playSound} color="#FF9900" />
          <Button color="#FF9900" title="Save to Library" onPress={state.name ? addToLibrary : null} />
          </View>
        </View>
      ) : (
        <View></View>
      )}
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
  search: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },
  form: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "30%",
    backgroundColor: "#454545",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
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
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default RecordView;
