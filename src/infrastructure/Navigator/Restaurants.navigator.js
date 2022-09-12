import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestuarantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native-paper";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurantDetails.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestuarantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
