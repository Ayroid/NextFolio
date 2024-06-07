import { Text } from "@radix-ui/themes";

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  return (
    <Text
      className="font-semibold rounded-lg py-1 px-4 top-light-shadow"
      style={{ color }}
    >
      {text.toUpperCase()}
    </Text>
  );
};

export default Badge;
