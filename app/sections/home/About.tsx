"use client";

import ProfilePic from "@/public/images/profile/profile-crop.jpg";
import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Code, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRef } from "react";
import { Badge, LinkButton, SectionHeading } from "../../components";

const AboutSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(imageRef);
  useGsapAnimation(textRef);
  useGsapAnimation(buttonRef);

  return (
    <Container className="mx-8 md:mx-4">
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
          <Badge color="#ffcd95" text="Open to Work" />
          <SectionHeading text="About" highlight="me" inline />
          <Text className="text-lg text-gray-accent" ref={textRef}>
            Hey there! I&apos;m <Code>Ayush Singh Kushwah</Code>, a Final Year{" "}
            <Code>BTech Computer Science</Code> student specializing in{" "}
            <Code>DevOps</Code> at the{" "}
            <Code>University of Petroleum and Energy Studies</Code>.
            <br />
            <br />
            Passionate about <Code>Full Stack Development</Code> and{" "}
            <Code>DevOps</Code>, I thrive on building innovative solutions. With
            a commitment to sharing knowledge, I actively contribute to the
            open-source ecosystem.
            <br />
            <br />
            Ready to hit the ground running? Let&apos;s <Code>
              collaborate
            </Code>{" "}
            and turn <Code>ideas into reality</Code> in the ever-evolving world
            of technology!
          </Text>
          <Flex
            mt="8"
            justify={{
              initial: "center",
              md: "start",
            }}
            ref={buttonRef}
          >
            <LinkButton link="/about" text="Discover More" />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutSection;
