import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import metrics from '@global/metrics';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: `#969CB2`,
})`
  width: 100%;
  padding: ${metrics.doublePixel + 2}px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};

  border-radius: ${metrics.pixel - 3}px;
  border: 1px solid #ccc;
  margin-bottom: ${metrics.pixel}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
