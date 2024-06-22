import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactReplyMailProps {
  fullname: string;
  portfolioLink?: string;
}

export const ContactReplyMail = ({
  fullname,
  portfolioLink = "https://ayroid.vercel.app/portfolio",
}: ContactReplyMailProps) => {
  const previewText = `Message Received`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto mb-[20px] mt-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px] pb-[5px]">
            <Section className="mt-[32px]">
              <Heading className="mx-0 my-0 p-0 text-center text-[28px] font-normal text-black">
                <strong>Ayroid</strong>
              </Heading>
            </Section>
            <Heading className="mx-0 mb-[30px] mt-[10px] p-0 text-center text-[24px] font-normal text-black">
              Message <strong>Received!</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello <strong>{fullname}</strong>,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for reaching out! Your message has been received and
              I&apos;ll get back to you as soon as possible.
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              Meanwhile, you can visit the portfolio by clicking the button
              below.
            </Text>

            <Section className="mb-[32px] mt-[16px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={portfolioLink}
              >
                Visit Portolio
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              or copy and paste this URL into your browser:{" "}
              <Link href={portfolioLink} className="text-blue-600 no-underline">
                {portfolioLink}
              </Link>
            </Text>
            <Hr className="mx-0 w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Follow me! {"   "}
              <Link href="https://www.linkedin.com/in/ayroid/">
                LinkedIn
              </Link> | <Link href="https://x.com/ayroids">Twitter</Link> |{" "}
              <Link href="https://github.com/Ayroid">GitHub</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactReplyMail.PreviewProps = {
  fullname: "Ayush Singh Kushwah",
  portfolioLink: "https://ayroid.vercel.app/portfolio",
} as ContactReplyMailProps;

export default ContactReplyMail;
