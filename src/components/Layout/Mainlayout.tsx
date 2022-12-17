import HeaderContent from '@/components/Header';
import FooterContent from '@/components/Footer';
import { AppShell, Header } from '@mantine/core';

interface MainLayoutProps {
  children: React.ReactElement;
}

const componentsConfig = {
  height: 125,
  px: 'xl',
  py: 'lg',
  bg: 'base.1',
  withBorder: false,
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppShell
      styles={{ main: { paddingTop: componentsConfig.height } }}
      padding={0}
      header={
        <Header {...componentsConfig}>
          <HeaderContent />
        </Header>
      }
    >
      {children}

      <FooterContent />
    </AppShell>
  );
}

export default MainLayout;
