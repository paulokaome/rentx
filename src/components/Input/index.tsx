import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { Container, InputText, IconContainer } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocus(true);
  }
  function handleInputFilled() {
    setIsFocus(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocus={isFocus}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocus || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocus={isFocus}
        onFocus={handleInputFocus}
        onBlur={handleInputFilled}
        {...rest}
      />
    </Container>
  );
}
