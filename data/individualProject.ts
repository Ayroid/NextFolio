import UPESCSA from "@/public/images/projects/upescsa.jpg";
import VisualRift from "@/public/images/projects/visualrift.jpg";
import { SkillIcons } from "@/app/components";

const {
  ReactTooltip,
  NextJSTooltip,
  ReduxTooltip,
  NodeJSTooltip,
  ExpressTooltip,
  MongoDBTooltip,
  MongooseTooltip,
  PrismaTooltip,
  RedisTooltip,
  JavascriptTooltip,
  TypescriptTooltip,
  JavaTooltip,
  PythonTooltip,
  HtmlTooltip,
  CssTooltip,
  TailwindTooltip,
  BootstrapTooltip,
  RadixUITooltip,
  ShadcnUITooltip,
  LinuxTooltip,
  BashTooltip,
  GitTooltip,
  GithubTooltip,
  DockerTooltip,
  MavenTooltip,
  SeleniumTooltip,
  PostmanTooltip,
  JenkinsTooltip,
  GithubActionsTooltip,
  TerraformTooltip,
  AnsibleTooltip,
  PrometheusTooltip,
  GrafanaTooltip,
  NginxTooltip,
  AWSTooltip,
  NetlifyTooltip,
  VercelTooltip,
  FigmaTooltip,
} = SkillIcons;

const individualProjectData = [
  {
    image: VisualRift,
    pageurl: "visualrift",
    category: "Full Stack",
    title: "Visual Rift - Microservices Orchestration Engine",
    projectOverview:
      "Visual Rift is a full-stack project designed to streamline multi-cloud application deployment through an intuitive UML diagram interface. This Microservices Orchestration Engine simplifies complex setups and enhances workflow efficiency by managing microservices seamlessly. Developed using Next.js, MongoDB, TailwindCSS, Radix UI, and ShadcnUI, Visual Rift is an ongoing project that began in January 2024. The platform's user-friendly approach enables efficient deployment and management of applications across various cloud environments, showcasing the power of modern web technologies in optimizing complex systems.",
    projectExecution:
      "Visual Rift, a full-stack microservices orchestration engine, was meticulously developed to address the complexities of multi-cloud application deployment. Initiated in January 2024, the project utilized Next.js for a responsive front-end experience, MongoDB for scalable database management, and TailwindCSS for modern, customizable styling. Radix UI and ShadcnUI were integrated to enhance the user interface with advanced component libraries. The project features an intuitive UML diagram-based interface to simplify the deployment of microservices and streamline complex configurations. Currently ongoing, Visual Rift demonstrates a commitment to optimizing workflow efficiency and managing microservices effectively across various cloud environments. The project is hosted at Visual Rift Studio and the GitHub repository can be accessed here.",
    projectResult:
      "Visual Rift successfully achieved its goal of simplifying multi-cloud application deployments through its innovative use of UML diagrams. By offering a user-friendly interface and efficient microservices management, the project significantly reduced the complexity of configuring and deploying applications across different cloud environments. The integration of Next.js, MongoDB, TailwindCSS, Radix UI, and ShadcnUI ensured a seamless, modern user experience and robust backend performance. The tool's current deployment at Visual Rift Studio and its GitHub repository demonstrate its effectiveness in enhancing workflow efficiency and managing microservices with ease. As the project is ongoing, it continues to evolve, with ongoing updates aimed at expanding its functionality and improving user satisfaction.",
    demolink: "https://visualrift.studio",
    githublink: [
      {
        link: "https://github.com/ayroid",
        content: "Github Repository",
      },
    ],
    desclink: "/portfolio/project/visualrift",
    techStack: [
      NextJSTooltip,
      MongoDBTooltip,
      TailwindTooltip,
      RadixUITooltip,
      ShadcnUITooltip,
    ],
    timeperiod: "Jan 2024 - Present",
    highlighted: true,
  },
  {
    image: UPESCSA,
    pageurl: "upescsa",
    category: "Full Stack",
    title: "UPES CSA - Official Website",
    projectOverview:
      "The UPES CSA Official Website is a full-stack project that serves as a dynamic platform for showcasing the activities, events, and achievements of the student organization at UPES, Dehradun. Built using MongoDB, ExpressJS, ReactJS, NodeJS, AWS, Docker, Bash, Nginx, GitHub, and GitHub Actions, the website features an integrated Event Registration and Management system with automated mailings, streamlining the entire process for both organizers and participants. This project, developed between December 2023 and January 2023, exemplifies the effective use of modern web technologies to enhance the digital presence of UPES CSA and improve engagement with its members and the broader community.",
    projectExecution:
      "The UPES CSA official website project, completed between December 2023 and January 2024, was developed to enhance the digital presence of the UPES Computer Science Association. This full-stack solution integrates ReactJS for a dynamic front-end, ExpressJS and NodeJS for robust backend functionality, and MongoDB for efficient data management. The website is hosted on AWS with Docker containers for deployment and Nginx as the web server, ensuring high performance and reliability. Key features include an event registration and management system with automated mailings, streamlining organizational processes. The project is accessible at UPES CSA, with the front-end and back-end repositories available on GitHub Frontend and Backend, respectively.",
    projectResult:
      "The UPES CSA official website project delivered a comprehensive digital platform that effectively showcases the organization's activities, events, and achievements. The integration of ReactJS, ExpressJS, NodeJS, and MongoDB resulted in a dynamic and responsive website, while the deployment on AWS with Docker and Nginx ensured reliable performance and scalability. The event registration and management system, complete with automated mailings, streamlined administrative tasks and enhanced user engagement. Successfully launched in January 2024, the website has become a vital tool for the UPES Computer Science Association, providing an efficient and professional online presence. The project’s repositories on GitHub Frontend and Backend offer ongoing support and potential for future enhancements.",
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
    desclink: "/portfolio/project/upescsa",
    techStack: [
      MongoDBTooltip,
      ExpressTooltip,
      ReactTooltip,
      NodeJSTooltip,
      AWSTooltip,
      DockerTooltip,
      BashTooltip,
      NginxTooltip,
      GithubTooltip,
      GithubActionsTooltip,
    ],
    timeperiod: "Dec 2023 - Jan 2023",
    highlighted: true,
  },
];

export default individualProjectData;
