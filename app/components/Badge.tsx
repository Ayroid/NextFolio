"use client";

import useGsapAnimation from "@/utils/useGsapAnimation";
import { Flex, Text } from "@radix-ui/themes";
import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(badgeRef);

  return (
    <Flex
      className="top-light-shadow highlight-dark w-fit gap-2 rounded-lg px-4 py-2 font-semibold"
      ref={badgeRef}
    >
      <PiStarFourFill size="18" color={color} className="mt-[2px]" />
      <Text style={{ color }}>{text}</Text>
    </Flex>
  );
};

export default Badge;
