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
        <Header height={60} p='md'>
          <HeaderContent />
        </Header>
      }
      footer={
        <Footer height={60} p='md'>
          <FooterContent />
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
}

export default MainLayout;
