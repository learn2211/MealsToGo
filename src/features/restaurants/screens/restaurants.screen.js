import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants.info.component";

export const RestuarantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.locationsStyle}>
      <RestaurantInfo style={styles.locationsStyle} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: "white",
  },
  search: {
    flex: 0.1,
    padding: 10,
    backgroundColor: "lightblue",
    justifyContent: "center",
  },
  locationsStyle: {
    flex: 0.9,
    padding: 10,
    backgroundColor: "orange",
  },
});
