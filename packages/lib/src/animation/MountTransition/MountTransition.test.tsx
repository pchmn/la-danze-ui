import { MountTransition } from "@la-danze-ui/animation";
import { render, screen } from "@testing-library/react";
import React from "react";

describe('<MountTransition />', () => {

  const Container = () => {
    return (
      <MountTransition>
        Content
      </MountTransition>
    );
  };

  test('It should show content', async () => {
    render(<Container />);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
})
