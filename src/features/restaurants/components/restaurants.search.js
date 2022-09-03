import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = () => {
  const { searchKey, search } = useContext(LocationContext);
  const [searchText, setSearchText] = useState(searchKey);

  useEffect(() => {
    console.log("searchContext");
    console.log(searchKey);
    search(searchText);
  }, []);

  return (
    <SearchArea>
      <Searchbar
        placeholder="Search the location"
        value={searchText}
        onSubmitEditing={() => {
          search(searchText);
        }}
        onChangeText={(text) => {
          setSearchText(text);
        }}
      />
    </SearchArea>
  );
};
