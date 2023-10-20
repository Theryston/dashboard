import Chart from "../Chart";
import * as S from "./styles";

export default function RetirementAgeChart() {
  return (
    <Chart footer="Change retirement age">
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
