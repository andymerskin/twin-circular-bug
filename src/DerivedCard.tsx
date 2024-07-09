import 'twin.macro';
import Card from './Card';

type Props = {};

const DerivedCard = ({ ...props }: Props) => {
  return <Card {...props}>Hello World</Card>;
};

export default DerivedCard;
