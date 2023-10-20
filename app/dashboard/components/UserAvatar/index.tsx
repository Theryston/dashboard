"use client";

import WomanPng from "../../../../assets/mock-woman.png";
import * as S from "./styles";
import { useState } from "react";

export default function UserAvatar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <S.UserAvatarContainer>
      <S.NotificationFlag show={isNotificationOpen}>
        You have 3 notifications
      </S.NotificationFlag>
      <S.UserImage
        onMouseEnter={() => setIsNotificationOpen(true)}
        onMouseLeave={() => setIsNotificationOpen(false)}
        src={WomanPng}
        alt="Alisha Smith"
      />
      <S.Circle />
    </S.UserAvatarContainer>
  );
}
