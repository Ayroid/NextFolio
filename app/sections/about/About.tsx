"use client";

import ProfilePic from "@/public/images/profile/profile-crop.jpg";
import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Code, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "../../components";

const AboutSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useGsapAnimation({ ref: imageRef });

  return (
    <Container className="relative mx-8 md:mx-4">
      <Flex
        justify="center"
        align="start"
        gap="9"
        className="flex-wrap-reverse lg:flex-nowrap"
      >
        <Image
          src={ProfilePic}
          alt="profile"
          className="rounded-3xl"
          ref={imageRef}
        />
        <Box>
          <SectionHeading
            text="I'm Ayush Singh Kushwah,"
            highlight="a Full Stack Developer and Aspiring DevOps"
          />
          <Text className="text-lg text-gray-accent">
            I&apos;m a Final Year <Code>BTech Computer Science</Code> student
            specializing in <Code>DevOps</Code> at the{" "}
            <Code>University of Petroleum and Energy Studies</Code>.
            <br />
            <br />
            Passionate about <Code>Full Stack Development</Code> and{" "}
            <Code>DevOps</Code>, I thrive on building innovative solutions. With
            a commitment to sharing knowledge, I actively contribute to the
            open-source ecosystem.
          </Text>
        </Box>
      </Flex>
      <Box className="absolute -right-52 -top-80 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default AboutSection;
