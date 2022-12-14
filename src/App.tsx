import ThemeProvider from '@/theme/ThemeProvider';
import Layout from '@/components/Layout/MainLayout';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div>content</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
