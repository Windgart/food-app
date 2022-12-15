import ThemeProvider from '@/theme/ThemeProvider';
import Layout from '@/components/Layout/MainLayout';
import HomePage from '@/pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
