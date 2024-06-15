import { Container, Box } from "@radix-ui/themes";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
} from "@/app/sections/about";

const AboutPage = () => {
  return (
    <Container className="space-y-96">
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

export default AboutPage;
