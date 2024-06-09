import { Box, Flex, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  Icon: ReactNode;
}

const ContactCard = ({ Icon, title, value }: Props) => {
  return (
    <Flex
      gap="5"
      align="center"
      className="top-light-shadow w-[23rem] rounded-2xl bg-neutral-900 px-8 py-6"
    >
      <Box className="top-light-shadow rounded-full bg-neutral-950 p-4">
        {Icon}
      </Box>
      <Flex direction="column" gap="1">
        <Text className="text-xl font-semibold">{title}</Text>
        <Text className="text-gray-accent">{value}</Text>
      </Flex>
    </Flex>
  );
};

export default ContactCard;
