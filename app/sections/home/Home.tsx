"use client";

import { Avatar, LinkButton } from "@/app/components/";
import useGsapAnimation from "@/utils/useGsapAnimation";
import { Code, Flex, Strong, Text, Box } from "@radix-ui/themes";
import { useRef } from "react";

const HomeSection = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ ref: avatarRef });
  useGsapAnimation({ ref: headingRef, delay: 0.05 });
  useGsapAnimation({ ref: textRef, delay: 0.1 });
  useGsapAnimation({ ref: buttonRef, delay: 0.15 });

  return (
    <Flex
      justify="start"
      align="center"
      direction="column"
      gap="5"
      className="h-home-page-initial py-24 md:h-home-page-md"
    >
      <Flex direction="column" align="center" gap="3" ref={avatarRef}>
        <Avatar />
        <Text weight="bold" size="5">
          Hi! I&apos;m<Strong className="text-radix-accent"> Ayush</Strong>
        </Text>
      </Flex>
      <Flex
        direction="column"
        width="100%"
        justify="center"
        align="center"
        gap="1"
        ref={headingRef}
      >
        <Text size={{ initial: "8", md: "9" }} align="center" className="w-3/4">
          <Strong>Unleashing Solutions</Strong>{" "}
          <span className="text-radix-accent">with</span>
          <br />
          <span className="text-radix-accent"> the</span>
          <Strong> Precision of Code Crafting</Strong>
        </Text>
      </Flex>
      <Text
        size={{
          initial: "2",
          md: "3",
        }}
        className="w-2/3 text-center text-gray-accent"
        ref={textRef}
      >
        I&apos;m a budding{" "}
        <Code weight="bold" size="3">
          Full Stack Developer
        </Code>{" "}
        based in{" "}
        <Code weight="bold" size="3">
          Dehradun, India
        </Code>{" "}
        🇮🇳 <br />
        Passionate about{" "}
        <Code weight="bold" size="3">
          Web Development
        </Code>{" "}
        and{" "}
        <Code weight="bold" size="3">
          DevOps
        </Code>
        . Eager to create solutions for the{" "}
        <Code weight="bold" size="3">
          Tomorrow!
        </Code>
      </Text>

      <Box mt="4" ref={buttonRef}>
        <LinkButton link="/contact" text="Get in Touch" />
      </Box>
    </Flex>
  );
};

export default HomeSection;
