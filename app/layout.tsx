import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Theme accentColor="iris" radius="small" appearance="dark">
          <main className="p-5">
            <Navbar />
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
