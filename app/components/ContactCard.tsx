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
      className="bg-neutral-900 rounded-2xl top-light-shadow py-6 px-8 w-[23rem]"
    >
      <Box className="rounded-full bg-neutral-950 p-4 top-light-shadow">
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
