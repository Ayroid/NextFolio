import UPESCSA from "@/public/images/projects/upescsa.jpg";
import VisualRift from "@/public/images/projects/visualrift.jpg";
import Terraform from "@/public/images/projects/terraform.jpg";
import Parko from "@/public/images/projects/parko.jpg";
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

const projectData = [
  {
    image: VisualRift,
    pageurl: "visualrift",
    category: "Full Stack",
    title: "Visual Rift - Microservices Orchestration Engine",
    description:
      "Visual-Rift streamlines multi-cloud application deployment using intuitive UML diagrams, simplifying complex setups with a user-friendly interface. It efficiently manages microservices, enhancing workflow efficiency.",
    projectOverview:
      "Visual Rift is a full-stack project designed to streamline multi-cloud application deployment through an intuitive UML diagram interface. This Microservices Orchestration Engine simplifies complex setups and enhances workflow efficiency by managing microservices seamlessly. Developed using Next.js, MongoDB, TailwindCSS, Radix UI, and ShadcnUI, Visual Rift is an ongoing project that began in January 2024. The platform's user-friendly approach enables efficient deployment and management of applications across various cloud environments, showcasing the power of modern web technologies in optimizing complex systems.",
    projectExecution:
      "Visual Rift, a full-stack microservices orchestration engine, was meticulously developed to address the complexities of multi-cloud application deployment. Initiated in January 2024, the project utilized Next.js for a responsive front-end experience, MongoDB for scalable database management, and TailwindCSS for modern, customizable styling. Radix UI and ShadcnUI were integrated to enhance the user interface with advanced component libraries. The project features an intuitive UML diagram-based interface to simplify the deployment of microservices and streamline complex configurations. Currently ongoing, Visual Rift demonstrates a commitment to optimizing workflow efficiency and managing microservices effectively across various cloud environments. The project is hosted at Visual Rift Studio and the GitHub repository can be accessed here.",
    projectResult:
      "Visual Rift successfully achieved its goal of simplifying multi-cloud application deployments through its innovative use of UML diagrams. By offering a user-friendly interface and efficient microservices management, the project significantly reduced the complexity of configuring and deploying applications across different cloud environments. The integration of Next.js, MongoDB, TailwindCSS, Radix UI, and ShadcnUI ensured a seamless, modern user experience and robust backend performance. The tool's current deployment at Visual Rift Studio and its GitHub repository demonstrate its effectiveness in enhancing workflow efficiency and managing microservices with ease. As the project is ongoing, it continues to evolve, with ongoing updates aimed at expanding its functionality and improving user satisfaction.",
    // demolink: "https://visualrift.studio",
    githublink: [
      {
        link: "https://github.com/Visual-Rift/Visual-Rift-Client",
        content: "Frontend Repository",
      },
      {
        link: "https://github.com/Visual-Rift/Visual-Rift-Server",
        content: "Backend Repository",
      },
    ],
    desclink: "/portfolio/project/visualrift",
    techStackText:
      "Next.js, NodeJS, MongoDB, TailwindCSS, Radix UI, ShadCN, Bash, AWS, Docker, Kubernetes, Terraform, Ansible, and more.",
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
    description:
      "The official website of UPES CSA, a student organization at UPES, Dehradun. It serves as a platform to showcase the organization's activities, events, and achievements. Event Registration and Management system with automated mailings has been integrated to streamline the process.",
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
    techStackText:
      "ReactJS, ExpressJS, NodeJS, MongoDB, AWS, Docker, Bash & Nginx.",
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
    highlighted: false,
  },
  {
    image: Parko,
    pageurl: "parko",
    category: "Full Stack",
    title: "Parko - Complete Parking Solution",
    description:
      "Parko is an innovative application designed to revolutionize the parking experience at UPES. The frontend of this application provides a user-friendly interface for users to check real-time parking availability, pre-book spots, and navigate to their allocated parking space.",
    projectOverview:
      "Parko is a full-stack project aimed at enhancing the parking experience at UPES. Built with ReactJS, ExpressJS, NodeJS, MongoDB, AWS, Docker, and Nginx, Parko provides a modern solution for parking management. The application features real-time parking availability, spot reservation, and navigation functionalities, all accessible through a seamless user interface. Developed from August 2023 to November 2023, Parko represents a practical application of web technologies to address real-world challenges in parking management.",
    projectExecution:
      "Executed between August 2023 and November 2023, Parko was developed using ReactJS for a responsive front-end, ExpressJS and NodeJS for the backend, and MongoDB for database management. AWS and Docker were utilized for deployment, with Nginx as the web server. The project includes functionalities for checking real-time parking availability, pre-booking spots, and navigating to parking locations. The use of modern technologies ensured a user-friendly experience and efficient parking management. Parko's GitHub repositories are available for review and ongoing updates.",
    projectResult:
      "Parko was successful in enhancing parking experience at UPES by providing an intuitive platform for managing parking spaces. The integration of ReactJS, ExpressJS, NodeJS, and MongoDB created a robust and responsive application. The deployment on AWS with Docker and Nginx ensured high performance and reliability. The project effectively addressed the need for real-time parking management and spot reservation. The source code and documentation are accessible in the GitHub repository",
    githublink: [
      {
        link: "https://github.com/Ayroid/PARKO-Frontend",
        content: "Frontend Repository",
      },
      {
        link: "https://github.com/Ayroid/PARKO-Backend",
        content: "Backend Repository",
      },
    ],
    desclink: "/portfolio/project/parko",
    techStackText:
      "ReactJS, ExpressJS, NodeJS, MongoDB, AWS, Docker, Nginx & Postman",
    techStack: [
      MongoDBTooltip,
      ExpressTooltip,
      ReactTooltip,
      NodeJSTooltip,
      AWSTooltip,
      DockerTooltip,
      NginxTooltip,
      GithubTooltip,
      GithubActionsTooltip,
      PostmanTooltip,
    ],
    timeperiod: "Aug 2023 - Nov 2023",
    highlighted: true,
  },
  {
    image: Terraform,
    pageurl: "terraform-ec2",
    category: "DevOps",
    title: "Terraform EC2 Project - Automated Infrastructure Deployment",
    description:
      "The Terraform EC2 Project simplifies the deployment of an EC2 instance within a custom Virtual Private Cloud (VPC). It creates essential resources including VPC, subnets, an Internet Gateway, route tables, security groups, and an EC2 instance. The project follows best practices with modular configurations for reusability, remote state management using S3, and flexible parameterization through variables. The setup ensures efficient infrastructure management and includes a guide for initialization, configuration, and resource creation. This project effectively demonstrates Terraform’s capabilities for cloud infrastructure automation.",
    projectOverview:
      "The Terraform EC2 Project demonstrates the use of Terraform to automate the deployment of an EC2 instance within a custom VPC. This project includes various configurations organized into branches to showcase different features of Terraform. The configurations include custom and existing modules for Subnet and VPC, remote state management using S3, and best practices such as resource tagging and output values. Developed to enhance infrastructure management and automation, this project exemplifies efficient resource provisioning and state management.",
    projectExecution:
      "Executed between January 2024 and March 2024, this project utilized Terraform to deploy an EC2 instance within a custom VPC. The configurations are organized into several branches, each highlighting specific features such as custom modules, existing modules from the Terraform Registry, and remote state management. The infrastructure includes VPC, subnets, an Internet Gateway, route tables, security groups, a key pair, and an EC2 instance. Best practices followed include modular configuration for reusability, remote state storage in an S3 bucket for collaborative state management, and use of variables and output values for flexibility and clarity. The project was set up to streamline the deployment process and can be extended to include additional resources like RDS or S3.",
    projectResult:
      "The Terraform EC2 Project successfully automated the deployment of an EC2 instance and associated infrastructure within a custom VPC. The modular approach and remote state management facilitated effective collaboration and maintained flexibility. Key outcomes include the creation of a VPC, subnets, an Internet Gateway, route tables, security groups, and an EC2 instance, with proper resource tagging and output values to aid in management. The project illustrates how Terraform can be used to manage infrastructure efficiently, with potential for extension to additional AWS resources. The configuration files and usage instructions are available in the [GitHub repository](https://github.com/Ayroid/terraform-ec2-project).",
    demolink:
      "https://ayroid.hashnode.dev/build-and-manage-aws-infrastructure-with-terraform",
    githublink: [
      {
        link: "https://github.com/Ayroid/terraform-ec2-project",
        content: "GitHub Repository",
      },
    ],
    desclink: "/portfolio/project/terraform-ec2",
    techStackText: "Terraform, AWS & Github.",
    techStack: [TerraformTooltip, AWSTooltip, GithubTooltip],
    timeperiod: "July 2024",
    highlighted: true,
  },
];

export default projectData;
