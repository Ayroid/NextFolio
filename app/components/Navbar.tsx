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
    <Container className="p-5 md:bg-inherit bg-zinc-950">
      <Flex justify="between" align="center">
        <Text className="text-xl font-semibold w-20">AYROID</Text>
        <Flex
          className={`fixed md:static top-[4.3rem] right-0 h-full bg-zinc-950 md:bg-inherit transition-transform md:transition-none duration-500 md:translate-x-0 md:h-auto md:w-auto w-48 items-start px-5 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex my-7 flex-col md:flex-row md:items-center gap-7 md:gap-12 w-full">
            {navItems.map(({ name, href }) => (
              <Link key={name} href={href} onClick={toggleMenu}>
                <li className="font-medium hover:text-radix-accent transition-colors">
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
