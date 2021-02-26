import { Drawer } from '@la-danze-ui/core/drawer/Drawer/Drawer';
import { DrawerListItem } from '@la-danze-ui/core/drawer/DrawerListItem/DrawerListItem';
import { DrawerContainer, DrawerTemplate, MainContainer } from '@la-danze-ui/core/drawer/DrawerTemplate/DrawerTemplate';
import { Theme } from '@la-danze-ui/core/theme/Theme/Theme';
import { mockMediaQueries, renderWithRouter, RouteContainer } from '@la-danze-ui/testing/testing.utils';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { useOpenDrawer } from '../hooks/useOpenDrawer.hook';

describe('<DrawerListItem />', () => {
  const Container = ({
    theme = true,
    drawer = true,
    onClick,
    onActive
  }: {
    theme?: boolean;
    onClick: () => void;
    onActive: (active: boolean) => void;
    drawer?: boolean;
  }) => {
    const [open, setOpen] = useOpenDrawer();

    const content = () => {
      if (theme && drawer) {
        return (
          <DrawerTemplate>
            <DrawerContainer>
              <Drawer logo="logo" title="title">
                {drawerContent}
              </Drawer>
            </DrawerContainer>
            <MainContainer>
              <Switch>
                <Route exact path="/">
                  <RouteContainer routeName="home" />
                </Route>
                <Route path="/route1">
                  <RouteContainer routeName="route 1" />
                </Route>
              </Switch>
              <span data-testid="drawerOpenStatus">{open ? 'open' : 'close'}</span>
            </MainContainer>
          </DrawerTemplate>
        );
      }
      return <>{drawerContent}</>;
    };

    const drawerContent = (
      <>
        <Button onClick={() => setOpen(!open)}>toggle drawer</Button>
        <DrawerListItem to="/" exact title="Go to home tooltip" onClick={onClick} onActive={onActive}>
          <ListItemText primary="Go to home" />
        </DrawerListItem>
        <DrawerListItem to="/route1" title="Go to route 1 tooltip">
          <ListItemText primary="Go to route 1" />
        </DrawerListItem>
      </>
    );

    return <>{theme ? <Theme>{content()}</Theme> : content()}</>;
  };

  const setUp = ({ route, ...props }: { route?: string; theme?: boolean; drawer?: boolean }) => {
    const onClick = jest.fn();
    const onActive = jest.fn();
    const container = renderWithRouter(<Container {...props} onClick={onClick} onActive={onActive} />, { route });
    const toggleDrawerButton = screen.getByText('toggle drawer');
    const homeItem = screen.getByText('Go to home');
    const homeLink = screen.getByText('Go to home').closest('a');
    const route1Link = screen.getByText('Go to route 1').closest('a');
    const drawerOpenStatus = screen.getByTestId('drawerOpenStatus');
    const routeName = screen.getByTestId('routeName');
    const homeLinkTooltip = () => screen.queryByText('Go to home tooltip');
    invariant(homeLink, 'Error render');
    invariant(route1Link, 'Error render');

    return {
      homeLink,
      route1Link,
      routeName,
      onClick,
      onActive,
      drawerOpenStatus,
      homeLinkTooltip,
      homeItem,
      toggleDrawerButton,
      container
    };
  };

  test('It should sthrow an Error if used outside <Theme>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(
      `Invariant failed: You can't use <DrawerListItem> outside <Theme> or material-ui <Theme.Provider>`
    );
    expect(() => setUp({ theme: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should sthrow an Error if used outside <Drawer>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(`Invariant failed: You can't use <DrawerListItem> outside <Drawer>`);
    expect(() => setUp({ drawer: false })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should show links', async () => {
    const { homeLink, route1Link } = setUp({});

    expect(homeLink).toHaveTextContent('Go to home');
    expect(route1Link).toHaveTextContent('Go to route 1');
  });

  test('It should be on home route and onActive should have been called at launch', async () => {
    const { routeName, homeLink, onActive } = setUp({});

    await waitFor(() => {
      expect(routeName).toHaveTextContent('home');
      expect(homeLink).toHaveClass('active');
      expect(onActive).toHaveBeenCalledWith(true);
    });
  });

  test('It should not call onActive and onClick (props not specified)', async () => {
    const { route1Link, routeName } = setUp({});

    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(routeName).toHaveTextContent('route 1');
      expect(route1Link).toHaveClass('active');
    });
  });

  test('It should call onClick event', async () => {
    const { routeName, homeLink, onClick } = setUp({});

    fireEvent.click(homeLink);

    await waitFor(() => {
      expect(routeName).toHaveTextContent('home');
      expect(homeLink).toHaveClass('active');
      expect(onClick).toHaveBeenCalled();
    });
  });

  test('It should tooltips on hover only when drawer is closed', async () => {
    const { homeItem, homeLinkTooltip } = setUp({});

    await waitFor(() => expect(homeLinkTooltip()).toBeNull());

    fireEvent.mouseOver(homeItem);

    await waitFor(() => expect(homeLinkTooltip()).toBeVisible());
  });

  test('It should not show tooltips on hover when drawer is open', async () => {
    const { homeItem, homeLinkTooltip, toggleDrawerButton } = setUp({});

    // Open drawer
    fireEvent.click(toggleDrawerButton);

    fireEvent.mouseOver(homeItem);

    await waitFor(() => expect(homeLinkTooltip()).toBeNull());

    // Close drawer for next tests
    fireEvent.click(toggleDrawerButton);
  });

  test('It should close drawer when clicking on it (mobile)', async () => {
    mockMediaQueries('downMd');
    const { homeLink, drawerOpenStatus } = setUp({});

    fireEvent.click(homeLink);

    await waitFor(() => expect(drawerOpenStatus).toHaveTextContent('close'));
  });
});
