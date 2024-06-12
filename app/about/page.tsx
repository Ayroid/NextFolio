import { Container, Box } from "@radix-ui/themes";
import { AboutSection, SkillsSection } from "@/app/sections/about";
import { UnderDevelopmemt } from "@/app/components";
const AboutPage = () => {
  return (
    <Container className="space-y-96">
      <Box className="mb-36 mt-24">
        <AboutSection />
      </Box>
      <Box className="mb-36">
        <SkillsSection />
      </Box>
      <UnderDevelopmemt />
    </Container>
  );
};

export default AboutPage;
