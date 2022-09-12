import React from "react";
import { locations } from "./location.mock";
import camelize from "camelize";

export const LocationRequest = (searchKey) => {
  return new Promise((resolve, reject) => {
    const areaDetails = locations[searchKey];
    if (!areaDetails) {
      reject("not found");
    }
    resolve(areaDetails);
  });
};

export const LocationTransform = (locationResult) => {
  const formatedResults = camelize(locationResult);
  const { geometry = {} } = formatedResults.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
