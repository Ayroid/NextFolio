"use client";

import { BackToTop } from "@/app/components";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
} from "@/app/sections/about";
import { Box, Container } from "@radix-ui/themes";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
