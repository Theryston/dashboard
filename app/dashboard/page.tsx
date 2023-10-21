"use client";

import BalanceChart from "./components/BalanceChart";
import Banner from "./components/Banner";
import Chart from "./components/Chart";
import ExpectedChart from "./components/ExpectedChart";
import MoreCharts from "./components/MoreCharts";
import RetirementAgeChart from "./components/RetirementAgeChart";
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
            <p className="hello-message">Hello. Welcome back,</p>
            <p className="user-name">Alisha Smith</p>
          </div>
          <UserAvatar />
        </S.UserSection>
        <Banner />
        <S.ChartContainer>
          <BalanceChart />
          <ExpectedChart />
          <RetirementAgeChart />
          <MoreCharts />
        </S.ChartContainer>
      </S.Content>
    </S.DashboardContainer>
  );
}
