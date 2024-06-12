"use client";

import { Flex, RadioCards, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  activeCategory: string;
  changeCategory: (category: string) => void;
}

const RadioCardSwitch = ({ activeCategory, changeCategory }: Props) => {
  return (
    <Flex className="-mt-5 mb-10 max-w-full">
      <RadioCards.Root
        value={activeCategory}
        onValueChange={(value) => changeCategory(value)}
        columns={{ initial: "2", sm: "6" }}
      >
        <RadioCards.Item value="All" className="hover:cursor-pointer">
          <Text weight="bold">All</Text>
        </RadioCards.Item>
        <RadioCards.Item value="Frontend" className="hover:cursor-pointer">
          <Text weight="bold">Frontend</Text>
        </RadioCards.Item>
        <RadioCards.Item value="Backend" className="hover:cursor-pointer">
          <Text weight="bold">Backend</Text>
        </RadioCards.Item>
        <RadioCards.Item value="Language" className="hover:cursor-pointer">
          <Text weight="bold">Languages</Text>
        </RadioCards.Item>
        <RadioCards.Item value="DevOps" className="hover:cursor-pointer">
          <Text weight="bold">DevOps</Text>
        </RadioCards.Item>
        <RadioCards.Item value="Design" className="hover:cursor-pointer">
          <Text weight="bold">Design</Text>
        </RadioCards.Item>
      </RadioCards.Root>
    </Flex>
  );
};

export default RadioCardSwitch;
