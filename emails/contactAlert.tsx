import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactAlertMailProps {
  fullname: string;
  email: string;
  serviceType: string;
  inquiryType: string;
  message: string;
}

export const ContactAlertMail = ({
  fullname,
  email,
  serviceType,
  inquiryType,
  message,
}: ContactAlertMailProps) => {
  const previewText = `New Query Received`;

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
              New <strong>Query Received!</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Ayroid,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You have received a new query. Here are the details:
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Full Name:</strong> {fullname}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Email:</strong> {email}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Service Type:</strong> {serviceType}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Inquiry Type:</strong> {inquiryType}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Message:</strong> {message}
            </Text>
            <Hr className="mx-0 w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Time: {new Date().toLocaleString()}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactAlertMail.PreviewProps = {
  fullname: "John Doe",
  email: "john.doe@example.com",
  serviceType: "Web Development",
  inquiryType: "Project Inquiry",
  message: "I would like to discuss a potential project.",
} as ContactAlertMailProps;

export default ContactAlertMail;
