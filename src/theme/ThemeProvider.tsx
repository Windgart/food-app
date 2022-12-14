import { MantineProvider } from '@mantine/core';
import { themeConfig } from './configs';

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={themeConfig}>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
