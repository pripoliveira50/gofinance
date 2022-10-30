import React from 'react';

import { Input, Button } from '@components/Form/index';
import { Header } from '@components/Header';

import * as S from './styles';

export const Register: React.FC = () => {
  return (
    <>
      <Header title="Cadastro" />
      <S.Container>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </S.Fields>

        <Button title="Enviar" />
      </S.Container>
    </>
  );
};
