import Layout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero';
import Spotlights from '@/components/Spotlights';
import Process from '@/components/ProcessComponent';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Process />
      <Spotlights />
    </Layout>
  );
}

export default HomePage;
