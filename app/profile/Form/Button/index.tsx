import { Plus_Jakarta_Sans } from "next/font/google";
import * as S from "./styles";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

type Props = {
  variant: "black" | "outline";
  children: React.ReactNode;
};

export default function Button({ variant, children }: Props) {
  return (
    <S.Button className={plusJakartaSans.className} variant={variant}>
      {children}
    </S.Button>
  );
}
