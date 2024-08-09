"use client";

import { Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
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
    <Container className="md:bg-dark fixed z-50 flex h-20 w-full justify-center bg-black/50 p-5 backdrop-blur-md md:static md:h-28">
      <Flex justify="between" align="center" className="w-full">
        <Link href="/">
          <Text className="w-20 text-xl font-bold">AYROID</Text>
        </Link>
        <Flex
          className={`md:bg-dark fixed right-0 top-[5rem] h-screen w-full items-start bg-black/80 px-5 backdrop-blur-md transition-transform duration-500 md:static md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="my-7 flex h-full w-full flex-col items-center gap-7 md:flex-row md:items-center md:gap-12">
            {navItems.map(({ name, href }) => (
              <li
                key={name}
                className="font-medium transition-colors hover:text-radix-accent"
              >
                <Link href={href} onClick={toggleMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Flex gap="6" align="center" justify="end" className="w-20">
          <a href="mailto:ayushsk0000@gmail.com">
            <LuMail size="25" />
          </a>
          {!menuOpen ? (
            <RxHamburgerMenu
              size="25"
              className="cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <RxCross2
              size="25"
              className="cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
