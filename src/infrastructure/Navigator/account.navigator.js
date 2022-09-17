import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegistrationScreen } from "../../features/account/screens/registration.screen";

const AccountStackNavigator = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStackNavigator.Navigator headerMode="none">
      <AccountStackNavigator.Screen
        name="AccountScreen"
        component={AccountScreen}
      />
      <AccountStackNavigator.Screen
        name="LogInScreen"
        component={LoginScreen}
      />
      <AccountStackNavigator.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
    </AccountStackNavigator.Navigator>
  );
};
