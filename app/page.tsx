import { Container, Box } from "@radix-ui/themes";
import {
  AboutSection,
  BlogSection,
  HomeSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
} from "./sections";

import { BackToTop } from "@/app/components";

export default function Home() {
  return (
    <Container className="space-y-96">
      <HomeSection />
      <Box className="mb-36">
        <ServicesSection />
      </Box>
      <Box className="mb-36">
        <AboutSection />
      </Box>
      <Box className="mb-36">
        <SkillsSection />
      </Box>
      <Box className="mb-36">
        <ProjectsSection />
      </Box>
      <Box className="mb-36">
        <BlogSection />
      </Box>
      <Box className="fixed bottom-20 right-20">
        <BackToTop />
      </Box>
    </Container>
  );
}
