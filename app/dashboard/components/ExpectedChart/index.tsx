import Chart from "../Chart";
import * as S from "./styles";
import TreeSvg from "../../../../assets/icons/tree.svg";

export default function ExpectedChart() {
  return (
    <Chart
      title="Expected Retirement Lifestyle"
      footer="Your retirement lifestyle"
    >
      <S.ExpectedContainer>
        <S.TreeIcon src={TreeSvg} alt="tree" />
        <S.ValueNumWrapper>
          <p className="value-num">£ 57,176.66</p>
          <p className="period">/ year</p>
        </S.ValueNumWrapper>
        <S.Title>Comfortable lifestyle</S.Title>
        <S.Description>
          A lifestyle that allows you to be more spontaneous with your money.
        </S.Description>
      </S.ExpectedContainer>
    </Chart>
  );
}
