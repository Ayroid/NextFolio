import { Tooltip } from "@radix-ui/themes";
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

const SkillIcons = {
  ReactTooltip: () => (
    <Tooltip content="ReactJS">
      <BiLogoReact className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  NextJSTooltip: () => (
    <Tooltip content="NextJS">
      <SiNextdotjs className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  ReduxTooltip: () => (
    <Tooltip content="Redux">
      <BiLogoRedux className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  NodeJSTooltip: () => (
    <Tooltip content="NodeJS">
      <BiLogoNodejs className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  ExpressTooltip: () => (
    <Tooltip content="ExpressJS">
      <SiExpress className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  MongoDBTooltip: () => (
    <Tooltip content="MongoDB">
      <BiLogoMongodb className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  MongooseTooltip: () => (
    <Tooltip content="Mongoose">
      <SiMongoose className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  PrismaTooltip: () => (
    <Tooltip content="Prisma">
      <SiPrisma className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  RedisTooltip: () => (
    <Tooltip content="Redis">
      <SiRedis className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  JavascriptTooltip: () => (
    <Tooltip content="JavaScript">
      <BiLogoJavascript className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  TypescriptTooltip: () => (
    <Tooltip content="TypeScript">
      <BiLogoTypescript className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  JavaTooltip: () => (
    <Tooltip content="Java">
      <BiLogoJava className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  PythonTooltip: () => (
    <Tooltip content="Python">
      <BiLogoPython className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  HtmlTooltip: () => (
    <Tooltip content="HTML5">
      <BiLogoHtml5 className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  CssTooltip: () => (
    <Tooltip content="CSS3">
      <BiLogoCss3 className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  TailwindTooltip: () => (
    <Tooltip content="TailwindCSS">
      <BiLogoTailwindCss className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  BootstrapTooltip: () => (
    <Tooltip content="Bootstrap">
      <SiBootstrap className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  RadixUITooltip: () => (
    <Tooltip content="RadixUI">
      <SiRadixui className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  ShadcnUITooltip: () => (
    <Tooltip content="ShadcnUI">
      <SiShadcnui className="skillIcon size-[2.6rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  LinuxTooltip: () => (
    <Tooltip content="Linux">
      <FaLinux className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
    </Tooltip>
  ),
  BashTooltip: () => (
    <Tooltip content="Bash">
      <SiGnubash className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
    </Tooltip>
  ),
  GitTooltip: () => (
    <Tooltip content="Git">
      <BiLogoGit className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  GithubTooltip: () => (
    <Tooltip content="GitHub">
      <BiLogoGithub className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  DockerTooltip: () => (
    <Tooltip content="Docker">
      <BiLogoDocker className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  MavenTooltip: () => (
    <Tooltip content="Maven">
      <SiApachemaven className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  SeleniumTooltip: () => (
    <Tooltip content="Selenium">
      <SiSelenium className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  PostmanTooltip: () => (
    <Tooltip content="Postman">
      <SiPostman className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  JenkinsTooltip: () => (
    <Tooltip content="Jenkins">
      <FaJenkins className="skillIcon size-[3.1rem] cursor-pointer md:size-[4.2rem]" />
    </Tooltip>
  ),
  GithubActionsTooltip: () => (
    <Tooltip content="GitHub Actions">
      <SiGithubactions className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  TerraformTooltip: () => (
    <Tooltip content="Terraform">
      <SiTerraform className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  AnsibleTooltip: () => (
    <Tooltip content="Ansible">
      <SiAnsible className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  PrometheusTooltip: () => (
    <Tooltip content="Prometheus">
      <SiPrometheus className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  GrafanaTooltip: () => (
    <Tooltip content="Grafana">
      <SiGrafana className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  NginxTooltip: () => (
    <Tooltip content="Nginx">
      <SiNginx className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  AWSTooltip: () => (
    <Tooltip content="AWS">
      <BiLogoAws className="skillIcon size-14 cursor-pointer md:size-20" />
    </Tooltip>
  ),
  NetlifyTooltip: () => (
    <Tooltip content="Netlify">
      <SiNetlify className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  VercelTooltip: () => (
    <Tooltip content="Vercel">
      <SiVercel className="skillIcon size-[3.1rem] cursor-pointer md:size-[3.8rem]" />
    </Tooltip>
  ),
  FigmaTooltip: () => (
    <Tooltip content="Figma">
      <BiLogoFigma className="skillIcon size-14 cursor-pointer md:size-[4.2rem]" />
    </Tooltip>
  ),
};

export default SkillIcons;
