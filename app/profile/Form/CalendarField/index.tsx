"use client";

import { useState } from "react";
import * as S from "./styles";
import { Plus_Jakarta_Sans } from "next/font/google";
import ArrowDownCultureSvg from "../../../../assets/icons/arrow-down-culture.svg";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {
  label: string;
  initialValue?: string;
};

export default function CalendarField({ label, initialValue }: Props) {
  const [value, setValue] = useState(initialValue || "");

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.SelectWrapper>
        <S.IconDown src={ArrowDownCultureSvg} alt="Open Select" />
        <S.Input
          type="date"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={plusJakartaSans.className}
        />
      </S.SelectWrapper>
    </S.InputWrapper>
  );
}
