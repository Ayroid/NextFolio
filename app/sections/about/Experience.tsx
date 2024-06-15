import { Container, Flex, Separator, Tooltip } from "@radix-ui/themes";
import { Badge, LinkButton, SectionHeading } from "../../components";
import { TbListSearch } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <Container className="mx-8 md:mx-4">
      <Flex justify="center" align="start" direction="column">
        <Badge color="#ffcd95" text="Carrer" />
        <SectionHeading text="Work" highlight="Experience" inline />
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="h-[30rem] w-full"
        >
          <TbListSearch className="size-32 md:size-40" />
          <SectionHeading
            text="Looking for"
            highlight="Opportunities"
            textCenter
          />
          <Flex justify="center" align="center" gap="5">
            <LinkButton link="/contact" text="Hire Me" />
            <Separator
              orientation="vertical"
              size="4"
              className="rounded-lg border-[1px] border-zinc-800"
            />
            <Link
              href="https://drive.google.com/file/d/1NHGjGAnMKICQkJ9BqcvJtb2-eu6pY-Gj/view?usp=sharing"
              target="_blank"
            >
              <Tooltip content="Resume">
                <TiDocumentText className="size-8 animate-moveUp md:size-10" />
              </Tooltip>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ExperienceSection;
