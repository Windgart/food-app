import HeaderContent from '@/components/Header';
import FooterContent from '@/components/Footer';
import { AppShell, Header, Footer } from '@mantine/core';

interface MainLayoutProps {
  children: React.ReactElement;
}

const componentsConfig = {
  height: 130,
  px: 'xl',
  py: 'lg',
  bg: 'base.1',
  withBorder: false,
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppShell
      styles={{ main: { paddingTop: componentsConfig.height } }}
      header={
        <Header {...componentsConfig}>
          <HeaderContent />
        </Header>
      }
      footer={
        <Footer {...componentsConfig}>
          <FooterContent />
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
}

export default MainLayout;
