"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import {
  Box,
  Button,
  Container,
  Flex,
  Separator,
  Tooltip,
} from "@radix-ui/themes";
import Link from "next/link";
import { useRef } from "react";
import { TbListSearch } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import {
  Badge,
  ExperienceCard,
  LinkButton,
  SectionHeading,
} from "@/app/components";

const ExperienceSection = () => {
  const opportunityIconRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ ref: opportunityIconRef });

  return (
    <Container className="relative z-20 mx-8 md:mx-4">
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
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="relative z-20 mt-20 w-full"
        >
          <ExperienceCard
            instituteName="PWC India"
            location="Remote"
            description={[
              "Completed micro-certifications in IT Fundamentals, DBMS, Python programming, and Data Analytics using Python.",
              "Gained hands-on experience in IT concepts, relational databases, and data analysis,  to solve problems and interpret data effectively.",
            ]}
            designation="PWC Analyst Launchpad Trainee"
            experienceLevel="Industry"
            duration="Feb 2024 - Jun 2024"
          />
          <ExperienceCard
            instituteName="Ananta Khushiyaan Foundation"
            location="Dehradun, India"
            description={[
              "Led a team of 13 interns, managing records for children and adults enrolled in the NGO's educational programs.",
              "Taught Python programming to students of class 9 to 12, enhancing digital literacy.",
            ]}
            designation="Technical Education Intern"
            experienceLevel="Industry"
            duration="Jun 2022 - July 2022"
            reverse
            last
          />
        </Flex>
      </Flex>
      <Box className="absolute -left-52 -top-24 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      <Box className="absolute -bottom-80 -right-40 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default ExperienceSection;
