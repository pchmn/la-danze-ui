import { Accordion } from '@la-danze-ui/core/components/Accordion/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('<Accordion>', () => {
  const Container = ({ withProps }: { withProps?: boolean }) => {
    if (!withProps) {
      return (
        <Accordion data-testid="accordion">
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            Panel
          </AccordionSummary>
          <AccordionDetails>Panel content</AccordionDetails>
        </Accordion>
      );
    }
    return (
      <Accordion data-testid="accordion" direction="up">
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Panel
        </AccordionSummary>
        <AccordionDetails>Panel content</AccordionDetails>
      </Accordion>
    );
  };

  const setUp = (withProps = false) => {
    const container = render(<Container withProps={withProps} />);
    const panel = screen.getByText('Panel');
    const panelContent = screen.queryByText('Panel content');
    const accordion = screen.getByTestId('accordion');
    return { panel, panelContent, accordion, container };
  };

  test('It should expand panel (no direction)', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const { panel, panelContent } = setUp();

    expect(panel).toBeInTheDocument();
    expect(panelContent).not.toBeVisible();

    fireEvent.click(panel);

    await waitFor(() => expect(panelContent).toBeVisible());

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should expand panel (direction=up)', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const { panel, panelContent } = setUp(true);

    expect(panel).toBeInTheDocument();
    expect(panelContent).not.toBeVisible();

    fireEvent.click(panel);

    await waitFor(() => expect(panelContent).toBeVisible());

    // Restore writing to stderr.
    console.error = err;
  });
});
