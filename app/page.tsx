"use client";

import { Box, Container } from "@radix-ui/themes";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import {
  AboutSection,
  BlogSection,
  HomeSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
} from "./sections/home";

import { BackToTop } from "@/app/components";

export default function Home() {
  
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
      <Box className="mb-36 mt-12 md:mb-60 md:mt-0">
        <HomeSection />
      </Box>
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
