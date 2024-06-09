import { Container, Box } from "@radix-ui/themes";
import {
  HomeSection,
  ServicesSection,
  AboutSection,
  BlogSection,
} from "./sections";

export default function Home() {
  return (
    <Container className="space-y-96">
      <HomeSection />
      <Box className="mb-36">
        <ServicesSection />
      </Box>
      <Box className="mb-36">
        <AboutSection />
      </Box>
      <Box className="mb-36">
        <BlogSection />
      </Box>
    </Container>
  );
}
