import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LinkButton from "./LinkButton";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  return (
    <Container>
      <Flex
        justify="center"
        align="center"
        direction={{
          initial: "column",
          md: "row",
        }}
        gap="5"
        className="min-h-80 w-full border-t-[1px] border-radix-accent p-12"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          className="w-full"
        >
          <SectionHeading
            text="Got an idea in mind?"
            highlight="Let's Connect"
            textCenter
          />
          <LinkButton link="/contact" text="Contact me" />
          <Flex align="center" justify="center" gap="4" mt="6">
            <Link href="https://www.linkedin.com/in/ayroid/">
              <FaLinkedinIn className="size-6 md:size-8" />
            </Link>
            <Link href="https://github.com/ayroid">
              <FaGithub className="size-6 md:size-8" />
            </Link>
            <Link href="https://x.com/ayroids">
              <FaXTwitter className="size-6 md:size-8" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
