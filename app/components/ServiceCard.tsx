import { Flex, Box, Heading, Text } from "@radix-ui/themes";
import { IoCodeSlash } from "react-icons/io5";

interface Props {
  text: string;
  color: string;
}

const ServiceCard = () => {
  return (
    <Flex
      direction="column"
      align="start"
      justify="start"
      className="bg-neutral-900 w-96 min-h-72 rounded-2xl top-light-shadow p-8"
    >
      <Box className="rounded-full bg-neutral-950 p-4 top-light-shadow">
        <IoCodeSlash color="#9b00ff" size="40" />
      </Box>
      <Heading mt="4" size="8">
        Service 1
      </Heading>
      <Text className="text-gray-400 my-2 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem, voluptatibus, iusto quia incidunt
      </Text>
    </Flex>
  );
};

export default ServiceCard;
