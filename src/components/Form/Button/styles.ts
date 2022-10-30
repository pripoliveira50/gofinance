import styled from 'styled-components/native';

import metrics from '@global/metrics';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: ${metrics.doublePixel + 2}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${metrics.pixel - 3}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
