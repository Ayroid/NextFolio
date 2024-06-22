"use client";

import {
  Badge,
  ProjectCard,
  RadioCardSwitch,
  SectionHeading,
} from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { TbTools } from "react-icons/tb";
import projectData from "@/data/projects";

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
        className="mx-8 md:mx-4"
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
        <Flex direction="column" justify="center" align="center" gap="8" my="5">
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
          className="mt-20"
        >
          <TbTools className="size-24 md:size-32" />
          <SectionHeading
            text="Working on more"
            highlight="awesome projects!"
            textCenter
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default PortfolioPage;
