import React from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from "./styles";

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?:boolean;
}

export function Button({
  title,
  color,
  onPress,
  loading = false,
  light = false,
  enabled = true
}: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
