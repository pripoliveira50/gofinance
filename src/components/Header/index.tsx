import React from 'react';

import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.UserWrapper>
        <S.UserInfo>
          <S.Photo
            source={{
              uri: `https://avatars.githubusercontent.com/u/42249540?v=4`,
            }}
          />
          <S.User>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Priscila</S.UserName>
          </S.User>
        </S.UserInfo>
        <S.Icon name="power" />
      </S.UserWrapper>
    </S.Container>
  );
};
