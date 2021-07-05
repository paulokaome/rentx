import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation , useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextPageRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  
  const route = useRoute();
  const { title, message, nextPageRoute } = route.params as Params;

  function handleFinish() {
    navigation.navigate(nextPageRoute);
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleFinish} />
      </Footer>
    </Container>
  );
}
