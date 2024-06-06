import { Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { LuMail } from "react-icons/lu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <Container mt="2">
      <Flex justify="between" align="center">
        <Text className="text-xl font-semibold">AYROID</Text>
        <ul>
          <Flex gap="7">
            {navItems.map(({ name, href }) => (
              <li
                key={name}
                className="font-medium hover:text-radix-accent transition-colors"
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </Flex>
        </ul>
        <a href="mailto:ayushsk0000@gmail.com">
          <LuMail size="25" />
        </a>
      </Flex>
    </Container>
  );
};

export default Navbar;
