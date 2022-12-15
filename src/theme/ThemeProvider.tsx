import { MantineProvider } from '@mantine/core';
import { themeConfig } from './configs';
import GlobalStyle from './configs/GlobalsStyle';

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={themeConfig}>
      <GlobalStyle />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
