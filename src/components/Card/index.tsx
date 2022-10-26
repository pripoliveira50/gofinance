import React from 'react';

import * as S from './styles';
import { CardProps, icon } from './types';

export const Card: React.FC<CardProps> = ({
  type,
  amount,
  lastTransaction,
  title,
}) => {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Content>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Content>
    </S.Container>
  );
};
