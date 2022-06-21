import React from "react";
import LibraryView from "../Library/views/LibraryView";
import RecordView from "../Record/views/RecordView";
import { createStackNavigator } from "@react-navigation/stack";

const SearchStack = createStackNavigator();

const LibraryScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="Library">
      <SearchStack.Screen
        name="Library"
        component={LibraryView}
        options={{
          title: "Library",
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
        name="Record"
        component={RecordView}
        options={{
          title: "Recording",
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

export default LibraryScreen;
