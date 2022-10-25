import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { metrics } from '@global/index';

export const Container = styled.View`
  height: ${RFPercentage(42)}px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  flex-grow: 1;
  padding: 0 ${metrics.triplePixel - 4}px;
  margin-top: ${metrics.fourFoldPixel - 4}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: ${metrics.pixel}px;
`;

export const User = styled.View`
  margin-left: ${metrics.doublePixel}px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;
