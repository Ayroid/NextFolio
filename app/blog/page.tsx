"use client";

import {
  Badge,
  BlogCard,
  RadioCardSwitch,
  SectionHeading,
} from "@/app/components";
import ConventionalCommits from "@/public/images/blogs/conventionalCommits.jpeg";
import DockerizeMERN from "@/public/images/blogs/dockerizeMERN.jpeg";
import NextjsVsReact from "@/public/images/blogs/nextjsVsReact.jpeg";
import { Container, Flex } from "@radix-ui/themes";
import { useState } from "react";

const BlogPage = () => {
  const [categorySelected, setCategorySelected] = useState("Highlighted");

  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };

  const isVisible = (categories: string[]) => {
    return categories.includes(categorySelected) || categorySelected === "All";
  };

  const itemValueMap = [
    { value: "All", text: "All" },
    { value: "Highlighted", text: "Highlighted" },
    { value: "Development", text: "Development" },
    { value: "DevOps", text: "DevOps" },
  ];

  const blogData = [
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
    },
  ];

  return (
    <Container className="bg-dark space-y-96 py-32 md:py-24">
      <Flex justify="center" align="center" direction="column">
        <Badge color="#ffcd95" text="Learnings" />
        <SectionHeading text="Articles" highlight="& Blogs" inline />
        <RadioCardSwitch
          activeCategory={categorySelected}
          changeCategory={handleCategoryChange}
          itemValueMap={itemValueMap}
          columnCount={{ initial: "1", sm: "4" }}
        />
        <Flex direction="column" gap="7" className="mt-10">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.title}
              {...blog}
              isVisible={isVisible([
                "All",
                blog.category,
                blog.highlighted ? "Highlighted" : "",
              ])}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogPage;
