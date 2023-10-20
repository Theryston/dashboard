"use client";

import { useState } from "react";
import * as S from "./styles";
import ArrowTopRightBlack from "../../../../assets/icons/arrow-top-right-black.svg";
import ArrowTopRightBlue from "../../../../assets/icons/arrow-top-right-Blue.svg";
import PoundsSvg from "../../../../assets/icons/pounds.svg";
import WorldBlueSvg from "../../../../assets/icons/world-blue.svg";
import BlueFlagSvg from "../../../../assets/icons/blue-flag.svg";
import PlaySvg from "../../../../assets/icons/play.svg";

export default function MoreCharts() {
  return (
    <S.Container>
      <Card>
        <S.CardIcon src={PoundsSvg} />
        <S.CardText>
          Add <br /> contributions
        </S.CardText>
      </Card>
      <Card>
        <S.CardIcon src={WorldBlueSvg} />
        <S.CardText>
          Investment <br /> approach
        </S.CardText>
      </Card>
      <Card>
        <S.CardIcon src={BlueFlagSvg} />
        <S.CardText>
          Projections <br /> state pension
        </S.CardText>
      </Card>
      <Card>
        <S.CardIcon src={PlaySvg} />
        <S.CardText>
          Auto enrolment <br /> contributions
        </S.CardText>
      </Card>
    </S.Container>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  const [isHouver, setIsHouver] = useState(false);

  return (
    <S.Card
      onMouseEnter={() => setIsHouver(true)}
      onMouseLeave={() => setIsHouver(false)}
      isHouver={isHouver}
    >
      {children}
      <S.IconCardGo
        isHouver={isHouver}
        src={isHouver ? ArrowTopRightBlue : ArrowTopRightBlack}
        alt="Go Icon"
      />
    </S.Card>
  );
}
