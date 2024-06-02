import { COMPANY, DEVELOPER } from "./utils/constants";
import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: `${COMPANY} Task`,
  description: `A NextJS app built by ${DEVELOPER} for interview process in ${COMPANY}`,
};

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
