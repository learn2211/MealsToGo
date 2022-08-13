import React from "react";
import { View } from "react-native";

import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVarient = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeVarientVal = sizeVariant[size];
  const positionVarientVal = positionVarient[position];
  const sizeFromThemeVal = theme.space[sizeVarientVal];
  return `${positionVarientVal}: ${sizeFromThemeVal}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
