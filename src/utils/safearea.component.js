import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === "ios" ? 0 : StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
