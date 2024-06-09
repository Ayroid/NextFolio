import { Container, Flex } from "@radix-ui/themes";
import { Badge, SectionHeading, BlogCard } from "../components";
import NextjsVsReact from "@/public/images/blogs/nextjsVsReact.jpeg";
import ConventionalCommits from "@/public/images/blogs/conventionalCommits.jpeg";
import DockerizeMERN from "@/public/images/blogs/dockerizeMERN.jpeg";

const blogData = [
  {
    imageurl: NextjsVsReact,
    category: "Development",
    title:
      "Next.js vs React: A Developer's Perspective on Why Next.js Stands Out",
    description:
      "Discover why Next.js excels over React, featuring key benefits and firsthand insights from a developer's experience.",
    link: "/blog/nextjs-vs-react-a-developers-perspective",
    date: "9 Jun 2024",
  },
  {
    imageurl: ConventionalCommits,
    category: "Development",
    title:
      "From Chaos to Clarity: How Conventional Commits Revolutionize Version Control",
    description:
      "Discover how conventional commits and Commitizen streamline your project's history, ensuring clarity and organization effortlessly.",
    link: "/blog/how-conventional-commits-revolutionize-version-control",
    date: "11 May 2024",
  },
  {
    imageurl: DockerizeMERN,
    category: "Development",
    title: "Dockerize & Deploy a MERN Stack application on AWS EC2",
    description:
      "Learn to efficiently dockerize and deploy MERN applications on AWS EC2. Streamline your deployment process and elevate your development workflow.",
    link: "/blog/dockerize-and-deploy-mern-stack-application",
    date: "10 Mar 2024",
  },
];

const BlogSection = () => {
  return (
    <Container className="mx-8 md:mx-4">
      <Flex
        justify="center"
        align="center"
        className="flex-wrap-reverse lg:flex-nowrap"
        direction="column"
      >
        <Badge color="#ffcd95" text="Learnings" />
        <SectionHeading text="Articles" highlight="& Blogs" inline />
        <Flex direction="column" gap="7">
          {blogData.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogSection;
