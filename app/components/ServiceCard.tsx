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
      className="bg-neutral-900 w-[23rem] min-h-80 rounded-2xl top-light-shadow p-8"
    >
      <Box className="rounded-full bg-neutral-950 p-4 mb-2 top-light-shadow">
        {Icon}
      </Box>
      <Heading weight="medium" mt="4" mb="2" size="8">
        {heading}
      </Heading>
      <Text className="text-gray-accent my-2 text-lg">{text}</Text>
    </Flex>
  );
};

export default ServiceCard;
