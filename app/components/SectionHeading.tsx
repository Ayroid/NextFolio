import React from "react";
import { Heading, Box } from "@radix-ui/themes";

interface Props {
  text: string;
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
  return (
    <Box className={`mt-4 mb-12 ${textCenter && "text-center"}`}>
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
      >
        {highlight}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
