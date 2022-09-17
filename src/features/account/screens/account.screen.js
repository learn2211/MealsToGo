import React from "react";
import {
  AccountBackGround,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../component/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackGround>
      <AccountCover />
      <Spacer size="medium">
        <Text variant="label"> Meals To Go</Text>
      </Spacer>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("LogInScreen")}
        >
          LogIn
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("RegistrationScreen")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackGround>
  );
};
