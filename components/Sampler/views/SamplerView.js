import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { samplerSelector } from "../SamplerSlice";
import SamplerItems from "../SamplerItems";


const SamplerView = ({ navigation }) => {

  const samplerList = useSelector(samplerSelector);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        renderItem={({ item, index }) => <SamplerItems navigation={navigation} {...item} index={index} />}
        keyExtractor={(item) => item.id.toString()}
        data={samplerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center", 
      alignItems:"center",
      backgroundColor: "#242424",
      paddingTop:30
    },
    title: {
      color: "#FFF",
      fontSize: 32,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 20,
    },
  });

export default SamplerView;
