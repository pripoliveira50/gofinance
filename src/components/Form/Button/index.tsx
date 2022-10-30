import React from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
