"use client";

import WomanPng from "../../../../assets/mock-woman.png";
import UserBar from "../UserBar";
import * as S from "./styles";
import { useState, useEffect, useCallback } from "react";

export default function UserAvatar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);

  const handleShowNotification = useCallback(() => {
    setInterval(() => {
      setIsNotificationOpen(true);

      setTimeout(() => {
        setIsNotificationOpen(false);
      }, 10000);
    }, 30000);
  }, []);

  useEffect(() => {
    handleShowNotification();
  }, []);

  return (
    <S.UserAvatarContainer>
      <S.NotificationFlag show={isNotificationOpen}>
        You have 3 notifications
      </S.NotificationFlag>
      <S.UserImage
        onMouseEnter={() => setIsNotificationOpen(true)}
        onMouseLeave={() => setIsNotificationOpen(false)}
        onClick={() => setIsUserBarOpen(true)}
        src={WomanPng}
        alt="Alisha Smith"
      />
      <S.Circle />
      <UserBar isOpen={isUserBarOpen} onClose={() => setIsUserBarOpen(false)} />
    </S.UserAvatarContainer>
  );
}
