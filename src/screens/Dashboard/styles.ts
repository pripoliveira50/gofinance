import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const Cards = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
  keyExtractor: (item: object, index: number) => `${item}-${index}`,
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(22)}px;
`;
