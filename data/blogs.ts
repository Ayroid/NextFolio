import NextjsVsReact from "@/public/images/blogs/nextjsVsReact.jpeg";
import ConventionalCommits from "@/public/images/blogs/conventionalCommits.jpeg";
import DockerizeMERN from "@/public/images/blogs/dockerizeMERN.jpeg";
import TerraformEC2 from "@/public/images/blogs/terraformEC2.jpg";

const blogData = [
  {
    imageurl: TerraformEC2,
    category: "DevOps",
    title:
      "Provision and Manage AWS Infrastructure with Terraform - Infrastructure as Code",
    description:
      "Learn to  use Terraform efficiently and provision and manage resources on AWS. Streamline and manage your infrastructure.",
    link: "https://ayroid.hashnode.dev/build-and-manage-aws-infrastructure-with-terraform",
    date: "3 Aug 2024",
    highlighted: true,
  },
  {
    imageurl: NextjsVsReact,
    category: "Development",
    title:
      "Next.js vs React: A Developer's Perspective on Why Next.js Stands Out",
    description:
      "Discover why Next.js excels over React, featuring key benefits and firsthand insights from a developer's experience.",
    link: "https://ayroid.hashnode.dev/nextjs-vs-react-a-developers-perspective-on-why-nextjs-stands-out",
    date: "9 Jun 2024",
    highlighted: true,
  },
  {
    imageurl: ConventionalCommits,
    category: "Development",
    title:
      "From Chaos to Clarity: How Conventional Commits Revolutionize Version Control",
    description:
      "Discover how conventional commits and Commitizen streamline your project's history, ensuring clarity and organization effortlessly.",
    link: "https://ayroid.hashnode.dev/from-chaos-to-clarity-how-conventional-commits-revolutionize-version-control",
    date: "11 May 2024",
    highlighted: true,
  },
  {
    imageurl: DockerizeMERN,
    category: "DevOps",
    title: "Dockerize & Deploy a MERN Stack application on AWS EC2",
    description:
      "Learn to efficiently dockerize and deploy MERN applications on AWS EC2. Streamline your deployment process and elevate your development workflow.",
    link: "https://ayroid.hashnode.dev/dockerize-deploy-mern-stack-application-on-aws-ec2",
    date: "10 Mar 2024",
    highlighted: false,
  },
];

export default blogData;
