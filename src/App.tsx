import ThemeProvider from '@/theme/ThemeProvider';
import Layout from '@/components/Layout/MainLayout';
import { server } from '@/lib/mirage/config';
import Router from '@/router';
import ContextProvider from './context';

function App() {
  server.get('api/meals');
  return (
    <ContextProvider>
      <ThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
