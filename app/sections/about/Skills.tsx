"use client";

import { Badge, SectionHeading, RadioCardSwitch } from "@/app/components";
import { Container, Flex, Tooltip } from "@radix-ui/themes";
import { useState } from "react";

import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFigma,
  BiLogoTypescript,
  BiLogoGit,
  BiLogoGithub,
  BiLogoDocker,
  BiLogoAws,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";

import { FaLinux, FaJenkins } from "react-icons/fa";

import {
  SiTerraform,
  SiAnsible,
  SiSelenium,
  SiApachemaven,
  SiGnubash,
  SiGithubactions,
  SiNetlify,
  SiVercel,
  SiBootstrap,
  SiNextdotjs,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiNginx,
  SiPostman,
  SiRedis,
  SiPrometheus,
  SiGrafana,
  SiRadixui,
  SiShadcnui,
} from "react-icons/si";

const SkillsSection = () => {
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };

  const isVisible = (categories: string[]) => {
    return categories.includes(categorySelected) || categorySelected === "All";
  };

  return (
    <Container className="mx-8 md:mx-4">
      <Flex justify="center" align="center" direction="column">
        <Badge color="#9b00ff" text="Tech Stack" />
        <SectionHeading text="Skills &" highlight="Tools" inline />
        <RadioCardSwitch
          activeCategory={categorySelected}
          changeCategory={handleCategoryChange}
        />
        <Flex
          justify="center"
          align="center"
          gap="5"
          className="w-full flex-wrap"
        >
          <Tooltip content="ReactJS">
            <BiLogoReact
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"} `}
            />
          </Tooltip>

          <Tooltip content="NextJS">
            <SiNextdotjs
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Redux">
            <BiLogoRedux
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="NodeJS">
            <BiLogoNodejs
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="ExpressJS">
            <SiExpress
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="MongoDB">
            <BiLogoMongodb
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Mongoose">
            <SiMongoose
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Prisma">
            <SiPrisma
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Redis">
            <SiRedis
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Backend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="JavaScript">
            <BiLogoJavascript
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend", "Backend", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="TypeScript">
            <BiLogoTypescript
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend", "Backend", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Java">
            <BiLogoJava
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Python">
            <BiLogoPython
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Language"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="HTML5">
            <BiLogoHtml5
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="CSS3">
            <BiLogoCss3
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="TailwindCSS">
            <BiLogoTailwindCss
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Bootstrap">
            <SiBootstrap
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="RadixUI">
            <SiRadixui
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="ShadcnUI">
            <SiShadcnui
              className={`size-[2.6rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "Frontend"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Linux">
            <FaLinux
              className={`size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Bash">
            <SiGnubash
              className={`size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps", "Langauge"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Git">
            <BiLogoGit
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="GitHub">
            <BiLogoGithub
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Docker">
            <BiLogoDocker
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Maven">
            <SiApachemaven
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Selenium">
            <SiSelenium
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Postman">
            <SiPostman
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Jenkins">
            <FaJenkins
              className={`size-[3.1rem] cursor-pointer md:size-[4.2rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="GitHub Actions">
            <SiGithubactions
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Terraform">
            <SiTerraform
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Ansible">
            <SiAnsible
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Prometheus">
            <SiPrometheus
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Grafana">
            <SiGrafana
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Nginx">
            <SiNginx
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="AWS">
            <BiLogoAws
              className={`size-14 cursor-pointer md:size-20 ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Netlify">
            <SiNetlify
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Vercel">
            <SiVercel
              className={`size-[3.1rem] cursor-pointer md:size-[3.8rem] ${isVisible(["All", "DevOps"]) ? "block" : "hidden"}`}
            />
          </Tooltip>

          <Tooltip content="Figma">
            <BiLogoFigma
              className={`size-14 cursor-pointer md:size-[4.2rem] ${isVisible(["All", "Design"]) ? "block" : "hidden"}`}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SkillsSection;
