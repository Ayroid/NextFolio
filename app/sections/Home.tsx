import { Avatar, LinkButton } from "@/app/components/";
import { Code, Flex, Strong, Text, Box } from "@radix-ui/themes";

const HomeSection = () => {
  return (
    <Flex
      justify="start"
      align="center"
      direction="column"
      gap="5"
      className="py-24 md:h-home-page-md h-home-page-initial"
    >
      <Flex direction="column" align="center" gap="3">
        <Avatar />
        <Text weight="bold" size="5">
          Hi! I&apos;m<Strong className="text-radix-accent"> Ayush</Strong>
        </Text>
      </Flex>
      <Flex
        direction="column"
        width="100%"
        justify="center"
        align="center"
        gap="1"
      >
        <Text size={{ initial: "6", md: "9" }} align="center" className="w-3/4">
          <Strong>Unleashing Solutions</Strong>{" "}
          <span className="text-radix-accent">with</span>
          <br />
          <span className="text-radix-accent"> the</span>
          <Strong> Precision of Code Crafting</Strong>
        </Text>
      </Flex>
      <Text
        size={{
          initial: "2",
          md: "3",
        }}
        className="w-2/3 text-center text-gray-accent"
      >
        I&apos;m a budding{" "}
        <Code weight="bold" size="3">
          Full Stack Developer
        </Code>{" "}
        based in{" "}
        <Code weight="bold" size="3">
          Dehradun, India
        </Code>{" "}
        🇮🇳 <br />
        Passionate about{" "}
        <Code weight="bold" size="3">
          Web Development
        </Code>{" "}
        and{" "}
        <Code weight="bold" size="3">
          DevOps
        </Code>
        . Eager to create solutions for the{" "}
        <Code weight="bold" size="3">
          Tomorrow!
        </Code>
      </Text>

      <Box mt="4">
        <LinkButton link="/contact" text="Get in Touch" />
      </Box>
    </Flex>
  );
};

export default HomeSection;
