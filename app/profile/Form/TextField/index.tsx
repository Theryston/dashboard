"use client";

import { useState } from "react";
import * as S from "./styles";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {
  label: string;
  smallerLabel?: string;
  initialValue?: string;
};

export default function TextField({
  label,
  initialValue,
  smallerLabel,
}: Props) {
  const [value, setValue] = useState(initialValue || "");

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={plusJakartaSans.className}
      />
    </S.InputWrapper>
  );
}
