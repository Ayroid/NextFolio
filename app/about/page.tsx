import { Container, Box } from "@radix-ui/themes";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
} from "@/app/sections/about";
import { Metadata } from "next";
import { BackToTop } from "@/app/components";

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
      <Box className="fixed bottom-20 right-20">
        <BackToTop />
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
