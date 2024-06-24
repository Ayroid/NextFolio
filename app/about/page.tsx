import { Container, Box } from "@radix-ui/themes";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
} from "@/app/sections/about";
import { Metadata } from "next";

const AboutPage = () => {
  return (
    <Container className="bg-dark space-y-96">
      <Box className="mb-36 mt-24">
        <AboutSection />
      </Box>
      <Box className="mb-36">
        <EducationSection />
      </Box>
      <Box className="mb-36">
        <SkillsSection />
      </Box>
      <Box className="mb-36">
        <ExperienceSection />
      </Box>
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Ayroid | About",
  description:
    "Learn more about Ayroid, his skills, experience, and education.",
};

export default AboutPage;
