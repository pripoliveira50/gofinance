import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return <S.Container {...rest} />;
};
