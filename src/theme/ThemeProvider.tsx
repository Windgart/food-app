import { MantineProvider } from '@mantine/core';
import { themeConfig } from './configs';
import GlobalStyle from './configs/GlobalsStyle';
import { NotificationsProvider } from '@mantine/notifications';

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={themeConfig}>
      <GlobalStyle />
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
};

export default ThemeProvider;
