import { Container, Box } from "@radix-ui/themes";
import { AboutSection, SkillsSection } from "../sections/about";
const AboutPage = () => {
  return (
    <Container className="space-y-96">
      <Box className="mb-36 mt-24">
        <AboutSection />
      </Box>
      <Box className="mb-36">
        <SkillsSection />
      </Box>
    </Container>
  );
};

export default AboutPage;
