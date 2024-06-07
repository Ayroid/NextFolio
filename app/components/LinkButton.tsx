import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  link: string;
  text: string;
}

const LinkButton = ({ link, text }: Props) => {
  return (
    <Button radius="full" size="4" variant="soft">
      <Link href={link}>{text}</Link>
    </Button>
  );
};

export default LinkButton;
