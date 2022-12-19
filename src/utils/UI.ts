import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

export const getMediaQueries = () => {
  const { breakpoints } = useMantineTheme();
  const breakpointsValues = {
    xl: useMediaQuery(`(min-width: ${breakpoints.xl}px)`),
    lg: useMediaQuery(`(min-width: ${breakpoints.lg}px)`),
    md: useMediaQuery(`(min-width: ${breakpoints.md}px)`),
    sm: useMediaQuery(`(min-width: ${breakpoints.sm}px)`),
    xs: useMediaQuery(`(min-width: ${breakpoints.xs}px)`),
  };

  return breakpointsValues;
};
