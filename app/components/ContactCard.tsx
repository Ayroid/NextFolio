"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { ReactNode, useRef } from "react";
import useGsapAnimation from "@/utils/useGsapAnimation";

interface Props {
  title: string;
  value: string;
  Icon: ReactNode;
}

const ContactCard = ({ Icon, title, value }: Props) => {
  const contactCardRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(contactCardRef);

  return (
    <Flex
      gap="5"
      align="center"
      className="top-light-shadow highlight-dark hover:highlight-dark-hover group w-full rounded-2xl px-8 py-6 lg:w-[23rem]"
      ref={contactCardRef}
    >
      <Box className="top-light-shadow highlight-dark-hover group-hover:highlight-dark rounded-full p-4 transition-colors duration-300 ease-out">
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
