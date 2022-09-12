import React, { useState, useEffect } from "react";
import { LocationRequest, LocationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (keyWord) => {
    setIsLoading(true);
    setSearchKey(keyWord);
  };

  useEffect(() => {
    if (!searchKey.length) {
      return;
    }
    LocationRequest(searchKey.toLowerCase())
      .then(LocationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [searchKey]);

  return (
    <LocationContext.Provider
      value={{ location, error, isLoading, search: onSearch, searchKey }}
    >
      {children}
    </LocationContext.Provider>
  );
};
