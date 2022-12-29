import Layout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero';
import Spotlights from '@/components/Spotlights';
import Process from '@/components/ProcessComponent';
import { Flex } from '@mantine/core';

function HomePage() {
  return (
    <Layout>
      <Flex bg='secondary.2' direction='column' align='center'>
        <Hero />
        <Process />
        <Spotlights />
      </Flex>
    </Layout>
  );
}

export default HomePage;
