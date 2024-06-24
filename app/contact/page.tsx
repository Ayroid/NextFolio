import {
  Badge,
  ContactCard,
  ContactForm,
  SectionHeading,
} from "@/app/components";
import { Container, Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import { LuMail } from "react-icons/lu";
import { MdPhone } from "react-icons/md";

const ContactPage = () => {
  return (
    <Container className="bg-dark py-32 md:py-24">
      <Flex justify="center" align="center" direction="column">
        <Badge text="Contact" color="#e3b785" />
        <SectionHeading text="Contact" highlight="me" inline textCenter />
        <Flex gap="5" justify="center" align="center" direction="column" mx="5">
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
        </Flex>
      </Flex>
    </Container>
  );
};

export const metadata: Metadata = {
  title: 'Ayroid | Contact',
  description: 'Contact Ayroid via mail or phone.'
};

export default ContactPage;
