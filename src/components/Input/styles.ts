import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

interface ContainerProps {
  isFocus: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;
export const IconContainer = styled.View<ContainerProps>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.bg_secondary};

  ${({ isFocus, theme }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  flex: 1;

  padding: 0px 23px;

  ${({ isFocus, theme }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;
