"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Heading } from "@radix-ui/themes";
import localFont from "next/font/local";
import { useRef } from "react";

const hendrix = localFont({
  src: "../../public/fonts/br-hendrix/BRHendrix-Medium.otf",
  variable: "--font-hendrix",
});

interface Props {
  text?: string;
  highlight?: string;
  inline?: boolean;
  textCenter?: boolean;
}

const SectionHeading = ({
  text,
  highlight,
  inline = false,
  textCenter = false,
}: Props) => {
  const sectionHeadingRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(sectionHeadingRef);

  return (
    <Box
      className={`mb-12 mt-4 ${textCenter && "text-center"} `}
      ref={sectionHeadingRef}
    >
      <Heading
        size={{
          initial: "8",
          md: "9",
        }}
        weight="medium"
        className={`${inline ? "inline" : "md:mb-2"}`}
      >
        {text}{" "}
      </Heading>
      <Heading
        size={{
          initial: "8",
          md: "9",
        }}
        weight="medium"
        className={`text-radix-accent ${inline && "inline"}`}
        style={{ fontFamily: "var(--font-hendrix)" }}
      >
        {highlight}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
