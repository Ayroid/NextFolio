"use client";

import { Badge, RadioCardSwitch, SectionHeading } from "@/app/components";
import useGsapStagger from "@/utils/useGsapStagger";
import { Box, Container, Flex, Tooltip } from "@radix-ui/themes";
import { useState } from "react";

import {
  BiLogoAws,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoFigma,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

import { FaJenkins, FaLinux } from "react-icons/fa";

import {
  SiAnsible,
  SiApachemaven,
  SiBootstrap,
  SiExpress,
  SiGithubactions,
  SiGnubash,
  SiGrafana,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiPostman,
  SiPrisma,
  SiPrometheus,
  SiRadixui,
  SiRedis,
  SiSelenium,
  SiShadcnui,
  SiTerraform,
  SiVercel,
} from "react-icons/si";

const SkillsSection = () => {
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };

  const isVisible = (categories: string[]) => {
    return categories.includes(categorySelected) || categorySelected === "All";
  };

  const itemValueMap = [
    { value: "All", text: "All" },
    { value: "Frontend", text: "Frontend" },
    { value: "Backend", text: "Backend" },
    { value: "Language", text: "Languages" },
    { value: "DevOps", text: "DevOps" },
    { value: "Design", text: "Design" },
  ];

  useGsapStagger({ className: ".skillIcon", delay: 0.25, amount: 3 });

  return (
    <Container className="relative z-20 mx-8 md:mx-4">
      <Flex justify="center" align="center" direction="column">
        <Badge color="#9b00ff" text="Tech Stack" />
        <SectionHeading text="Skills &" highlight="Tools" inline />
        <RadioCardSwitch
          activeCategory={categorySelected}
          changeCategory={handleCategoryChange}
          itemValueMap={itemValueMap}
          columnCount={{ initial: "2", sm: "6" }}
        />
        <Flex
          justify="center"
          align="center"
          gap="5"
          className="w-full flex-wrap"
        >
          <Tooltip content="ReactJS">
            <BiLogoReact
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"} `}
            />
          </Tooltip>

          <Tooltip content="NextJS">
            <SiNextdotjs
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Redux">
            <BiLogoRedux
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="NodeJS">
            <BiLogoNodejs
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="ExpressJS">
            <SiExpress
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="MongoDB">
            <BiLogoMongodb
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Mongoose">
            <SiMongoose
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Prisma">
            <SiPrisma
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Redis">
            <SiRedis
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="JavaScript">
            <BiLogoJavascript
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend", "Backend", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="TypeScript">
            <BiLogoTypescript
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend", "Backend", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Java">
            <BiLogoJava
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Python">
            <BiLogoPython
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="HTML5">
            <BiLogoHtml5
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="CSS3">
            <BiLogoCss3
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="TailwindCSS">
            <BiLogoTailwindCss
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Bootstrap">
            <SiBootstrap
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="RadixUI">
            <SiRadixui
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="ShadcnUI">
            <SiShadcnui
              className={`skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Linux">
            <FaLinux
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Bash">
            <SiGnubash
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps", "Langauge"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Git">
            <BiLogoGit
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="GitHub">
            <BiLogoGithub
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Docker">
            <BiLogoDocker
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Maven">
            <SiApachemaven
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Selenium">
            <SiSelenium
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Postman">
            <SiPostman
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Jenkins">
            <FaJenkins
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="GitHub Actions">
            <SiGithubactions
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Terraform">
            <SiTerraform
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Ansible">
            <SiAnsible
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Prometheus">
            <SiPrometheus
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Grafana">
            <SiGrafana
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Nginx">
            <SiNginx
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="AWS">
            <BiLogoAws
              className={`skillIcon size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Netlify">
            <SiNetlify
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Vercel">
            <SiVercel
              className={`skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Figma">
            <BiLogoFigma
              className={`skillIcon size-14 cursor-pointer md:size-[4.2rem] ${isVisible(["All", "Design"]) ? "block" : "hidden"}`}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Box className="absolute -right-40 -top-12 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default SkillsSection;
