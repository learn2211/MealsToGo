import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { LocationContextProvider } from "./src/services/locations/location.context";

import {
  useFonts as useFontLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { Navigator } from "./src/infrastructure/Navigator/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import firebase from "firebase/compat/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authetication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOZWdfEHgFvz8I2DLO1AgPif4K3B6HLbQ",
  authDomain: "mealstogo-2aa67.firebaseapp.com",
  projectId: "mealstogo-2aa67",
  storageBucket: "mealstogo-2aa67.appspot.com",
  messagingSenderId: "202903616851",
  appId: "1:202903616851:web:027793660df7b91daab5a6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useFontOswald({ Oswald_400Regular });
  const [latoLoaded] = useFontLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigator />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
