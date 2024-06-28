"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { ReactNode, useRef } from "react";

interface Props {
  Icon: ReactNode;
  heading: string;
  text: ReactNode;
}

const ServiceCard = ({ Icon, heading, text }: Props) => {
  const serviceCardRef = useRef<HTMLDivElement>(null);

  useGsapAnimation({ref: serviceCardRef});

  return (
    <Flex
      direction="column"
      align="start"
      justify="start"
      className="top-light-shadow highlight-dark hover:highlight-dark-hover group min-h-80 max-w-[23rem] rounded-2xl p-8 transition-colors duration-300 ease-out md:min-w-[23rem]"
      ref={serviceCardRef}
    >
      <Box className="top-light-shadow highlight-dark-hover group-hover:highlight-dark mb-2 rounded-full p-4 transition-colors duration-300 ease-out">
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
