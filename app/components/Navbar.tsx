"use client";

import { Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { LuMail } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Container className="highlight-dark md:bg-dark fixed z-50 flex h-20 w-full justify-center p-5 md:static md:h-28">
      <Flex justify="between" align="center">
        <Link href="/">
          <Text className="w-20 text-xl font-bold">
            AYROID
          </Text>
        </Link>
        <Flex
          className={`highlight-dark md:bg-dark fixed right-0 top-[4.3rem] h-full w-48 items-start px-5 transition-transform duration-500 md:static md:h-auto md:w-auto md:translate-x-0 md:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="my-7 flex w-full flex-col gap-7 md:flex-row md:items-center md:gap-12">
            {navItems.map(({ name, href }) => (
              <Link key={name} href={href} onClick={toggleMenu}>
                <li className="font-medium transition-colors hover:text-radix-accent">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </Flex>
        <Flex gap="6" align="center" justify="end" className="w-20">
          <a href="mailto:ayushsk0000@gmail.com">
            <LuMail size="25" />
          </a>
          <RxHamburgerMenu
            size="25"
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
