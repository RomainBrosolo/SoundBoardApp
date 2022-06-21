import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SamplerView from "../Sampler/views/SamplerView";
import SamplerEditView from "../Sampler/views/SamplerEditView";

const SearchStack = createStackNavigator();

const SamplerScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="Pad">
      <SearchStack.Screen
        name="Pad"
        component={SamplerView}
        options={{
          title: "Pad",
          headerStyle: {
            backgroundColor: "#242424",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "650",
            textAlign: "center",
          },
        }}
      />
      <SearchStack.Screen
        name="Edit"
        component={SamplerEditView}
        options={{
          title: "Edit Sampler",
          headerStyle: {
            backgroundColor: "#242424",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "650",
            textAlign: "center",
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SamplerScreen;
