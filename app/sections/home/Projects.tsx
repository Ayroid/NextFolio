import { Badge, ProjectCard, SectionHeading } from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import VisualRift from "@/public/images/projects/visualrift.jpeg";

const Projects = () => {
  return (
    <Container className="mx-8 md:mx-4">
      <Badge color="#ffd700" text="Projects" />
      <SectionHeading text="Featured" highlight="Tech Creations" />
      <Flex direction="column" justify="center" align="center" gap="5">
        <ProjectCard
          image={VisualRift}
          category="Full Stack"
          title="Visual Rift - Microservices Orchestration Engine"
          description="Visual-Rift streamlines multi-cloud application deployment using intuitive UML diagrams, simplifying complex setups with a user-friendly interface. It efficiently manages microservices, enhancing workflow efficiency."
          // demolink="https://visualrift.studio"
          githublink="https://github.com/ayroid"
          link="/projects/visual-rift"
          techStack="Next.js, NodeJS, MongoDB, TailwindCSS, Radix UI, ShadCN, Bash, AWS, Docker, Kubernetes, Terraform, Ansible, and more."
          timeperiod="Jan 2024 - Present"
        />
      </Flex>
    </Container>
  );
};

export default Projects;
