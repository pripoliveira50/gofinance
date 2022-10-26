import React, { useCallback } from 'react';

import { Card } from '@components/Card';
import { Header } from '@components/Header';

import { MOCK } from '@screens/mock';

import * as S from './styles';
import { SectionListRenderType } from './types';

export const Dashboard: React.FC = () => {
  const renderItem = useCallback<SectionListRenderType>(({ item }) => {
    return (
      <Card
        type={item.type}
        title={item.title}
        amount={item.amount}
        lastTransaction={item.lastTransaction}
      />
    );
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Cards data={MOCK} renderItem={renderItem} />
    </S.Container>
  );
};
