import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackGround = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]}
  margin-top: ${(props) => props.theme.space[2]}
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const BackButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 100px;
  align-self: center;
`;

export const AuthInput = styled(TextInput).attrs({
  //outlineColor: colors.brand.primary,
})`
  width: 300px;
  align-self: center;
`;
