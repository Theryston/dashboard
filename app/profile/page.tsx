"use client";

import FloatBar from "./FloatBar";
import Header from "./Header";
import * as S from "./styles";

export default function ProfilePage() {
  return (
    <S.Container>
      <FloatBar />
      <Header />
      <S.Content>
        <S.UserInfoWrapper>
          <S.UserStatus>Active</S.UserStatus>
          <S.UserName>John Smith</S.UserName>
        </S.UserInfoWrapper>
      </S.Content>
    </S.Container>
  );
}
