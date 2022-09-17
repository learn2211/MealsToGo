import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safearea.component";
import { Text } from "react-native";
import { RestaurantsNavigator } from "./Restaurants.navigator";
import { MapScreen } from "../../features/map/screens/Map.Screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings are here</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
