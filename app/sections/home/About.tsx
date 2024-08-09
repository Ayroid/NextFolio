"use client";

import ProfilePic from "@/public/images/profile/profilehq.png";
import useGsapAnimation from "@/utils/useGsapAnimation";
import {
  Box,
  Button,
  Code,
  Container,
  Flex,
  Link,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useRef } from "react";
import { Badge, LinkButton, SectionHeading } from "../../components";
import { TiDocumentText } from "react-icons/ti";

const AboutSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ ref: imageRef });
  useGsapAnimation({ ref: textRef });
  useGsapAnimation({ ref: buttonRef });

  return (
    <Container className="mx-8 md:mx-4">
      <Flex
        justify="center"
        align="start"
        gap="9"
        className="relative z-10 flex-wrap-reverse lg:flex-nowrap"
      >
        <Image
          src={ProfilePic}
          alt="profile"
          className="rounded-3xl"
          ref={imageRef}
          height={533}
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
              initial: "start",
              md: "start",
            }}
            ref={buttonRef}
            gap="4"
            wrap="wrap"
          >
            <LinkButton link="/about" text="Discover More" />
            <Link
              href="https://drive.google.com/file/d/1LT-lb-4-TzRcgM4LNV2u4HRY9fpRPxTn/view?usp=sharing"
              target="_blank"
            >
              <Button
                radius="full"
                size="4"
                variant="soft"
                className="font-bold hover:cursor-pointer"
              >
                Download Resume <TiDocumentText />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="absolute -right-40 bottom-[26rem] z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      </Flex>
    </Container>
  );
};

export default AboutSection;
