import { Flex, Avatar, Strong, Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      height="75dvh"
      direction="column"
      gap="5"
    >
      <Flex direction="column" align="center" gap="2">
        <Avatar
          src="https://yt3.googleusercontent.com/mf2_inyBy96kwvvbpJMzaptCDt1DNzZjYpWoT6Wiry8b9v_s5VFVfBrxyrrvB7GcOgG3T_se1Q=s900-c-k-c0x00ffffff-no-rj"
          fallback="A"
          radius="full"
          size="7"
        />
        <Text weight="bold">
          Hi! <Strong className="text-radix-accent">I&apos;m Ayush</Strong>
        </Text>
      </Flex>
      <Flex
        direction="column"
        width="100%"
        justify="center"
        align="center"
        gap="1"
      >
        <Text size={{ initial: "6", md: "9" }} align="center" className="w-3/4">
          <Strong>Unleashing Solutions</Strong>{" "}
          <span className="text-radix-accent">with</span>
        </Text>
        <Text size={{ initial: "6", md: "9" }} align="center" className="w-3/4">
          <span className="text-radix-accent"> the</span>
          <Strong> Precision of Code Crafting</Strong>
        </Text>
      </Flex>
      <Text
        size={{
          initial: "2",
          md: "3",
        }}
        className="w-2/3 text-center text-gray-400"
      >
        I&apos;m a budding <Strong>Full Stack Developer</Strong> based in{" "}
        <Strong>Dehradun, India 🇮🇳</Strong> <br />
        Passionate about <Strong>Web Development</Strong> and{" "}
        <Strong>DevOps</Strong>. Eager to create solutions for the{" "}
        <Strong>tomorrow!</Strong>
      </Text>

      <Button radius="full" size="4" mt="9">
        <Link href="/contact">Get in Touch</Link>
      </Button>
    </Flex>
  );
};

export default Homepage;
