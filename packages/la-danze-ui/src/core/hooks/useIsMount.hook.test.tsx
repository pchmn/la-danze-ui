import { useIsMount } from '@la-danze-ui/core/hooks/useIsMount.hook';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('useIsMount()', () => {
  const Container = () => {
    const isMount = useIsMount();
    return <div data-testid="isMount">{`${isMount}`}</div>;
  };

  test('It should render theme', async () => {
    render(<Container />);

    await waitFor(() => expect(screen.getByTestId('isMount')).toHaveTextContent('true'));
  });
});
