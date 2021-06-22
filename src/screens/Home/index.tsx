import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { StatusBar, StyleSheet, BackHandler } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import api from "../../services/api";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import { LoadAnimated } from "../../components/LoadAnimated";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const MyCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const OnGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  function handleDetailCard(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function openMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function getCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
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
          {!loading && <TotalCars>Total de {cars.length} Carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoadAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleDetailCard(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={OnGestureEvent}>
        <Animated.View
          style={[
            MyCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated
            onPress={openMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
