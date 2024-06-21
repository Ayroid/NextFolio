import { Flex, Text } from "@radix-ui/themes";
import { PiStarFourFill } from "react-icons/pi";

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  return (
    <Flex className="top-light-shadow highlight-dark w-fit rounded-lg px-4 py-2 font-semibold gap-2">
      <PiStarFourFill size="18" color={color} className="mt-[2px]" />
      <Text style={{ color }}>{text}</Text>
    </Flex>
  );
};

export default Badge;
