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
      className="top-light-shadow group min-h-80 max-w-[23rem] rounded-2xl highlight-dark p-8 transition-colors duration-300 ease-out hover:highlight-dark-hover md:min-w-[23rem]"
    >
      <Box className="top-light-shadow mb-2 rounded-full highlight-dark-hover p-4 transition-colors duration-300 ease-out group-hover:highlight-dark">
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
      <Text className="my-2 text-lg text-gray-accent">{text}</Text>
    </Flex>
  );
};

export default ServiceCard;
