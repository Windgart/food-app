import HeaderContent from '@/components/Header';
import FooterContent from '@/components/Footer';
import { AppShell, Header, Footer } from '@mantine/core';

interface MainLayoutProps {
  children: React.ReactElement;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppShell
      header={
        <Header height={60} p='lg' bg='base.1' withBorder={false}>
          <HeaderContent />
        </Header>
      }
      footer={
        <Footer height={60} p='md' bg='base.1' withBorder={false}>
          <FooterContent />
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
}

export default MainLayout;
