import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from "react";
import { RestaurantRequest, RestaurantTransform } from "./restaurants.service";
import { LocationContext } from "../locations/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (locationCoordinates) => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      RestaurantRequest(locationCoordinates)
        .then(RestaurantTransform)
        .then((results) => {
          //console.log(results);
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationCoordinates = `${location.lat},${location.lng}`;
      retriveRestaurants(locationCoordinates);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
