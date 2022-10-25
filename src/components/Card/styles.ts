import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { metrics } from '@global/index';

export const Container = styled.View`
  width: ${RFValue(260)}px;
  border-radius: ${metrics.pixel - 3}px;
  padding: ${(metrics.doublePixel + 3, metrics.triplePixel)}px;
  padding-bottom: ${RFValue(42)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: ${metrics.fiveFoldPixel - 4}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text};
`;
