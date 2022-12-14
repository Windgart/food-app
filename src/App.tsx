import ThemeProvider from '@/theme/ThemeProvider';
import MainLayout from '@/components/Layout/Mainlayout';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <div>content</div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
