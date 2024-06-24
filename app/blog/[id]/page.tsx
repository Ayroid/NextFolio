import { UnderDevelopmemt } from "@/app/components";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

const IndividualBlogPage = ({ params: { id } }: Props) => {
  return <UnderDevelopmemt />;
};

export const metadata: Metadata = {
  title: "Ayroid | Blogs",
  description: "Read Ayroid's articles and blogs.",
};

export default IndividualBlogPage;
