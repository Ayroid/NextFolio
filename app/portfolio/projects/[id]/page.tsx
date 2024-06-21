import { UnderDevelopmemt } from "@/app/components";

interface Props {
  params: {
    id: string;
  };
}

const IndividualProjectPage = ({ params: { id } }: Props) => {
  return <UnderDevelopmemt />;
};

export default IndividualProjectPage;
