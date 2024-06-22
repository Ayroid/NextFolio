import { Container, Flex } from "@radix-ui/themes";
import { Badge, SectionHeading, BlogCard } from "@/app/components";
import blogData from "@/data/blogs";

const BlogSection = () => {
  return (
    <Container className="mx-4 md:mx-4">
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
            <BlogCard key={blog.title} {...blog} isVisible={blog.highlighted} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogSection;
