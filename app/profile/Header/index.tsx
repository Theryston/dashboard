"use client";

import * as S from "./styles";
import SimpleArrowLeftSvg from "../../../assets/icons/simple-arrow-left.svg";
import LogoFSvg from "../../../assets/icons/logo-f.svg";
import BoySvg from "../../../assets/icons/boy.svg";
import ArrowDownCultureSvg from "../../../assets/icons/arrow-down-culture.svg";

export default function Header() {
  return (
    <S.Container>
      <S.WrapperNavigation>
        <S.BackIcon alt="Go Back" src={SimpleArrowLeftSvg} />
        <S.Logo alt="logo" src={LogoFSvg} />
      </S.WrapperNavigation>
      <S.UserInfoWrapper>
        <S.ManIcon src={BoySvg} alt="Icon Man" />
        <p>Hello Adobe</p>
        <S.ArrowDownIcon src={ArrowDownCultureSvg} alt="Down" />
      </S.UserInfoWrapper>
    </S.Container>
  );
}
