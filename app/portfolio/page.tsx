"use client";

import {
  BackToTop,
  Badge,
  ProjectCard,
  RadioCardSwitch,
  SectionHeading,
} from "@/app/components";
import projectData from "@/data/projects";
import { Box, Container, Flex } from "@radix-ui/themes";

import { useState } from "react";
import { TbTools } from "react-icons/tb";

const PortfolioPage = () => {
  const [categorySelected, setCategorySelected] = useState("Highlighted");

  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };

  const isVisible = (categories: string[]) => {
    return categories.includes(categorySelected) || categorySelected === "All";
  };

  const itemValueMap = [
    { value: "All", text: "All" },
    { value: "Highlighted", text: "Highlighted" },
    // { value: "Frontend", text: "Frontend" },
    // { value: "Backend", text: "Backend" },
    { value: "Full Stack", text: "Full Stack" },
    // { value: "DevOps", text: "DevOps" },
  ];

  return (
    <Container className="bg-dark space-y-96 py-32 md:py-24">
      <Flex
        justify="center"
        align="center"
        direction="column"
        className="relative z-20 mx-8 md:mx-4"
      >
        <Badge color="#9b00ff" text="Projects" />
        <SectionHeading
          text="Projects"
          highlight="Portfolio"
          textCenter
          inline
        />
        <RadioCardSwitch
          activeCategory={categorySelected}
          changeCategory={handleCategoryChange}
          itemValueMap={itemValueMap}
          columnCount={{ initial: "1", sm: "3" }}
        />
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="8"
          my="5"
          className="z-50"
        >
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              isVisible={isVisible([
                "All",
                project.category,
                project.highlighted ? "Highlighted" : "",
              ])}
            />
          ))}
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="relative z-20 mt-20"
        >
          <TbTools className="size-24 md:size-32" />
          <SectionHeading
            text="Working on more"
            highlight="awesome projects!"
            textCenter
          />
          <Box className="absolute -left-96 -top-64 -z-20 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
          <Box className="absolute -bottom-64 -right-96 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
        </Flex>
        <Box className="absolute -right-52 -top-80 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
        <Box className="absolute -left-52 top-20 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      </Flex>
      <Box className="fixed bottom-20 right-20">
        <BackToTop />
      </Box>
    </Container>
  );
};

export default PortfolioPage;
