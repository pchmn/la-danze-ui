import { FlexItem } from '@la-danze-ui/core/components/FlexItem/FlexItem';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<FlexItem>', () => {
  const Container = ({ withProps }: { withProps?: boolean }) => {
    if (!withProps) {
      return <FlexItem data-testid="flexItem">flex item</FlexItem>;
    }
    return (
      <FlexItem
        data-testid="flexItem"
        order={2}
        flexGrow={1}
        flexShrink={1}
        flexBasis="fill"
        flex="auto"
        alignSelf="center"
      >
        flex item
      </FlexItem>
    );
  };

  const setUp = (withProps = false) => {
    const container = render(<Container withProps={withProps} />);
    const content = screen.getByText('flex item');
    const flexItem = screen.getByTestId('flexItem');
    return { content, flexItem, container };
  };

  test('It should not put default css', async () => {
    const { content, flexItem } = setUp();

    expect(content).toBeInTheDocument();
    expect(flexItem).not.toHaveStyleRule('order', '');
    expect(flexItem).not.toHaveStyleRule('flex-grow', '');
    expect(flexItem).not.toHaveStyleRule('flex-shrink', '');
    expect(flexItem).not.toHaveStyleRule('flex-basis', '');
    expect(flexItem).not.toHaveStyleRule('flex', '');
    expect(flexItem).not.toHaveStyleRule('align-self', '');
  });

  test('It should put css properties', async () => {
    const { content, flexItem } = setUp(true);

    expect(content).toBeInTheDocument();
    expect(flexItem).toHaveStyleRule('order', '2');
    expect(flexItem).toHaveStyleRule('flex-grow', '1');
    expect(flexItem).toHaveStyleRule('flex-shrink', '1');
    expect(flexItem).toHaveStyleRule('flex-basis', 'fill');
    expect(flexItem).toHaveStyleRule('flex', 'auto');
    expect(flexItem).toHaveStyleRule('align-self', 'center');
  });
});
