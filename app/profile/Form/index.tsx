import Button from "./Button";
import CalendarField from "./CalendarField";
import ChoseTitle from "./ChoseTitle";
import PhoneField from "./PhoneField";
import SelectField from "./SelectField";
import TextField from "./TextField";
import ArrowTopRightBlackSvg from "../../../assets/icons/arrow-top-right-black.svg";
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
        <S.MultiInputsWrapper>
          <TextField label="City" initialValue="Oxford" />
          <SelectField
            label="Country"
            options={[
              {
                id: "uk",
                text: "United Kingdom",
              },
              {
                id: "br",
                text: "Brazil",
              },
            ]}
          />
        </S.MultiInputsWrapper>
        <S.MultiInputsWrapper>
          <TextField label="Postal Code" initialValue="OX2 0JB" />
          <PhoneField initialNumber="01865 416076" />
        </S.MultiInputsWrapper>
        <S.DirectorLinkWrapper>
          <p>Set as director</p>
          <S.OpenDirectorLinkIcon src={ArrowTopRightBlackSvg} alt="Open Link" />
        </S.DirectorLinkWrapper>
      </S.InputsWrapper>
    </S.Container>
  );
}
