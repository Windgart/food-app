import { MantineProvider } from '@mantine/core';

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
