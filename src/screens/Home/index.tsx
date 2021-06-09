import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

export function Home() {
  const carData = [
    {
      id:"1",
      brand: "Audi",
      name: "Audi Boladão",
      rent: {
        period: "Ao Dia",
        price: 350.0,
      },
      thumbnail:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8ysar/2021.png?wid=850",
    },
    {
      id:"2",
      brand: "BMW",
      name: "BMW Boladão",
      rent: {
        period: "Ao Dia",
        price: 450.0,
      },
      thumbnail:
        "https://i.pinimg.com/originals/a0/b8/a4/a0b8a4b9b0326fded4bc5cecfe2fec60.png",
    },
    {
      id:"3",
      brand: "Tesla",
      name: "Tesla Boladão",
      rent: {
        period: "Ao Dia",
        price: 220.0,
      },
      thumbnail:
        "https://pontofinalmacau.files.wordpress.com/2017/06/0-tesla.png",
    },
    {
      id:"4",
      brand: "Ferrari",
      name: "Ferrari Boladona",
      rent: {
        period: "Ao Dia",
        price: 220.0,
      },
      thumbnail: "http://pngimg.com/uploads/ferrari/ferrari_PNG10653.png",
    },
    {
      id:"5",
      brand: "Audi",
      name: "Audi Boladão",
      rent: {
        period: "Ao Dia",
        price: 350.0,
      },
      thumbnail:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8ysar/2021.png?wid=850",
    },
    {
      id:"6",
      brand: "BMW",
      name: "BMW Boladão",
      rent: {
        period: "Ao Dia",
        price: 450.0,
      },
      thumbnail:
        "https://i.pinimg.com/originals/a0/b8/a4/a0b8a4b9b0326fded4bc5cecfe2fec60.png",
    },
    {
      id:"7",
      brand: "Tesla",
      name: "Tesla Boladão",
      rent: {
        period: "Ao Dia",
        price: 220.0,
      },
      thumbnail:
        "https://pontofinalmacau.files.wordpress.com/2017/06/0-tesla.png",
    },
    {
      id:"8",
      brand: "Ferrari",
      name: "Ferrari Boladona",
      rent: {
        period: "Ao Dia",
        price: 220.0,
      },
      thumbnail: "http://pngimg.com/uploads/ferrari/ferrari_PNG10653.png",
    },
  ];
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={carData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Car data={item} />}
      />
    </Container>
  );
}
