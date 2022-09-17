import React, { useContext, useState } from "react";
import {
  AccountBackGround,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  BackButton,
} from "../component/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authetication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, loginRequest } = useContext(AuthenticationContext);
  return (
    <AccountBackGround>
      <AccountCover />
      <Spacer size="medium">
        <Text variant="label"> Meals To Go</Text>
      </Spacer>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="small">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <Spacer size="medium">
            <Text variant="error"> {error.toString()}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => {
                loginRequest(email, password);
              }}
            >
              LogIn
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="large">
          <BackButton
            mode="contained"
            onPress={() => {
              navigation.navigate("AccountScreen");
            }}
          >
            Back
          </BackButton>
        </Spacer>
      </AccountContainer>
    </AccountBackGround>
  );
};
