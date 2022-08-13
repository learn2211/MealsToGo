import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useFontLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";

export default function App() {
  const [oswaldLoaded] = useFontOswald({ Oswald_400Regular });
  const [latoLoaded] = useFontLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
