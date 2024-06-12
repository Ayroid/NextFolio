import { BadgeCategory, LinkButton } from "@/app/components/";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Separator,
  Strong,
  Tooltip,
} from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  techStack: string;
  githublink?: string;
  demolink?: string;
  link: string;
  timeperiod: string;
}

const ProjectCard = ({
  image,
  category,
  title,
  description,
  techStack,
  githublink,
  demolink,
  link,
  timeperiod,
}: Props) => {
  return (
    <Container className="contain-content">
      <Flex
        gap="8"
        align="start"
        justify="center"
        className="flex-wrap lg:flex-nowrap"
      >
        <Box className="rounded-xl md:w-6/12">
          <Image
            src={image}
            alt="Project Image"
            className="w-full rounded-xl sm:max-h-[30rem]"
          />
        </Box>
        <Flex direction="column" justify="between" className="md:w-6/12">
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
            <Text className="text-gray-accent text-lg">{description}</Text>
            <Box className="text-gray-accent text-lg">
              <Strong className="text-white">Tech Stack:</Strong> {techStack}
            </Box>
          </Flex>
          <Flex mt="5" pb="7" align="center">
            <LinkButton link={link} text="Read More" />
            <Separator orientation="vertical" size="4" ml="5" />
            <Separator orientation="vertical" size="4" mr="5" />
            <Flex gap="5">
              {githublink && (
                <Tooltip content="GitHub Repository">
                  <a href={githublink} target="_blank">
                    {<SiGithub size="30" />}
                  </a>
                </Tooltip>
              )}
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
