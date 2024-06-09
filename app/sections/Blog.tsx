import { Container, Flex } from "@radix-ui/themes";
import { Badge, SectionHeading, BlogCard } from "../components";
import Blog1 from "@/public/images/blog1.jpg";

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
        <BlogCard
          imageurl={Blog1}
          category="Development"
          title="Next.js vs React: A Developer's Perspective on Why Next.js Stands Out"
          description="Discover why Next.js excels over React, featuring key benefits and firsthand insights from a developer's experience."
          link="/blog/nextjs-vs-react-a-developers-perspective"
          date="21st June 2021"
        />
      </Flex>
    </Container>
  );
};

export default BlogSection;
