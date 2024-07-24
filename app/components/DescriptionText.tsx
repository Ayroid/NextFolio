"use client";
import React, { useRef } from "react";
import { Text } from "@radix-ui/themes";
import useGsapAnimation from "@/utils/useGsapAnimation";

interface Props {
  text: string;
}

const DescriptionText = ({ text }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  useGsapAnimation({ ref: textRef });
  return (
    <Text className="mb-8 text-lg text-gray-accent" ref={textRef}>
      {text}
    </Text>
  );
};

export default DescriptionText;
