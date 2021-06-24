import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";

import { Container, Header, Title, Subtitle, Footer, Form } from "./styles";

export function SignIn() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation();

  function handleSignUp() {
    navigate.navigate("SignUpFirstStep");
  }

  async function handleSignIn() {
    try {
      const Schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um Email válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await Schema.validate({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login,Verifique as credenciais"
        );
      }
    }
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <Header>
            <Title>
              Estamos{"\n"}
              quase lá.
            </Title>
            <Subtitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível.
            </Subtitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="login"
              enabled={true}
              loading={false}
              onPress={handleSignIn}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.bg_secondary}
              light
              onPress={handleSignUp}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
