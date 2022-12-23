import ThemeProvider from '@/theme/ThemeProvider';
import Layout from '@/components/Layout/MainLayout';
import HomePage from '@/pages/Home';
import { server } from '@/lib/mirage/config';

function App() {
  server.get('api/meals');
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
