import Chart from "../Chart";
import * as S from "./styles";

export default function RetirementAgeChart() {
  return (
    <Chart
      footer="Change retirement age"
      customPadding={{
        large: "13px 40px 0px 40px",
        small: "9px 28px 0px 28px",
      }}
    >
      <S.Container>
        <S.Title>Expected retirement age</S.Title>
        <S.ValueNumWrapper>
          <p className="value-num">70</p>
          <p className="period">/ year</p>
        </S.ValueNumWrapper>
      </S.Container>
    </Chart>
  );
}
