"use client";

import {
  BackToTop,
  Badge,
  BlogCard,
  RadioCardSwitch,
  SectionHeading,
} from "@/app/components";
import blogData from "@/data/blogs";
import { Box, Container, Flex } from "@radix-ui/themes";
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
        <Box className="fixed bottom-20 right-20">
          <BackToTop />
        </Box>
      </Flex>
    </Container>
  );
};

export default BlogPage;
