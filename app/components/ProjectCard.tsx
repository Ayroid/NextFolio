"use client";

import { BadgeCategory, LinkButton } from "@/app/components/";
import useGsapAnimation from "@/utils/useGsapAnimation";
import {
  Box,
  Container,
  Flex,
  Heading,
  Strong,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface Props {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  techStackText: string;
  githublink?: { link: string; content: string }[];
  demolink?: string;
  desclink: string;
  timeperiod: string;
  isVisible: boolean;
}

const ProjectCard = ({
  image,
  category,
  title,
  description,
  techStackText,
  githublink,
  demolink,
  desclink,
  timeperiod,
  isVisible = true,
}: Props) => {
  const projectCardRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ ref: projectCardRef });

  return (
    <Container
      ref={projectCardRef}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <Flex
        gap="8"
        align="start"
        justify="center"
        direction="column"
        className="top-light-shadow highlight-dark hover:highlight-dark-hover flex-wrap rounded-2xl p-4 transition-colors duration-300 ease-out lg:flex-nowrap lg:p-8"
      >
        <Box className="rounded-xl">
          <Image
            src={image}
            alt="Project Image"
            className="w-full rounded-xl"
          />
        </Box>
        <Flex direction="column" justify="between" className="">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="5">
              <BadgeCategory color="#9b00ff" text={category} />
              <Text className="font-semibold">{timeperiod}</Text>
            </Flex>
            <Heading
              weight="medium"
              size={{
                initial: "7",
                md: "8",
              }}
            >
              {title}
            </Heading>
            <Text className="text-lg text-gray-accent">{description}</Text>
            <Box className="text-lg text-gray-accent">
              <Strong className="text-white">Tech Stack:</Strong>{" "}
              {techStackText}
            </Box>
          </Flex>
          <Flex mt="5" align="center">
            <LinkButton link={desclink} text="Read More" />
            <Flex align="center" className="ml-3 gap-3 md:ml-5 md:gap-5">
              {githublink?.map((repository) => (
                <Tooltip key={repository.link} content={repository.content}>
                  <a href={repository.link} target="_blank">
                    {<SiGithub size="30" />}
                  </a>
                </Tooltip>
              ))}
              {demolink && (
                <Tooltip content="Live Demo">
                  <a href={demolink} target="_blank">
                    {<FiExternalLink size="30" />}
                  </a>
                </Tooltip>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProjectCard;
