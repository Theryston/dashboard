import * as S from "./styles";

type Props = {
  isSelected: boolean;
  label: string;
  onSelect: () => void;
};

export default function RadioButton({ isSelected, label, onSelect }: Props) {
  return (
    <S.Container>
      <S.Input type="radio" checked={isSelected} />
      <S.CustomRadioButton
        isSelected={isSelected}
        onClick={() => {
          onSelect();
        }}
      />
      {label}
    </S.Container>
  );
}
