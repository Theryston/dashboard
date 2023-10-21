"use client";

import { useState } from "react";
import Chart from "../Chart";
import * as S from "./styles";
import EyesOpenSvg from "../../../../assets/icons/eyes-open.svg";
import EyesClosedSvg from "../../../../assets/icons/eyes-closed.svg";

export default function BalanceChart() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Chart title="Your Collegia account" footer="Your Collegia Account">
      <S.BalanceWrapper>
        <div>
          <S.CurrentPriceText>
            {showBalance ? "£ 118,487.08" : "******"}
          </S.CurrentPriceText>
          <span className="details">25 years to retirement</span>
        </div>
        <S.EyesIcon
          src={showBalance ? EyesOpenSvg : EyesClosedSvg}
          alt="hidden balance"
          onClick={() => setShowBalance((prev) => !prev)}
        />
      </S.BalanceWrapper>
      <S.ProgressWrapper>
        <S.ProcessInfos>
          <p className="details-progress">Expected income</p>
          <div className="value-num-wrapper">
            <p className="value-num">
              {showBalance ? "£ 41,210.53" : "******"}
            </p>
            <p className="period">/ year</p>
          </div>
        </S.ProcessInfos>
        <S.ProgressBar>
          <S.ProgressBarFill />
        </S.ProgressBar>
      </S.ProgressWrapper>
    </Chart>
  );
}
