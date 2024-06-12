import ProfilePic from "@/public/images/profile/profile-crop.jpg";
import { Box, Code, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { SectionHeading } from "../../components";

const socialMedia = [
  {
    name: "GitHub",
    icon: <FaLinkedinIn color="#ffcd95" size="20" />,
    link: "https://github.com/Ayroid",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn color="#ffcd95" size="20" />,
    link: "https://www.linkedin.com/in/ayroid/",
  },
  {
    name: "Twitter",
    icon: <FaLinkedinIn color="#ffcd95" size="20" />,
    link: "https://x.com/ayroids",
  },
];

const AboutSection = () => {
  return (
    <Container className="mx-8 md:mx-4">
      <Flex
        justify="center"
        align="start"
        gap="9"
        className="flex-wrap-reverse lg:flex-nowrap"
      >
        <Image src={ProfilePic} alt="profile" className="rounded-3xl" />
        <Box>
          <SectionHeading
            text="I'm Ayush Singh Kushwah,"
            highlight="a Full Stack Developer and Aspiring DevOps"
          />
          <Text className="text-gray-accent text-lg">
            I&apos;m a Final Year <Code>BTech Computer Science</Code> student
            specializing in <Code>DevOps</Code> at the{" "}
            <Code>University of Petroleum and Energy Studies</Code>.
            <br />
            <br />
            Passionate about <Code>Full Stack Development</Code> and{" "}
            <Code>DevOps</Code>, I thrive on building innovative solutions. With
            a commitment to sharing knowledge, I actively contribute to the
            open-source ecosystem.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutSection;
