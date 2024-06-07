import { Container } from "@radix-ui/themes";
import { HomeSection, ServicesSection } from "./sections";

export default function Home() {
  return (
    <Container>
      <HomeSection />
      <ServicesSection />
    </Container>
  );
}
