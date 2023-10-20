import * as S from "./styles";
import BannerJpg from "../../../../assets/banner.jpg";

export default function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerContentWrapper>
        <S.BannerTitle>Boost retention with life insurance</S.BannerTitle>
        <S.BannerParagraph>
          Adding a group life insurance to your existing auto enrolment pension
          helps you attract and retain talent
        </S.BannerParagraph>
      </S.BannerContentWrapper>
      <S.ImageBanner src={BannerJpg} alt="banner" />
    </S.BannerContainer>
  );
}
