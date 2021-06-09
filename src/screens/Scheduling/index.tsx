import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from "./styles";

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.shape} onPress={() => {}} />
        <Title>
          Escolha uma{"\n"}data de ínicio e{"\n"}fim de aluguel
        </Title>
      </Header>
      <RentalPeriod>
        <DateInfo>
          <DateTitle>De</DateTitle>
          <DateValue />
        </DateInfo>
        <ArrowSvg />
        <DateInfo>
          <DateTitle>Até</DateTitle>
          <DateValue />
        </DateInfo>
      </RentalPeriod>
    </Container>
  );
}
