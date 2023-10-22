"use client";

import { useState } from "react";
import * as S from "./styles";
import RadioButton from "../RadioButton";

export default function ChoseTitle() {
  const [selectedTitle, setSelectedTitle] = useState("mr");

  return (
    <S.Container>
      <S.Label>Title</S.Label>
      <S.RadioButtonWrapper>
        <RadioButton
          label="Mr"
          isSelected={selectedTitle === "mr"}
          onSelect={() => {
            setSelectedTitle("mr");
          }}
        />
        <RadioButton
          label="Ms"
          isSelected={selectedTitle === "ms"}
          onSelect={() => {
            setSelectedTitle("ms");
          }}
        />
        <RadioButton
          label="Mss"
          isSelected={selectedTitle === "mss"}
          onSelect={() => {
            setSelectedTitle("mss");
          }}
        />
      </S.RadioButtonWrapper>
    </S.Container>
  );
}
