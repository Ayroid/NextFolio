import { Strong } from "@radix-ui/themes";
import {
  Body,
  Container,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  fullname: string;
  serviceType: string;
  inquiryType: string;
  message: string;
}

const WelcomeTemplate = ({
  fullname,
  serviceType,
  inquiryType,
  message,
}: Props) => {
  return (
    <Html>
      <Tailwind>
        <Body>
          <Preview>This is a preview of the email template.</Preview>
          <Container>
            <Text className="text-xl font-bold">Hello {fullname}!</Text>
            <Text>
              Thank you for reaching out! We have received your message and will
              get back to you as soon as possible.
            </Text>

            <Text>
              Here is a summary of your inquiry:
              <br />
            </Text>

            <Text>
              <Strong>Service Type:</Strong> {serviceType}
              <br />
              <Strong>Inquiry Type:</Strong> {inquiryType}
              <br />
              <Strong>Message:</Strong> {message}
            </Text>

            <Text>
              Best Regards,
              <br />
              Ayush Singh Kushwah
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
