import { Box, Container, Flex } from "@radix-ui/themes";
import { Badge, ExperienceCard, SectionHeading } from "@/app/components";

const EducationSection = () => {
  return (
    <Container className="relative mx-8 md:mx-4">
      <Flex justify="center" align="start" direction="column">
        <Badge color="#ffcd95" text="Academics" />
        <SectionHeading highlight="Education" inline />
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="relative mt-20 w-full"
        >
          <ExperienceCard
            instituteName="University of Petroleum and Energy Studies"
            location="Dehradun, India"
            course="Bachelor of Technology in Computer Science and Engineering"
            specialization="Specialization in DevOps"
            designation="Undergraduate Student"
            result="CGPA - 8.78"
            educationLevel="College"
            yearOfStudy="2021 - 2025"
          />
          <ExperienceCard
            instituteName="Carman Residential and Day School"
            location="Dehradun, India"
            course="Class XII"
            specialization="PCM with Computer Science"
            designation="Student"
            result="Percentage - 91.75%"
            educationLevel="School"
            yearOfStudy="2019 - 2020"
            reverse
          />
          <ExperienceCard
            instituteName="Carman Residential and Day School"
            location="Dehradun, India"
            course="Class X"
            specialization="PCM with Computer Science"
            result="Percentage - 85.2%"
            designation="Student"
            educationLevel="School"
            yearOfStudy="2017 - 2018"
            last
          />
        </Flex>
      </Flex>
      <Box className="absolute -left-52 -top-52 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default EducationSection;
