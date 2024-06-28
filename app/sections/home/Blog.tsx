import { Box, Container, Flex } from "@radix-ui/themes";
import { Badge, SectionHeading, BlogCard } from "@/app/components";
import blogData from "@/data/blogs";

const BlogSection = () => {
  return (
    <Container className="relative z-20 mx-4 md:mx-4">
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
      <Box className="-bottom-58 absolute -right-40 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default BlogSection;
