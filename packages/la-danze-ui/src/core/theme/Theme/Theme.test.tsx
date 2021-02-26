import { Theme } from '@la-danze-ui/core/theme/Theme/Theme';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('<LaDanzeTheme />', () => {
  const Container = () => {
    return (
      <Theme>
        <div>hello</div>
      </Theme>
    );
  };

  test('It should render theme', async () => {
    render(<Container />);
    await waitFor(() => expect(screen.getByText('hello')).toBeInTheDocument());
  });
});
