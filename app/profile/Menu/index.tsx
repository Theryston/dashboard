import { useState } from "react";
import * as S from "./styles";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("General");

  const menuItems = [
    "General",
    "Salary",
    "Taxes",
    "Pension",
    "Payslips",
    "Sick leave",
    "Maternity / Paternity",
    "Bank Details",
  ];

  return (
    <S.Container>
      {menuItems.map((item) => (
        <S.MenuItem
          key={item}
          isActive={item === activeTab}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </S.MenuItem>
      ))}
    </S.Container>
  );
}
