import { Text } from "@radix-ui/themes";

interface Props {
  text: string;
  color: string;
}

const BadgeCategory = ({ text, color }: Props) => {
  return (
    <Text
      className="bg-zinc-950 w-fit rounded-lg px-4 py-1 font-semibold"
      style={{ color }}
    >
      {text}
    </Text>
  );
};

export default BadgeCategory;
