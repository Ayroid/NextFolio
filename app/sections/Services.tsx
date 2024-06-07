import { Avatar, ContactButton } from "@/app/components/";
import { Flex, Strong, Text } from "@radix-ui/themes";

const Homepage = () => {
  return (
    <Flex
      justify="start"
      align="center"
      direction="column"
      gap="5"
      className="py-24 h-home-page"
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
        className="w-2/3 text-center text-gray-400"
      >
        I&apos;m a budding <Strong>Full Stack Developer</Strong> based in{" "}
        <Strong>Dehradun, India 🇮🇳</Strong> <br />
        Passionate about <Strong>Web Development</Strong> and{" "}
        <Strong>DevOps</Strong>. Eager to create solutions for the{" "}
        <Strong>tomorrow!</Strong>
      </Text>

      <ContactButton />
    </Flex>
  );
};

export default Homepage;