"use client";

import React from "react";
import Link from "next/link";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/profile">Go to Profile Edit</Link>
    </S.Container>
  );
}
