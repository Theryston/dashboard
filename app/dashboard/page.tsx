"use client";

import Banner from "./components/Banner";
import SideBar from "./components/SideBar";
import UserAvatar from "./components/UserAvatar";
import * as S from "./styles";

export default function DashboardPage() {
  return (
    <S.DashboardContainer>
      <SideBar />
      <S.Content>
        <S.UserSection>
          <div>
            <p>Hello. Welcome back,</p>
            <p className="user-name">Alisha Smith</p>
          </div>
          <UserAvatar />
        </S.UserSection>
        <Banner />
      </S.Content>
    </S.DashboardContainer>
  );
}
