"use client";

import { useState } from "react";
import * as S from "./styles";
import { Plus_Jakarta_Sans } from "next/font/google";
import ArrowDownCultureSvg from "../../../../assets/icons/arrow-down-culture.svg";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {
  label: string;
  options: {
    id: string;
    text: string;
  }[];
  initialValue?: string;
};

export default function SelectField({ label, initialValue, options }: Props) {
  const [value, setValue] = useState(initialValue || "");

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.SelectWrapper>
        <S.IconDown src={ArrowDownCultureSvg} alt="Open Select" />
        <S.Select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={plusJakartaSans.className}
        >
          {options.map((option) => (
            <option value={option.id}>{option.text}</option>
          ))}
        </S.Select>
      </S.SelectWrapper>
    </S.InputWrapper>
  );
}
