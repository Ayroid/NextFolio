import {
  Badge,
  LinkButton,
  ProjectCard,
  SectionHeading,
} from "@/app/components";
import { Box, Container, Flex } from "@radix-ui/themes";
import projectData from "@/data/projects";

const Projects = () => {
  return (
    <Container className="relative z-20 mx-8 md:mx-4">
      <Badge color="#ffd700" text="Projects" />
      <SectionHeading text="Featured" highlight="Tech Creations" />
      <Flex direction="column" justify="center" align="center" gap="8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            isVisible={project.highlighted}
          />
        ))}
        <LinkButton link="/portfolio" text="Discover More Projects" />
      </Flex>
      <Box className="absolute -right-40 -top-12 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      <Box className="absolute -bottom-96 -left-40 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default Projects;
