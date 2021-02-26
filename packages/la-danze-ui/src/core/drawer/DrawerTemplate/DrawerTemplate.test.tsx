import { Theme } from '@la-danze-ui/core/theme/Theme';
import { mockMediaQueries } from '@la-danze-ui/testing/testing.utils';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { DrawerContainer, DrawerTemplate, MainContainer } from './DrawerTemplate';

describe('<DrawerTemplate />', () => {
  const Container = ({
    theme = true,
    drawer = true,
    main = true,
    otherDiv = false
  }: {
    theme?: boolean;
    drawer?: boolean;
    main?: boolean;
    otherDiv?: boolean;
  }) => {
    function drawerTemplate() {
      return (
        <DrawerTemplate>
          {drawer && <DrawerContainer>drawer</DrawerContainer>}

          {main && <MainContainer>main</MainContainer>}

          {otherDiv && <div>other div</div>}
        </DrawerTemplate>
      );
    }

    return <>{theme ? <Theme>{drawerTemplate()}</Theme> : drawerTemplate()}</>;
  };

  const setUp = ({
    theme = true,
    drawer = true,
    main = true,
    otherDiv = false
  }: {
    theme?: boolean;
    drawer?: boolean;
    main?: boolean;
    otherDiv?: boolean;
  }) => {
    const container = render(<Container theme={theme} drawer={drawer} main={main} otherDiv={otherDiv} />);
    const drawerContainer = screen.getByText('drawer');
    const mainContainer = screen.getByText('main');
    const toolBar = () => screen.getByLabelText('mobile toolbar');

    return { drawerContainer, mainContainer, toolBar, ...container };
  };

  test('It should throw an error if <DrawerTemplate> is outside <Theme.Provider>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(
      `Invariant failed: You can't use <DrawerTemplate> outside <Theme> or material-ui <Theme.Provider>`
    );
    expect(() => setUp({ theme: false })).toThrow(error);

    // Restore writing to stderr
    console.error = err;
  });

  test('It should throw an error if <DrawerTemplate> contains other children than <DrawerContainer> and <MainContainer>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(
      `Invariant failed: <DrawerTemplate> can only have <DrawerContainer> and <MainContainer> as children`
    );

    expect(() => setUp({ otherDiv: true })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should throw an error if <DrawerTemplate> does not contain <DrawerContainer>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(`Invariant failed: <DrawerTemplate> must contains a <DrawerContainer>`);
    expect(() => setUp({ drawer: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should throw an error if <DrawerTemplate> does not contain <MainContainer>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(`Invariant failed: <DrawerTemplate> must contains a <MainContainer>`);
    expect(() => setUp({ main: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should show <DrawerContainer> and <MainContainer> contents', async () => {
    const { drawerContainer, mainContainer } = setUp({});

    await waitFor(() => {
      expect(drawerContainer).toHaveTextContent('drawer');

      expect(mainContainer).toHaveTextContent('main');
    });
  });

  test('It should show <DrawerContainer> and <MainContainer> contents and toolbar (mobile)', async () => {
    mockMediaQueries('downMd');

    const { toolBar } = setUp({});

    await waitFor(() => expect(toolBar()).toBeInTheDocument());
  });
});
