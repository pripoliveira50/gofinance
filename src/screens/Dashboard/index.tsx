import React from 'react';

import { Card } from '@components/Card';
import { Header } from '@components/Header';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Cards horizontal>
        <Card />
      </S.Cards>
    </S.Container>
  );
};
