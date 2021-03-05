import { Drawer } from '@la-danze-ui/core/drawer/Drawer/Drawer';
import { DrawerContainer, DrawerTemplate, MainContainer } from '@la-danze-ui/core/drawer/DrawerTemplate/DrawerTemplate';
import { Theme } from '@la-danze-ui/core/theme/Theme/Theme';
import { mockMediaQueries } from '@la-danze-ui/testing/testing.utils';
// eslint-disable-next-line prettier/prettier
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('<Drawer />', () => {
  const Container = ({ theme = true, drawerContainer = true, onLogoClick }: { theme?: boolean; drawerContainer?: boolean; onLogoClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
    function drawer() {
      return (
        <Drawer logo="logo" title="Drawer" onLogoClick={onLogoClick}>
          drawer content
        </Drawer>
      );
    }

    function drawerTemplate() {
      return (
        <>
          {drawerContainer ? (
            <DrawerTemplate>
              <DrawerContainer>{drawer()}</DrawerContainer>
              <MainContainer>main content</MainContainer>
            </DrawerTemplate>
          ) : (
            drawer()
          )}
        </>
      );
    }

    return <>{theme ? <Theme>{drawerTemplate()}</Theme> : drawer()}</>;
  };

  const setUp = (props: { theme?: boolean; drawerContainer?: boolean, onLogoClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
    const container = render(<Container {...props} />);
    const mainContent = () => screen.getByText('main content');
    const drawerContent = () => screen.getByText('drawer content');
    const drawer = () => screen.getByLabelText('drawer');
    const toggleDrawerButton = () => screen.getByLabelText('toggle drawer');
    const toggleMobileDrawerButton = () => screen.getByLabelText('toggle mobile drawer');
    const logo = () => screen.getByAltText('logo');

    return { mainContent, drawerContent, drawer, toggleDrawerButton, toggleMobileDrawerButton, logo, container };
  };

  test('It should throw an error if <Drawer> is outside <LaDanzeTheme>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(
      `Invariant failed: You can't use <Drawer> outside <LaDanzeTheme> or material-ui <Theme.Provider>`
    );
    expect(() => setUp({ theme: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should throw an error if <Drawer> outside a <DrawerContainer>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(`Invariant failed: You can't use <Drawer> outside a <DrawerContainer>`);
    expect(() => setUp({ theme: true, drawerContainer: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should show drawer and main contents', async () => {
    const { drawerContent, mainContent } = setUp({});

    await waitFor(() => {
      expect(drawerContent()).toBeVisible();
      expect(mainContent()).toBeVisible();
    });
  });

  test('It should call onLogoClick method', async () => {
    const onLogoClick = jest.fn();
    const { logo } = setUp({onLogoClick});

    fireEvent.click(logo());

    await waitFor(() => {
      expect(onLogoClick).toHaveBeenCalled();
    });
  });

  test('It should work if no onLogoClick prop set', async () => {
    const { logo } = setUp({});

    fireEvent.click(logo());
  });

  test('It should open drawer', async () => {
    const { drawer, toggleDrawerButton } = setUp({});

    await waitFor(() => expect(drawer()).toHaveClassContains('drawerClose'));

    fireEvent.click(toggleDrawerButton());

    await waitFor(() => expect(drawer()).toHaveClassContains('drawerOpen'));

    // Close drawer for next tests
    fireEvent.click(toggleDrawerButton());
  });

  test('It should only show main content (mobile)', async () => {
    mockMediaQueries('downMd');
    const { drawerContent, mainContent } = setUp({});

    await waitFor(() => {
      expect(drawerContent()).not.toBeVisible();
      expect(mainContent()).toBeVisible();
    });
  });

  test('It should open drawer and show its content (mobile)', async () => {
    mockMediaQueries('downMd');
    const { drawer, toggleMobileDrawerButton, drawerContent } = setUp({});

    await waitFor(() => {
      expect(drawerContent()).not.toBeVisible();
      expect(drawer()).toHaveClassContains('drawerClose');
    });

    fireEvent.click(toggleMobileDrawerButton());

    await waitFor(() => {
      expect(drawer()).toHaveClassContains('drawerOpen');
      expect(drawerContent()).toBeVisible();
    });
  });
});
