import { Provider } from "react-redux";
import React from "react";
import { StyleSheet } from "react-native";
import store from "./store/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "./components/Navigation/SearchScreen";
import SamplerScreen from "./components/Navigation/SamplerScreen";
import LibraryScreen from "./components/Navigation/LibraryScreen";

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case "Library":
                  iconName = focused ? "library" : "library-outline";
                  break;
                case "Pad":
                  iconName = focused
                    ? "keypad"
                    : "keypad-outline";
                  break;
                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                default:
                  iconName = "ban";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "gray",
            activeBackgroundColor:"#2E2E2E",
            inactiveBackgroundColor:"#2E2E2E"
          }}
        >
          <Tabs.Screen name="Pad" component={SamplerScreen}/>
          <Tabs.Screen name="Library" component={LibraryScreen}/>
          <Tabs.Screen name="Search" component={SearchScreen}/>
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
