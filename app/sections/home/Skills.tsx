"use client";

import { Badge, SectionHeading } from "@/app/components";
import useGsapStagger from "@/utils/useGsapStagger";
import { Container, Flex, Tooltip } from "@radix-ui/themes";

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
  useGsapStagger(".skillIcon", 0.5, 2);

  return (
    <Container className="mx-8 md:mx-4">
      <Flex justify="center" align="center" direction="column">
        <Badge color="#9b00ff" text="Tech Stack" />
        <SectionHeading text="Skills &" highlight="Tools" inline />
        <Flex
          justify="center"
          align="center"
          gap="5"
          className="w-full flex-wrap"
        >
          <Tooltip content="ReactJS">
            <BiLogoReact className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="NextJS">
            <SiNextdotjs className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Redux">
            <BiLogoRedux className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="NodeJS">
            <BiLogoNodejs className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="ExpressJS">
            <SiExpress className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="MongoDB">
            <BiLogoMongodb className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Mongoose">
            <SiMongoose className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Prisma">
            <SiPrisma className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Redis">
            <SiRedis className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="JavaScript">
            <BiLogoJavascript className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="TypeScript">
            <BiLogoTypescript className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Java">
            <BiLogoJava className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Python">
            <BiLogoPython className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="HTML5">
            <BiLogoHtml5 className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="CSS3">
            <BiLogoCss3 className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="TailwindCSS">
            <BiLogoTailwindCss className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Bootstrap">
            <SiBootstrap className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="RadixUI">
            <SiRadixui className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="ShadcnUI">
            <SiShadcnui className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Linux">
            <FaLinux className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Bash">
            <SiGnubash className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Git">
            <BiLogoGit className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="GitHub">
            <BiLogoGithub className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Docker">
            <BiLogoDocker className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Maven">
            <SiApachemaven className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Selenium">
            <SiSelenium className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Postman">
            <SiPostman className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Jenkins">
            <FaJenkins className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="GitHub Action s">
            <SiGithubactions className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Terraform">
            <SiTerraform className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Ansible">
            <SiAnsible className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Prometheus">
            <SiPrometheus className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Grafana">
            <SiGrafana className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Nginx">
            <SiNginx className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="AWS">
            <BiLogoAws className="skillIcon size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Netlify">
            <SiNetlify className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Vercel">
            <SiVercel className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
          </Tooltip>

          <Tooltip content="Figma">
            <BiLogoFigma className="skillIcon size-14 cursor-pointer md:size-[4.2rem]" />
          </Tooltip>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SkillsSection;
