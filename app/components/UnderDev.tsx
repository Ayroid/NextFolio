import { SectionHeading } from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import { TbTools } from "react-icons/tb";

const UnderDev = () => {
  return (
    <Container className="h-home-page-initial py-24 md:h-home-page-md">
      <Flex
        justify="center"
        align="center"
        className="h-[30rem]"
        direction="column"
      >
        <TbTools className="size-32 md:size-40" />
        <SectionHeading
          text="This Page is"
          highlight="Under Development"
          textCenter
        />
      </Flex>
    </Container>
  );
};

export default UnderDev;
