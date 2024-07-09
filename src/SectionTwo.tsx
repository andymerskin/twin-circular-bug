import tw from 'twin.macro';
import DerivedCard from './DerivedCard';

type Props = {};

const SectionTwo = ({}: Props) => {
  return (
    <div>
      <DerivedCard
        tw='bg-cyan'
        contentProps={{
          css: [tw`w-80 bg-cyan-dark`],
        }}
      />
    </div>
  );
};

export default SectionTwo;
