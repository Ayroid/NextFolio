"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Container, Flex, Separator, Tooltip } from "@radix-ui/themes";
import Link from "next/link";
import { useRef } from "react";
import { TbListSearch } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { Badge, LinkButton, SectionHeading } from "../../components";

const ExperienceSection = () => {
  const opportunityIconRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ ref: opportunityIconRef });

  return (
    <Container className="relative mx-8 md:mx-4">
      <Flex justify="center" align="start" direction="column">
        <Badge color="#ffcd95" text="Carrer" />
        <SectionHeading text="Work" highlight="Experience" inline />
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="h-[30rem] w-full"
        >
          <Box ref={opportunityIconRef}>
            <TbListSearch className="size-32 md:size-40" />
          </Box>
          <SectionHeading
            text="Looking for"
            highlight="Opportunities"
            textCenter
          />
          <Flex justify="center" align="center" gap="5">
            <LinkButton link="/contact" text="Hire Me" />
            <Separator
              orientation="vertical"
              size="4"
              className="rounded-lg border-[1px] border-zinc-800"
            />
            <Link
              href="https://drive.google.com/file/d/1NHGjGAnMKICQkJ9BqcvJtb2-eu6pY-Gj/view?usp=sharing"
              target="_blank"
            >
              <Tooltip content="Resume">
                <TiDocumentText className="size-8 animate-moveUp md:size-10" />
              </Tooltip>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Box className="absolute -left-52 -top-24 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      <Box className="absolute -bottom-80 -right-40 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default ExperienceSection;
