import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { LuSchool } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";

interface Props {
  instituteName: string;
  course: string;
  specialization: string;
  yearOfStudy: string;
  designation: string;
  location: string;
  result: string;
  educationLevel: "College" | "School";
  reverse?: boolean;
  last?: boolean;
}

const ExperienceCard = ({
  instituteName,
  course,
  specialization,
  yearOfStudy,
  designation,
  location,
  result,
  educationLevel,
  reverse = false,
  last = false,
}: Props) => {
  return (
    <Flex
      className={`h-[18rem] flex-col lg:flex-row ${reverse && "lg:flex-row-reverse"} mb-10 justify-start gap-5 align-top lg:mb-0 lg:justify-between lg:gap-0`}
    >
      <Flex
        direction="column"
        className={`order-2 h-fit lg:order-1 lg:w-[25rem]`}
      >
        <Heading
          size="6"
          className={`w-full text-left ${reverse ? "lg:text-left" : "lg:text-right"}`}
        >
          {yearOfStudy}
        </Heading>
        <Text
          size="3"
          className={`text-gray-accent w-full text-left font-semibold italic ${reverse ? "lg:text-left" : "lg:text-right"}`}
        >
          {designation}
        </Text>
      </Flex>
      <Flex
        justify="start"
        align="center"
        direction="column"
        position={{ initial: "absolute", md: "relative" }}
        className="-z-10 mx-[11.5rem] -mt-5 h-[21rem] lg:order-2 lg:mx-24 lg:mt-0 lg:h-full lg:w-auto"
      >
        <Box className="h-3 w-3 rounded-full bg-radix-accent" />
        {!last && <Separator orientation="vertical" size="4" />}
      </Flex>
      <Flex
        justify="between"
        align="start"
        direction="column"
        className="top-light-shadow order-3 h-56 w-[23rem] rounded-2xl bg-neutral-900 p-6 transition-colors duration-300 ease-out hover:bg-neutral-800 lg:order-3 lg:min-w-[25rem]"
      >
        <Flex direction="column">
          <Flex align="start" gap="4">
            {educationLevel == "College" ? (
              <FaUniversity className="inline size-9 md:size-12" />
            ) : (
              <LuSchool className="inline size-9 md:size-12" />
            )}
            <Heading size="5" className="inline">
              {instituteName},{" "}
              <Text size="3" className="text-gray-accent">
                {location}
              </Text>
            </Heading>
          </Flex>
          <Text mt="2" size="3" className="text-gray-accent">
            {course}
          </Text>
          <Text size="3" className="text-gray-accent italic">
            {specialization}
          </Text>
        </Flex>
        <Text size="3" className="text-gray-accent font-semibold italic">
          {result}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ExperienceCard;
