"use client";

import * as S from "./styles";
import { AnimatePresence } from "framer-motion";
import WomanPng from "../../../../assets/mock-woman.png";
import MarkedBellSvg from "../../../../assets/icons/marked-bell.svg";
import DashboardWhiteSvg from "../../../../assets/icons/dashboard-white.svg";
import UserWhiteSvg from "../../../../assets/icons/user-white.svg";
import BuildingSvg from "../../../../assets/icons/building.svg";
import LegalSvg from "../../../../assets/icons/legal.svg";
import DocumentSvg from "../../../../assets/icons/document.svg";
import ComputerSvg from "../../../../assets/icons/computer.svg";
import ExitSvg from "../../../../assets/icons/exit.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UserBar({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <S.Container
          id="user-bar-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if ((e.target as any).id !== "user-bar-background") {
              return;
            }

            onClose();
          }}
        >
          <S.Content
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.2,
            }}
          >
            <S.UserInfoWrapper>
              <S.UserProfileImage src={WomanPng} alt="User Profile Image" />
              <S.UserName>Alisha Smith</S.UserName>
            </S.UserInfoWrapper>
            <S.ListPageWrapper>
              <S.ListPageItem>
                <S.ListPageIcon src={MarkedBellSvg} alt="Icon" />
                <S.ListPageText>Notifications</S.ListPageText>
                <S.Circle>
                  <span>3</span>
                </S.Circle>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={DashboardWhiteSvg} alt="Icon" />
                <S.ListPageText>My dashboard</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={UserWhiteSvg} alt="Icon" />
                <S.ListPageText>My account</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={BuildingSvg} alt="Icon" />
                <S.ListPageText>Refer your employer</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={LegalSvg} alt="Icon" />
                <S.ListPageText>Legal</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={DocumentSvg} alt="Icon" />
                <S.ListPageText>Your documents</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={ComputerSvg} alt="Icon" />
                <S.ListPageText>Data sharing permissions</S.ListPageText>
              </S.ListPageItem>
              <S.ListPageItem>
                <S.ListPageIcon src={ExitSvg} alt="Icon" />
                <S.ListPageText>Log out</S.ListPageText>
              </S.ListPageItem>
            </S.ListPageWrapper>
          </S.Content>
        </S.Container>
      )}
    </AnimatePresence>
  );
}
