import { FlexLayout } from '@la-danze-ui/core/components/FlexLayout/FlexLayout';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<FlexLayout>', () => {
  const Container = ({withProps}:{withProps?: boolean}) => {
    if (!withProps) {
      return <FlexLayout data-testid="flexLayout">flex layout</FlexLayout>
    }
    return (
      <FlexLayout data-testid="flexLayout" flexDirection="column" flexWrap="wrap" flexFlow="column wrap" justifyContent="center" alignItems="center" alignContent="center" fullHeight>
        flex layout
      </FlexLayout>
    )
  };

  const setUp = (withProps = false) => {
    const container = render(<Container withProps={withProps} />);
    const content = screen.getByText('flex layout');
    const flexLayout = screen.getByTestId('flexLayout')
    return { content, flexLayout, container };
  };

  test('It should not put default css', async () => {
    const { content, flexLayout } = setUp();

    expect(content).toBeInTheDocument();
    expect(flexLayout).not.toHaveStyleRule('flex-direction', '');
    expect(flexLayout).not.toHaveStyleRule('flex-wrap', '');
    expect(flexLayout).not.toHaveStyleRule('flex-flow', '');
    expect(flexLayout).not.toHaveStyleRule('justify-content', '');
    expect(flexLayout).not.toHaveStyleRule('align-items', '');
    expect(flexLayout).not.toHaveStyleRule('align-content', '');
    expect(flexLayout).not.toHaveStyleRule('height', '');
  });

  test('It should put css properties', async () => {
    const { content, flexLayout } = setUp(true);

    expect(content).toBeInTheDocument();
    expect(flexLayout).toHaveStyleRule('flex-direction', 'column');
    expect(flexLayout).toHaveStyleRule('flex-wrap', 'wrap');
    expect(flexLayout).toHaveStyleRule('flex-flow', 'column wrap');
    expect(flexLayout).toHaveStyleRule('justify-content', 'center');
    expect(flexLayout).toHaveStyleRule('align-items', 'center');
    expect(flexLayout).toHaveStyleRule('align-content', 'center');
    expect(flexLayout).toHaveStyleRule('height', '100%');
  });

});
