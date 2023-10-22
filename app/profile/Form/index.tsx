import Button from "./Button";
import CalendarField from "./CalendarField";
import ChoseTitle from "./ChoseTitle";
import SelectField from "./SelectField";
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
        <S.MultiInputsWrapper>
          <SelectField
            label="Gender"
            options={[
              {
                id: "male",
                text: "Male",
              },
              {
                id: "female",
                text: "Female",
              },
              {
                id: "others",
                text: "Others",
              },
            ]}
          />
          <CalendarField label="Birthday" initialValue="1991-11-18" />
        </S.MultiInputsWrapper>
        <TextField label="National Insurance number" initialValue="EZ550878A" />
        <TextField label="Email" initialValue="hello@collegia.co.uk" />
        <S.ActionsWrapper>
          <Button variant="black">Save</Button>
          <Button variant="outline">Descart</Button>
        </S.ActionsWrapper>
      </S.InputsWrapper>
      <S.InputsWrapper>
        <S.MultiInputsWrapper>
          <SelectField
            label="NI Category"
            options={[
              {
                id: "a",
                text: "A",
              },
              {
                id: "b",
                text: "B",
              },
            ]}
          />
          <TextField label="Tax Code" initialValue="1275L" />
        </S.MultiInputsWrapper>
        <TextField label="Address Line 1" initialValue="Buxton Court" />
        <TextField
          label="Address Line 2"
          smallerLabel="( Optional )"
          initialValue="3 West Way"
        />
      </S.InputsWrapper>
    </S.Container>
  );
}
