import WomanPng from "../../../../assets/mock-woman.png";
import * as S from "./styles";

export default function UserAvatar() {
  return (
    <S.UserAvatarContainer>
      <S.UserImage src={WomanPng} alt="Alisha Smith" />
      <S.Circle />
    </S.UserAvatarContainer>
  );
}
