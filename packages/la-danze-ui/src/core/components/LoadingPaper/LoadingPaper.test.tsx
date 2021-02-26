import { LoadingPaper } from '@la-danze-ui/core/components/LoadingPaper/LoadingPaper';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React, { useState } from 'react';

describe('useIsMount()', () => {
  const Container = () => {
    const [pending, setPending] = useState(false);
    return (
      <>
        <button onClick={() => setPending(!pending)}>toggle pending</button>
        <LoadingPaper pending={pending}>paper content</LoadingPaper>
      </>
    );
  };

  const setUp = () => {
    const container = render(<Container />);
    const toggleButton = screen.getByText('toggle pending');
    const content = screen.getByText('paper content');
    const progress = () => screen.queryByLabelText('progress');
    return { toggleButton, content, progress, container };
  };

  test('It should show paper content and no progress (pending = false)', async () => {
    const { content, progress } = setUp();
    await waitFor(() => {
      expect(content).toBeInTheDocument();
      expect(progress()).toBeNull();
    });
  });

  test('It should show progress if pending', async () => {
    const { content, progress, toggleButton } = setUp();
    // toggle pending
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(content).toBeInTheDocument();
      expect(progress()).toBeTruthy();
    });
  });
});
