"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import {
  LinkButton,
  SectionHeading,
  SocialMediaLinks,
} from "@/app/components/";
import useGsapAnimation from "@/utils/useGsapAnimation";
import { useRef } from "react";

const Footer = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(buttonRef);

  return (
    <Container className="bg-dark">
      <Flex
        justify="center"
        align="center"
        direction={{
          initial: "column",
          md: "row",
        }}
        gap="5"
        className="min-h-80 w-full border-t-[1px] border-radix-accent p-12"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          className="w-full"
        >
          <SectionHeading
            text="Got an idea in mind?"
            highlight="Let's Connect"
            textCenter
          />
          <Box ref={buttonRef}>
            <LinkButton link="/contact" text="Contact me" />
          </Box>
          <SocialMediaLinks />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
