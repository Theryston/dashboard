import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyle } from "./global-styles";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
