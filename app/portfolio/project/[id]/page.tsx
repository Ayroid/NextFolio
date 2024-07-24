import {
  BackToTop,
  Badge,
  SectionHeading,
  SubSectionHeading,
} from "@/app/components";
import individualProjectData from "@/data/projects";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";

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
        <Box className="mb-20 mt-16 rounded-xl">
          <Image
            src={data.image}
            alt="Project Image"
            className="w-full rounded-xl"
          />
        </Box>
        <SubSectionHeading text="Project Overview" inline />
        <Text className="mb-8 text-lg text-gray-accent">
          {data.projectOverview}
        </Text>

        <SubSectionHeading text="Project Execution" inline />
        <Text className="mb-8 text-lg text-gray-accent">
          {data.projectExecution}
        </Text>

        <SubSectionHeading text="Results" inline />
        <Text className="mb-8 text-lg text-gray-accent">
          {data.projectExecution}
        </Text>
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
