import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authetication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};
