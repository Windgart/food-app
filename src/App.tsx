import ThemeProvider from '@/theme/ThemeProvider';
import { server } from '@/lib/mirage/config';
import Router from '@/router';
import ContextProvider from './context';

function App() {
  server.get('api/meals');
  return (
    <ContextProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
