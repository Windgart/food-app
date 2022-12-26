import MainLayout from './MainLayout';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '@/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

// Need to mock matchMedia for Mantine components

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('component renders', () => {
  test('sum test', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <MainLayout>
            <div>hello</div>
          </MainLayout>
        </ThemeProvider>
      </BrowserRouter>,
    );
    expect(screen.getByText('hello')).toBeDefined();
  });
});
