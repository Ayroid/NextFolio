import React from "react";
import { Heading, Box } from "@radix-ui/themes";

interface Props {
  text: string;
  highlight: string;
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
        size="9"
        weight="medium"
        className={`${inline ? "inline" : "mb-2"}`}
      >
        {text}{" "}
      </Heading>
      <Heading
        size="9"
        weight="medium"
        className={`text-zinc-600 ${inline && "inline"}`}
      >
        {highlight}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
