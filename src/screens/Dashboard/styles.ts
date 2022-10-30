import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import metrics from '@global/metrics';

const windowHeight = Dimensions.get(`window`).height;

export const Container = styled.View`
  height: 100%;

  background: ${({ theme }) => theme.colors.background};
`;

export const Cards = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
  keyExtractor: (item: object, index: number) => `${item}-${index}`,
})`
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const TransactionContainer = styled.View`
  flex: 1;
  height: ${windowHeight};
  justify-content: center;

  margin: 0 ${RFValue(16)}px;
  margin-top: ${RFPercentage(10)}px;

  z-index: -1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: ${metrics.pixel}px 0;
`;

export const TransactionList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyExtractor: (item: object, index: number) => `${item}-${index}`,
  contentContainerStyle: { paddingBottom: 20 },
})`
  margin-top: ${metrics.pixel}px;
  margin-bottom: ${RFValue(20)}px;
`;
