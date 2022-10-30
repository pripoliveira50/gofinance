import React, { useMemo } from 'react';

import * as S from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  type = `default`,
  photo,
  title,
  userName,
}) => {
  const renderContent = useMemo(() => {
    if (type === `dashboard`) {
      return (
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: photo,
              }}
            />
            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>{userName}</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      );
    }
    return (
      <S.WrapperHeader>
        <S.Title>{title}</S.Title>
      </S.WrapperHeader>
    );
  }, [photo, title, type, userName]);

  return <S.Container type={type}>{renderContent}</S.Container>;
};
