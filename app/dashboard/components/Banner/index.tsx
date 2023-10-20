"use client";

import { useState } from "react";
import * as S from "./styles";
import BannerJpg from "../../../../assets/banner.jpg";
import XSvg from "../../../../assets/icons/x.svg";

export default function Banner() {
  const [showCloseBanner, setShowCloseBanner] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <S.BannerContainer
          onMouseEnter={() => setShowCloseBanner(true)}
          onMouseLeave={() => setShowCloseBanner(false)}
        >
          <S.CloseBannerIcon
            src={XSvg}
            alt="Close Banner"
            show={showCloseBanner}
            onClick={() => setShowBanner(false)}
          />
          <S.BannerContentWrapper>
            <S.BannerTitle>Boost retention with life insurance</S.BannerTitle>
            <S.BannerParagraph>
              Adding a group life insurance to your existing auto enrolment
              pension helps you attract and retain talent
            </S.BannerParagraph>
          </S.BannerContentWrapper>
          <S.ImageBanner src={BannerJpg} alt="banner" />
        </S.BannerContainer>
      )}
    </>
  );
}
