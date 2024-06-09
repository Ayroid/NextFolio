import { Text } from "@radix-ui/themes";

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  return (
    <Text
      className="top-light-shadow w-fit rounded-lg px-4 py-1 font-semibold"
      style={{ color }}
    >
      {text}
    </Text>
  );
};

export default Badge;
