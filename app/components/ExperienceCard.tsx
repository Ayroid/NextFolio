"use client";

import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { LuBuilding2, LuSchool } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { useRef } from "react";
import useGsapAnimation from "@/utils/useGsapAnimation";

interface Props {
  instituteName?: string;
  course?: string;
  specialization?: string;
  description?: string[];
  duration?: string;
  designation?: string;
  location?: string;
  result?: string;
  experienceLevel?: "College" | "School" | "Industry";
  reverse?: boolean;
  last?: boolean;
}

const ExperienceCard = ({
  instituteName,
  course,
  specialization,
  description,
  duration,
  designation,
  location,
  result,
  experienceLevel,
  reverse = false,
  last = false,
}: Props) => {
  const experienceCardRef = useRef<HTMLDivElement>(null);
  useGsapAnimation({ ref: experienceCardRef });

  const experienceLevelMap = {
    Industry: <LuBuilding2 className="inline size-7" />,
    College: <FaUniversity className="inline size-7" />,
    School: <LuSchool className="inline size-7" />,
  };

  return (
    <Flex
      className={`h-[18rem] flex-col lg:flex-row ${reverse && "lg:flex-row-reverse"} mb-10 justify-start gap-5 align-top lg:mb-0 lg:justify-between lg:gap-0`}
    >
      <Flex
        direction="column"
        className={`z-10 order-2 h-fit lg:order-1 lg:w-[25rem]`}
        ref={experienceCardRef}
      >
        <Heading
          size="6"
          className={`w-full text-left ${reverse ? "lg:text-left" : "lg:text-right"}`}
        >
          {duration}
        </Heading>
        <Text
          size="3"
          className={`w-full text-left font-semibold italic text-gray-accent ${reverse ? "lg:text-left" : "lg:text-right"}`}
        >
          {designation}
        </Text>
      </Flex>
      <Flex
        justify="start"
        align="center"
        direction="column"
        position={{ initial: "absolute", md: "relative" }}
        className="mx-[11.5rem] -mt-5 h-[21rem] lg:order-2 lg:mx-24 lg:mt-0 lg:h-full lg:w-auto"
      >
        <Box className="h-3 w-3 rounded-full bg-radix-accent" />
        {!last && <Separator orientation="vertical" size="4" />}
      </Flex>
      <Flex
        justify="between"
        align="start"
        direction="column"
        className="top-light-shadow highlight-dark hover:highlight-dark-hover z-10 order-3 h-56 w-[23rem] rounded-2xl p-6 transition-colors duration-300 ease-out lg:order-3 lg:min-w-[25rem]"
        ref={experienceCardRef}
      >
        <Flex direction="column">
          <Flex align="start" gap="3">
            <Text>{experienceLevelMap[experienceLevel!]}</Text>
            <Heading size="5" className="inline">
              {instituteName},{" "}
              <Text size="3" className="text-gray-accent">
                {location}
              </Text>
            </Heading>
          </Flex>
          <Text mt="2" size="3" className="text-gray-accent">
            {course}
          </Text>
          <Text size="3" className="italic text-gray-accent">
            {specialization}
          </Text>
          {description && (
            <Text size="3" className="text-gray-accent">
              <ul>
                {description.map((desc, index) => (
                  <li key={index}>• {desc}</li>
                ))}
              </ul>
            </Text>
          )}
        </Flex>
        <Text size="3" className="font-semibold italic text-gray-accent">
          {result}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ExperienceCard;
