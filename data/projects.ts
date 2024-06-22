import UPESCSA from "@/public/images/projects/upescsa.jpg";
import VisualRift from "@/public/images/projects/visualrift.jpg";

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
    highlighted: true,
  },
];

export default projectData;
