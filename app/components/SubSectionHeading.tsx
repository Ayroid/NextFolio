"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Heading } from "@radix-ui/themes";
import { useRef } from "react";

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

  useGsapAnimation({ ref: sectionHeadingRef });

  return (
    <Box
      className={`mb-12 mt-4 ${textCenter && "text-center"} `}
      ref={sectionHeadingRef}
    >
      <Heading
        size={{
          initial: "7",
          md: "8",
        }}
        weight="medium"
        className={`${inline ? "inline" : "md:mb-2"}`}
      >
        {text}{" "}
      </Heading>
      <Heading
        size={{
          initial: "7",
          md: "8",
        }}
        weight="medium"
        className={`text-radix-accent ${inline && "inline"}`}
      >
        {highlight}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
