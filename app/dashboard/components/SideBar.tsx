"use client";

import * as S from "./styles";
import Image from "next/image";
import LogoSvg from "../../../assets/logo.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import DashboardSvg from "../../../assets/icons/dashboard.svg";
import HandPlusSvg from "../../../assets/icons/hand-plus.svg";
import WorldSvg from "../../../assets/icons/world.svg";
import GuyChatSvg from "../../../assets/icons/guy-chat.svg";
import GuysSvg from "../../../assets/icons/guys.svg";

export default function SideBar() {
  return (
    <S.SideBarContainer>
      <S.ContentSideBar>
        <Image src={LogoSvg} alt="logo" />
        <S.WrapperNavigation>
          <S.NavigationItem>
            <S.NavigationIcon src={HomeSvg} alt="Your Collegia account" />
            <S.NavigationText>Your Collegia account</S.NavigationText>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationIcon src={DashboardSvg} alt="Pension Pot" />
            <S.NavigationText>Pension Pot</S.NavigationText>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationIcon src={HandPlusSvg} alt="Contributions" />
            <S.NavigationText>Contributions</S.NavigationText>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationIcon src={WorldSvg} alt="Investment Strategy" />
            <S.NavigationText>Investment Strategy</S.NavigationText>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationIcon src={GuyChatSvg} alt="Chat with us" />
            <S.NavigationText>Chat with us</S.NavigationText>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationIcon src={GuysSvg} alt="Data sharing permissions" />
            <S.NavigationText>Data sharing permissions</S.NavigationText>
          </S.NavigationItem>
        </S.WrapperNavigation>
        <S.Line />
      </S.ContentSideBar>

      <S.FooterItems>
        <S.FooterItem>My dashboard</S.FooterItem>
        <S.FooterItem>My account</S.FooterItem>
        <S.FooterItem>Refer your employer</S.FooterItem>
        <S.FooterItem>Legal</S.FooterItem>
        <S.FooterItem>Data sharing permissions</S.FooterItem>
        <S.FooterItem>Log out</S.FooterItem>
      </S.FooterItems>
    </S.SideBarContainer>
  );
}
