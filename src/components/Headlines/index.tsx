import { Title, TitleProps } from '@mantine/core';
import { getMediaQueries } from '@/utils/UI';

interface HeadlinesProps {
  text: string;
  color?: string;
  upperCased?: boolean;
  otherProps?: TitleProps;
}

function Headlines({ text, color, otherProps, upperCased }: HeadlinesProps) {
  const { lg } = getMediaQueries();
  return (
    <Title
      lh={1.1}
      weight={700}
      color={color ? color : 'base.5'}
      size={lg ? 70 : 50}
      {...otherProps}
    >
      {upperCased ? text.toLocaleUpperCase() : text}
    </Title>
  );
}

export default Headlines;
