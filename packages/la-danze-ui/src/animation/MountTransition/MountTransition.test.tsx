import { MountTransition } from '@la-danze-ui/animation/MountTransition/MountTransition';
import { render, screen } from '@testing-library/react';
import React from 'react';

const variants = {
  initial: {
    opacity: 0
  },

  in: {
    opacity: 1
  },

  out: {
    opacity: 0
  }
};

describe('<MountTransition />', () => {
  const Container = () => {
    return (
      <>
        <MountTransition>
          <div>content without props</div>
        </MountTransition>
        <MountTransition animationType="fade">
          <div>content fade</div>
        </MountTransition>
        <MountTransition animationType="scale">
          <div>content scale</div>
        </MountTransition>
        <MountTransition animationType="slideUp">
          <div>content slideUp</div>
        </MountTransition>
        <MountTransition animationType="slideDown">
          <div>content slideDown</div>
        </MountTransition>
        <MountTransition animationType="slideLeft">
          <div>content slideLeft</div>
        </MountTransition>
        <MountTransition animationType="slideRight">
          <div>content slideRight</div>
        </MountTransition>
        <MountTransition variants={variants} fullHeight={true}>
          <div>content variants</div>
        </MountTransition>
      </>
    );
  };

  test('It should show content', async () => {
    render(<Container />);

    expect(screen.getByText('content without props')).toBeInTheDocument();
    expect(screen.getByText('content fade')).toBeInTheDocument();
    expect(screen.getByText('content scale')).toBeInTheDocument();
    expect(screen.getByText('content slideUp')).toBeInTheDocument();
    expect(screen.getByText('content slideDown')).toBeInTheDocument();
    expect(screen.getByText('content slideLeft')).toBeInTheDocument();
    expect(screen.getByText('content slideRight')).toBeInTheDocument();
    expect(screen.getByText('content variants')).toBeInTheDocument();
  });
});
