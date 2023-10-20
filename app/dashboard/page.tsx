"use client";

import BalanceChart from "./components/BalanceChart";
import Banner from "./components/Banner";
import Chart from "./components/Chart";
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
        <S.ChartContainer>
          <BalanceChart />
          <Chart
            title="Expected Retirement Lifestyle"
            footer="Your retirement lifestyle"
          >
            ok
          </Chart>
          <Chart>ok</Chart>
          <Chart>ok</Chart>
        </S.ChartContainer>
      </S.Content>
    </S.DashboardContainer>
  );
}
