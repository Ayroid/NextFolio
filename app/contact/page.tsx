"use client";

import {
  BackToTop,
  Badge,
  ContactCard,
  ContactForm,
  SectionHeading,
} from "@/app/components";
import { Box, Container, Flex } from "@radix-ui/themes";
import Lenis from "@studio-freight/lenis/types";
import { useEffect } from "react";
import { LuMail } from "react-icons/lu";
import { MdPhone } from "react-icons/md";

const ContactPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Container className="bg-dark py-32 md:py-24">
      <Flex
        justify="center"
        align="center"
        direction="column"
        className="relative z-20 mx-8 md:mx-4"
      >
        <Badge text="Contact" color="#e3b785" />
        <SectionHeading text="Contact" highlight="me" inline textCenter />
        <Flex
          gap="5"
          justify="center"
          align="center"
          direction="column"
          mx="5"
          className="relative z-20"
        >
          <Flex gap="5" justify="center" align="center" wrap="wrap">
            <ContactCard
              title="Mail"
              value="ayushsk0000@gmail.com"
              Icon={<LuMail size="40" color="#9b00ff" />}
            />
            <ContactCard
              title="Phone"
              value="+91 94567 13820"
              Icon={<MdPhone size="40" color="#ffcd95" />}
            />
          </Flex>
          <ContactForm />
          <Box className="absolute -bottom-64 -right-96 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
        </Flex>
        <Box className="absolute -right-52 -top-80 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
        <Box className="absolute -left-52 top-20 z-10 h-[25rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
      </Flex>
      <Box className="fixed bottom-20 right-20">
        <BackToTop />
      </Box>
    </Container>
  );
};

export default ContactPage;
