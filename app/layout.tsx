"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { GlobalStyle } from "./global-styles";
import dynamic from "next/dynamic";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const NoSSR = dynamic(() => import("./lib/registry"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
        className={plusJakartaSans.className}
      >
        <GlobalStyle />
        <NoSSR>{children}</NoSSR>
      </body>
    </html>
  );
}
