import {
  BackToTop,
  Badge,
  DescriptionText,
  LinkButton,
  SectionHeading,
  SubSectionHeading,
} from "@/app/components";
import individualProjectData from "@/data/projects";
import { Box, Container, Flex, Text, Tooltip } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface Props {
  params: {
    id: string;
  };
}

const IndividualProjectPage = ({ params: { id } }: Props) => {
  const data = individualProjectData.find((project) => project.pageurl === id);

  if (!data) {
    return <div>Project not found</div>;
  }

  return (
    <Container className="bg-dark py-32 md:py-24">
      <Flex
        justify="start"
        align="start"
        direction="column"
        className="relative z-20 mx-8 md:mx-4"
      >
        <Flex align="center" gap="5" className="mb-10">
          <Badge text={data.category} color="#9b00ff" />
          <Text className="font-semibold">{data.timeperiod}</Text>
        </Flex>

        <SectionHeading text={data.title} inline />

        <Flex className="gap-1" align="center" justify="start">
          {data.techStack.map((SkillIcon, index) => (
            <SkillIcon key={index} />
          ))}
        </Flex>

        <Flex mt="6" align="center">
          <Text className="mt-1 text-2xl font-semibold text-[#9b00ff]">
            Important Links 🡢
          </Text>
          <Flex align="center" className="ml-3 gap-3 md:ml-5 md:gap-5">
            {data.githublink?.map((repository) => (
              <Tooltip key={repository.link} content={repository.content}>
                <a href={repository.link} target="_blank">
                  {<SiGithub size="30" />}
                </a>
              </Tooltip>
            ))}
            {data.demolink && (
              <Tooltip content="Live Demo">
                <a href={data.demolink} target="_blank">
                  {<FiExternalLink size="30" />}
                </a>
              </Tooltip>
            )}
          </Flex>
        </Flex>
        <Box className="mb-20 mt-16 rounded-xl">
          <Image
            src={data.image}
            alt="Project Image"
            className="w-full rounded-xl"
          />
        </Box>
        <SubSectionHeading text="Project Overview" inline />
        <DescriptionText text={data.projectOverview} />

        <SubSectionHeading text="Project Execution" inline />
        <DescriptionText text={data.projectExecution} />

        <SubSectionHeading text="Results" inline />
        <DescriptionText text={data.projectResult} />
      </Flex>
      <Box className="fixed bottom-20 right-20">
        <BackToTop />
      </Box>
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Ayroid | Projects",
  description: "Explore Ayroid's projects.",
};

export default IndividualProjectPage;
