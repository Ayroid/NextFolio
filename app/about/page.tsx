"use client";

import { BackToTop } from "@/app/components";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
} from "@/app/sections/about";
import { Box, Container } from "@radix-ui/themes";

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

export default AboutPage;
