import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";

const inter = Noto_Sans({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Ayroid",
  description: "Personal Portfolio of Ayroid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="jade" radius="small" appearance="dark">
          <main>
            <Navbar />
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
