import React from "react";

import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelatationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://pontofinalmacau.files.wordpress.com/2017/06/0-tesla.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lonborghine</Brand>
            <Name>Hurracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 300,00</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380Km/H" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelatationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          aut vitae nesciunt commodi laboriosam itaque animi, dolor repellat
          officiis, ut ex rerum esse illo neque quia saepe. Architecto, aut in.
        </About>
      </Content>
      <Footer>
        <Button title="Alugar"/>
      </Footer>
    </Container>
  );
}
