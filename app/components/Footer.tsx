"use client";

import {
  LinkButton,
  SectionHeading,
  SocialMediaLinks,
} from "@/app/components/";
import { Container, Flex } from "@radix-ui/themes";



const Footer = () => {
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
        className="relative min-h-80 w-full border-t-[1px] border-radix-accent p-12"
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

          <LinkButton link="/contact" text="Contact me" />

          <SocialMediaLinks />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
