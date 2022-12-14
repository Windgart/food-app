import MainLayout from './MainLayout';
import { render, screen } from '@testing-library/react';

describe('component renders', () => {
  test('sum test', () => {
    render(
      <MainLayout>
        <div>
          <p>hello</p>
        </div>
      </MainLayout>,
    );
    expect(screen.getByText('hello')).toBeDefined();
  });
});
