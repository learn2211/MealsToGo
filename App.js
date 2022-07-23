import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestuarantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
