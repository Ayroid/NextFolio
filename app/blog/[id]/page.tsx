import { Container } from "@radix-ui/themes";

interface Props {
  params: {
    id: string;
  };
}

const IndividualBlogPage = ({ params: { id } }: Props) => {
  return <Container>{id}</Container>;
};

export default IndividualBlogPage;
