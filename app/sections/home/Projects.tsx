import { Badge, ProjectCard, SectionHeading } from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import VisualRift from "@/public/images/projects/visualrift.jpg";
import UPESCSA from "@/public/images/projects/upescsa.jpg";

const Projects = () => {
  return (
    <Container className="mx-8 md:mx-4">
      <Badge color="#ffd700" text="Projects" />
      <SectionHeading text="Featured" highlight="Tech Creations" />
      <Flex direction="column" justify="center" align="center" gap="8">
        <ProjectCard
          image={VisualRift}
          category="Full Stack"
          title="Visual Rift - Microservices Orchestration Engine"
          description="Visual-Rift streamlines multi-cloud application deployment using intuitive UML diagrams, simplifying complex setups with a user-friendly interface. It efficiently manages microservices, enhancing workflow efficiency."
          demolink="https://visualrift.studio"
          githublink={[
            {
              link: "https://github.com/ayroid",
              content: "Github Repository",
            },
          ]}
          desclink="/portfolio/projects/visual-rift"
          techStack="Next.js, NodeJS, MongoDB, TailwindCSS, Radix UI, ShadCN, Bash, AWS, Docker, Kubernetes, Terraform, Ansible, and more."
          timeperiod="Jan 2024 - Present"
        />
        <ProjectCard
          image={UPESCSA}
          category="Full Stack"
          title="UPES CSA - Official Website"
          description="The official website of UPES CSA, a student organization at UPES, Dehradun. It serves as a platform to showcase the organization's activities, events, and achievements. Event Registration and Management system with automated mailings has been integrated to streamline the process."
          demolink="https://upescsa.in"
          githublink={[
            {
              link: "https://github.com/Ayroid/UPESCSA-Website-Frontend",
              content: "Frontend Repository",
            },
            {
              link: "https://github.com/Ayroid/UPESCSA-Website-Backend",
              content: "Backend Repository",
            },
          ]}
          desclink="/portfolio/projects/upescsa"
          techStack="ReactJS, ExpressJS, NodeJS, MongoDB, AWS, Docker, Bash & Nginx."
          timeperiod="Dec 2023 - Jan 2023"
        />
      </Flex>
    </Container>
  );
};

export default Projects;
