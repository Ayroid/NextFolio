import { BadgeCategory } from "@/app/components";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface Props {
  imageurl: StaticImageData;
  category: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

const BlogCard = ({
  imageurl,
  category,
  title,
  description,
  link,
  date,
}: Props) => {
  return (
    <Link href={link}>
      <Flex
        align="start"
        justify="center"
        direction={{
          initial: "column",
          md: "row",
        }}
        gap="6"
        className="top-light-shadow group min-h-96 w-full cursor-pointer rounded-2xl bg-neutral-900 p-8 transition-colors duration-300 ease-out hover:bg-neutral-800"
      >
        <Flex
          justify="center"
          align="center"
          className="overflow-hidden rounded-xl md:h-80 md:w-5/12"
        >
          <Image
            src={imageurl}
            alt="profile"
            className="w-full rounded-xl transition-transform duration-300 ease-out group-hover:scale-125 md:h-80"
          />
        </Flex>
        <Flex direction="column" gap="4" className="md:w-7/12">
          <Flex align="center" gap="5">
            <BadgeCategory color="#9b00ff" text={category} />
            <Text className="font-semibold">{date}</Text>
          </Flex>
          <Heading
            weight="medium"
            size={{
              initial: "7",
              md: "8",
            }}
          >
            {title}
          </Heading>
          <Text className="text-gray-accent text-lg">{description}</Text>
          <Text className="mt-4">
            Read More <IoIosArrowRoundForward className="inline" size="25" />
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default BlogCard;
