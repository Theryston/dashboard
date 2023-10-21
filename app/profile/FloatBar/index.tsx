"use client";

import * as S from "./styled";
import { useState } from "react";
import NikeLogoMockPng from "../../../assets/nike-logo-mock.png";
import GreyHomeSvg from "../../../assets/icons/grey-home.svg";
import WalletSvg from "../../../assets/icons/wallet.svg";
import GreyBuildingSvg from "../../../assets/icons/grey-building.svg";
import GreyArrowDownCultureSvg from "../../../assets/icons/grey-arrow-down-culture.svg";
import CopySvg from "../../../assets/icons/copy.svg";
import SheetsSvg from "../../../assets/icons/sheets.svg";
import GreyGuysSvg from "../../../assets/icons/grey-guys.svg";
import GreyDocumentSvg from "../../../assets/icons/grey-document.svg";
import MotionFadeIn from "./MotionFadeIn";

export default function FloatBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <S.BusinessSection>
        <S.BusinessInfoWrapper>
          <S.BusinessLogo src={NikeLogoMockPng} alt="Logo Business" />
          {isOpen && <S.BusinessName>Nike</S.BusinessName>}
        </S.BusinessInfoWrapper>
        <S.LineWrapper>
          <S.Line />
        </S.LineWrapper>
      </S.BusinessSection>
      <S.NavigationWrapper>
        <S.NavigationItem>
          <S.NavigationIcon src={GreyHomeSvg} alt="Home" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>Home</S.NavigationText>
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={WalletSvg} alt="Payroll" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>Payroll</S.NavigationText>
                <S.NavigationExpandIcon
                  src={GreyArrowDownCultureSvg}
                  alt="Expand"
                />
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={GreyBuildingSvg} alt="Company" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>Company</S.NavigationText>
                <S.NavigationExpandIcon
                  src={GreyArrowDownCultureSvg}
                  alt="Expand"
                />
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={CopySvg} alt="HMRC" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>HMRC</S.NavigationText>
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={SheetsSvg} alt="Automatic Enrolment" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>Automatic&nbsp;Enrolment</S.NavigationText>
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={GreyGuysSvg} alt="People" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>People</S.NavigationText>
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationIcon src={GreyDocumentSvg} alt="Reports" />
          {isOpen && (
            <MotionFadeIn>
              <S.NavigationItemDetails>
                <S.NavigationText>Reports</S.NavigationText>
              </S.NavigationItemDetails>
            </MotionFadeIn>
          )}
        </S.NavigationItem>
      </S.NavigationWrapper>
    </S.Container>
  );
}
