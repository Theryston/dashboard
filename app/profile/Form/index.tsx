import ChoseTitle from "./ChoseTitle";
import TextField from "./TextField";
import * as S from "./styles";

export default function Form() {
  return (
    <S.Container>
      <S.InputsWrapper>
        <S.MultiInputsWrapper>
          <TextField label="First name" initialValue="John" />
          <TextField label="Last name" initialValue="Smith" />
        </S.MultiInputsWrapper>
        <ChoseTitle />
      </S.InputsWrapper>
      <S.InputsWrapper></S.InputsWrapper>
    </S.Container>
  );
}
