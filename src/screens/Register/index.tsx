import React from 'react';

import { Header } from '@components/Header';

import * as S from './styles';

export const Register: React.FC = () => {
  return (
    <S.Container>
      <Header title="Cadastro" />
      <S.Title>Register</S.Title>
    </S.Container>
  );
};
