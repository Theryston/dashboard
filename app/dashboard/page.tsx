"use client";

import SideBar from "./components/SideBar";
import * as S from "./styles";

export default function DashboardPage() {
  return (
    <S.DashboardContainer>
      <SideBar />
      Dash
    </S.DashboardContainer>
  );
}
