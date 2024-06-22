"use client";

import {
  Badge,
  ProjectCard,
  RadioCardSwitch,
  SectionHeading,
} from "@/app/components";
import UPESCSA from "@/public/images/projects/upescsa.jpg";
import VisualRift from "@/public/images/projects/visualrift.jpg";
import { Container, Flex } from "@radix-ui/themes";
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

  const projectData = [
    {
      image: VisualRift,
      category: "Full Stack",
      title: "Visual Rift - Microservices Orchestration Engine",
      description:
        "Visual-Rift streamlines multi-cloud application deployment using intuitive UML diagrams, simplifying complex setups with a user-friendly interface. It efficiently manages microservices, enhancing workflow efficiency.",
      demolink: "https://visualrift.studio",
      githublink: [
        {
          link: "https://github.com/ayroid",
          content: "Github Repository",
        },
      ],
      desclink: "/portfolio/visual-rift",
      techStack:
        "Next.js, NodeJS, MongoDB, TailwindCSS, Radix UI, ShadCN, Bash, AWS, Docker, Kubernetes, Terraform, Ansible, and more.",
      timeperiod: "Jan 2024 - Present",
      highlighted: true,
    },
    {
      image: UPESCSA,
      category: "Full Stack",
      title: "UPES CSA - Official Website",
      description:
        "The official website of UPES CSA, a student organization at UPES, Dehradun. It serves as a platform to showcase the organization's activities, events, and achievements. Event Registration and Management system with automated mailings has been integrated to streamline the process.",
      demolink: "https://upescsa.in",
      githublink: [
        {
          link: "https://github.com/Ayroid/UPESCSA-Website-Frontend",
          content: "Frontend Repository",
        },
        {
          link: "https://github.com/Ayroid/UPESCSA-Website-Backend",
          content: "Backend Repository",
        },
      ],
      desclink: "/portfolio/upescsa",
      techStack:
        "ReactJS, ExpressJS, NodeJS, MongoDB, AWS, Docker, Bash & Nginx.",
      timeperiod: "Dec 2023 - Jan 2023",
    },
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
