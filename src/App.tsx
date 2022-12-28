import ThemeProvider from '@/theme/ThemeProvider';
import { server } from '@/lib/mirage/config';
import Router from '@/router';
import ContextProvider from './context';
import { ENDPOINTS } from './utils/constants';

function App() {
  server.get(`api/${ENDPOINTS.meals}`);
  server.get(`api/${ENDPOINTS.highRate}`);
  return (
    <ContextProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
