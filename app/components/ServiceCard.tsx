import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  heading: string;
  text: ReactNode;
}

const ServiceCard = ({ Icon, heading, text }: Props) => {
  return (
    <Flex
      direction="column"
      align="start"
      justify="start"
      className="top-light-shadow max-h-96 min-h-80 w-[23rem] min-w-[23rem] rounded-2xl bg-neutral-900 p-8"
    >
      <Box className="top-light-shadow mb-2 rounded-full bg-neutral-950 p-4">
        {Icon}
      </Box>
      <Heading
        weight="medium"
        mt={{
          initial: "2",
          md: "4",
        }}
        mb={{
          initial: "1",
          md: "2",
        }}
        size={{
          initial: "7",
          md: "8",
        }}
      >
        {heading}
      </Heading>
      <Text className="text-gray-accent my-2 text-lg">{text}</Text>
    </Flex>
  );
};

export default ServiceCard;
