import * as S from "./styles";
import ArrowLeftSvg from "../../../../assets/icons/arrow-left.svg";

type Props = {
  children: React.ReactNode;
  title?: string;
  footer?: string;
};

export default function Chart({ children, title, footer }: Props) {
  return (
    <S.ChartContainer>
      {title && <p className="chart-title">{title}</p>}

      <S.Card hasFooter={!!footer}>
        {children}
        {footer && (
          <S.FooterWrapper>
            <S.Line />

            <S.FooterItem>
              <p>{footer}</p>

              <S.FooterGoIcon src={ArrowLeftSvg} alt="Go" />
            </S.FooterItem>
          </S.FooterWrapper>
        )}
      </S.Card>
    </S.ChartContainer>
  );
}
