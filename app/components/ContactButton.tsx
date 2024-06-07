import { Button } from "@radix-ui/themes";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Button radius="full" size="4" mt="9">
      <Link href="/contact">Get in Touch</Link>
    </Button>
  );
};

export default ContactButton;
