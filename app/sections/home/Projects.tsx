import {
  Badge,
  LinkButton,
  ProjectCard,
  SectionHeading,
} from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import projectData from "@/data/projects";

const Projects = () => {
  return (
    <Container className="mx-8 md:mx-4">
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
    </Container>
  );
};

export default Projects;
