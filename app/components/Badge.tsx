import { Text } from "@radix-ui/themes";

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  return (
    <Text
      className="font-semibold rounded-lg py-1 px-4 border-[1px] border-neutral-900 border-t-neutral-800 border-opacity-75"
      style={{ color }}
    >
      {text.toUpperCase()}
    </Text>
    // </RadixBadge>
  );
};

export default Badge;
