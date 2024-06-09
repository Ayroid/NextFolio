import { Badge, SectionHeading } from "@/app/components";
import { Container, Flex, Tooltip } from "@radix-ui/themes";

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
            <BiLogoReact className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="NextJS">
            <SiNextdotjs className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Redux">
            <BiLogoRedux className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="NodeJS">
            <BiLogoNodejs className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="ExpressJS">
            <SiExpress className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="MongoDB">
            <BiLogoMongodb className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Mongoose">
            <SiMongoose className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Prisma">
            <SiPrisma className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Redis">
            <SiRedis className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="JavaScript">
            <BiLogoJavascript className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="TypeScript">
            <BiLogoTypescript className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Java">
            <BiLogoJava className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Python">
            <BiLogoPython className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="HTML5">
            <BiLogoHtml5 className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="CSS3">
            <BiLogoCss3 className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="TailwindCSS">
            <BiLogoTailwindCss className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Bootstrap">
            <SiBootstrap className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="RadixUI">
            <SiRadixui className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="ShadcnUI">
            <SiShadcnui className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Linux">
            <FaLinux className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Bash">
            <SiGnubash className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Git">
            <BiLogoGit className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="GitHub">
            <BiLogoGithub className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Docker">
            <BiLogoDocker className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Maven">
            <SiApachemaven className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Selenium">
            <SiSelenium className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Postman">
            <SiPostman className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Jenkins">
            <FaJenkins className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="GitHub Actions">
            <SiGithubactions className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Terraform">
            <SiTerraform className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Ansible">
            <SiAnsible className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Prometheus">
            <SiPrometheus className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Grafana">
            <SiGrafana className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Nginx">
            <SiNginx className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="AWS">
            <BiLogoAws className="size-14 cursor-pointer md:size-20" />
          </Tooltip>

          <Tooltip content="Netlify">
            <SiNetlify className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Vercel">
            <SiVercel className="size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
          </Tooltip>

          <Tooltip content="Figma">
            <BiLogoFigma className="size-14 cursor-pointer md:size-20" />
          </Tooltip>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SkillsSection;
