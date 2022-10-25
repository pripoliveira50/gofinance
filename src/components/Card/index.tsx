import React from 'react';

import * as S from './styles';

export const Card: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Card Title</S.Title>
        <S.Icon name="arrow-up-circle" />
      </S.Header>

      <S.Content>
        <S.Amount>R$ 17.400,00</S.Amount>
        <S.LastTransaction>Última entrada dia 13 de abril</S.LastTransaction>
      </S.Content>
    </S.Container>
  );
};
