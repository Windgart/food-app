import ThemeProvider from '@/theme/ThemeProvider';
import Layout from '@/components/Layout/MainLayout';
import { server } from '@/lib/mirage/config';
import Router from '@/router';

function App() {
  server.get('api/meals');
  return (
    <ThemeProvider>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
