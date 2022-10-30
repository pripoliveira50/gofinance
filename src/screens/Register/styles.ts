import styled from 'styled-components/native';

import metrics from '@global/metrics';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding: ${metrics.triplePixel}px;
  justify-content: space-between;
`;

export const Fields = styled.View``;
