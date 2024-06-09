import { ServiceCard, Badge, SectionHeading } from "@/app/components/";
import { Flex, Container } from "@radix-ui/themes";
import { CgWebsite, CgInfinity } from "react-icons/cg";
import { TbServer2 } from "react-icons/tb";

const servicesData = [
  {
    Icon: <CgWebsite color="#00ffff" className="size-7 md:size-8" />,
    heading: "Stunning Frontend",
    text: (
      <p>
        Experienced in creating beautiful and responsive web applications using
        modern technologies like <strong>React</strong>,{" "}
        <strong>Next.js</strong>, and <strong>TailwindCSS</strong>.
      </p>
    ),
  },
  {
    Icon: <TbServer2 color="#ffcd95" className="size-7 md:size-8" />,
    heading: "Robust Backend",
    text: (
      <p className="md:text-base">
        Specialized in building scalable and efficient backend services with{" "}
        <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
        <strong>MongoDB</strong> using <strong>RESTful APIs</strong> and{" "}
        <strong>GraphQL</strong>.
      </p>
    ),
  },
  {
    Icon: <CgInfinity color="#9b00ff" className="size-7 md:size-8" />,
    heading: "DevOps Solutions",
    text: (
      <p>
        Proficient in <strong>CI/CD</strong> pipelines,{" "}
        <strong>Dockerizing</strong> applications, and{" "}
        <strong>deploying</strong> on <strong>AWS</strong> and{" "}
        <strong>Azure</strong> for smooth operations.
      </p>
    ),
  },
];

const ServicesSection = () => {
  return (
    <Container className="md:mx-4 mx-8">
      <Badge color="cyan" text="Services" />
      <SectionHeading text="Solution Oriented" highlight="Developer" />
      <Flex
        justify="center"
        align="center"
        gap="5"
        className="w-full xl:flex-nowrap flex-wrap"
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.heading} {...service} />
        ))}
      </Flex>
    </Container>
  );
};

export default ServicesSection;
