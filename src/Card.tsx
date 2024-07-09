import tw, { styled } from 'twin.macro';
import { ReactNode } from 'react';

const Container = styled.div``;

const cardStyles = [tw`p-10 bg-black-ls`];

type Props = {
  children: ReactNode;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Card = ({ children, contentProps, ...props }: Props) => {
  return (
    <Container {...props} css={[cardStyles]}>
      <div tw="text-caption uppercase font-bold tracking-widest">Heading</div>
      <div tw="mt-3" {...contentProps} css={[contentProps?.css]}>
        {children}
      </div>
    </Container>
  );
};

export default Card;
