"use client";

import { useState } from "react";
import * as S from "./styles";
import { Plus_Jakarta_Sans } from "next/font/google";
import UkFlagSvg from "../../../../assets/uk-flag.svg";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {
  initialNumber?: string;
};

export default function PhoneField({ initialNumber }: Props) {
  const [value, setValue] = useState(initialNumber || "");

  return (
    <S.InputWrapper>
      <S.Label>Phone</S.Label>
      <S.WrapperPhone>
        <S.CountryWrapper>
          <S.CountryFlag src={UkFlagSvg} alt="UK" />
          <S.CountryCode>+44</S.CountryCode>
        </S.CountryWrapper>
        <S.Input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={plusJakartaSans.className}
        />
      </S.WrapperPhone>
    </S.InputWrapper>
  );
}
