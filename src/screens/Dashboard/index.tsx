import React, { useCallback } from 'react';

import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Transactions } from '@components/Transactions';

import { DATA_CARD, DATA_TRANSACTION } from '@screens/mock';

import * as S from './styles';
import { CardListRenderType, TransactionListRenderType } from './types';

export const Dashboard: React.FC = () => {
  const renderCard = useCallback<CardListRenderType>(({ item }) => {
    return (
      <Card
        type={item.type}
        title={item.title}
        amount={item.amount}
        lastTransaction={item.lastTransaction}
      />
    );
  }, []);

  const renderTransactions = useCallback<TransactionListRenderType>(
    ({ item }) => {
      return <Transactions data={item} />;
    },
    [],
  );

  return (
    <S.Container>
      <Header />
      <S.Cards data={DATA_CARD} renderItem={renderCard} />
      <S.TransactionContainer>
        <S.Title>Transações</S.Title>
        <S.TransactionList
          data={DATA_TRANSACTION}
          renderItem={renderTransactions}
        />
      </S.TransactionContainer>
    </S.Container>
  );
};
