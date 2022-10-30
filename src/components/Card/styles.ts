import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { metrics } from '@global/index';

import { TypeProps } from './types';

export const Container = styled.View<TypeProps>`
  width: ${RFValue(280)}px;
  border-radius: ${metrics.pixel - 3}px;

  padding: ${(metrics.doublePixel + 3, metrics.triplePixel)}px;
  padding-bottom: ${RFValue(50)}px;
  margin-right: ${metrics.doublePixel}px;

  background-color: ${({ theme, type }) =>
    type === `total` ? theme.colors.secondary : theme.colors.shape};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === `total` ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(28)}px;

  ${({ type }) =>
    type === `up` &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ type }) =>
    type === `down` &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === `total` &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) =>
    type === `total` ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) =>
    type === `total` ? theme.colors.shape : theme.colors.text};
`;
