import { UnderDevelopmemt } from "@/app/components";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

const IndividualProjectPage = ({ params: { id } }: Props) => {
  return <UnderDevelopmemt />;
};

export const metadata: Metadata = {
  title: "Ayroid | Projects",
  description: "Explore Ayroid's projects.",
};

export default IndividualProjectPage;
