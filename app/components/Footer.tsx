import { Container, Flex, Text } from "@radix-ui/themes";
import React from "react";
import SectionHeading from "./SectionHeading";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container className="min-w-[23rem]">
      <Flex
        justify="center"
        align="center"
        direction={{
          initial: "column",
          md: "row",
        }}
        gap="5"
        className="w-full border-t-[1px] border-radix-accent p-12 min-h-80"
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
          <Flex align="center" justify="center" gap="4" mt="6">
            <Link href="https://www.linkedin.com/in/ayroid/">
              <FaLinkedinIn className="size-6 md:size-8" />
            </Link>
            <Link href="https://github.com/ayroid">
              <FaGithub className="size-6 md:size-8" />
            </Link>
            <Link href="https://x.com/ayroids">
              <FaXTwitter className="size-6 md:size-8" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
