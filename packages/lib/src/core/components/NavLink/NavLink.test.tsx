import { NavLink } from "@la-danze-ui/core";
import { renderWithRouter } from '@la-danze-ui/testing/testing.utils';
import { fireEvent, screen, waitFor } from "@testing-library/react";
import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

describe('<NavLink />', () => {

  const Container = ({ onActive, safeOnClick, onClick }: { onActive: () => void, safeOnClick: () => void, onClick: () => void }) => {
    const [active, setActive] = useState(true);

    const isActive = (_match: any | null, location: any) => {
      return location.search === '?active=true';
    }

    return (
      <div>
        <NavLink to="/" exact safeOnClick={safeOnClick} onClick={onClick}>Go to Home</NavLink>
        <NavLink to="/route1" noRefresh safeOnClick={safeOnClick} onClick={onClick}>Go to Route 1</NavLink>
        <NavLink to={`/route2?active=${active}`} onClick={() => setActive(!active)} isActive={isActive} onActive={onActive}>Go to Route 2</NavLink>

        <Switch>
          <Route exact path="/"><RouteContainer routeName="home" /></Route>
          <Route path="/route1"><RouteContainer routeName="route 1" /></Route>
        </Switch>
      </div>
    );
  };

  const RouteContainer = ({ routeName }: { routeName: string }) => {
    const location = useLocation();
    return (
      <div>
        <span data-testid="routeName">{routeName}</span>
        <span data-testid="initId">{location.key}</span>
      </div>
    )
  };

  const setUp = (route?: string) => {
    const onActive = jest.fn();
    const safeOnClick = jest.fn();
    const onClick = jest.fn();

    const container = renderWithRouter(<Container onActive={onActive} safeOnClick={safeOnClick} onClick={onClick} />, { route });
    const homeLink = screen.getByText('Go to Home');
    const route1Link = screen.getByText('Go to Route 1');
    const route2Link = screen.getByText('Go to Route 2');
    const getRouteName = () => screen.getByTestId('routeName');
    const getInitId = () => screen.getByTestId('initId');

    return { homeLink, route1Link, route2Link, getRouteName, getInitId, onActive, safeOnClick, onClick, ...container };
  };

  test('It should be on route home at launch', async () => {
    const { getRouteName, homeLink } = setUp();

    expect(getRouteName()).toHaveTextContent('home');
    expect(homeLink).toHaveClass('active');
  });

  test('It should redirect to route 1', async () => {
    const { getRouteName, route1Link } = setUp();

    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(getRouteName()).toHaveTextContent('route 1');
      expect(route1Link).toHaveClass('active');
    });
  });

  test('It should call safeOnClick and onClick (route change)', async () => {
    const { route1Link, safeOnClick, onClick } = setUp();

    // home => route1
    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(safeOnClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalled();
    });
  });

  test('It should call onClick but not safeOnClick (noRefresh and no route change)', async () => {
    const { route1Link, safeOnClick, onClick } = setUp('/route1');

    // route1 => route1
    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(safeOnClick).not.toHaveBeenCalled();
      expect(onClick).toHaveBeenCalled();
    });
  });

  test('It should call onClick and safeOnClick (noRefresh=false and no route change)', async () => {
    const { homeLink, safeOnClick, onClick } = setUp();

    // home => home
    fireEvent.click(homeLink);

    await waitFor(() => {
      expect(safeOnClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalled();
    });
  });

  test('It should use isActive prop', async () => {
    const { route2Link } = setUp();

    // First click: /route2?active=true
    fireEvent.click(route2Link);
    await waitFor(() => {
      expect(route2Link).toHaveClass('active');
    });

    // Second click: /route2?active=false
    fireEvent.click(route2Link);
    await waitFor(() => {
      expect(route2Link).not.toHaveClass('active');
    });
  });

  test('It should call onActive', async () => {
    const { route2Link, route1Link, onActive } = setUp();

    // onActive call at launch: / => inactive
    expect(onActive).toHaveBeenCalledWith(false);

    // First click: /route2?active=true
    // Link is active, so onActive (2nd call) should have been called with active = true
    fireEvent.click(route2Link);
    await waitFor(() => {
      expect(onActive.mock.calls[1][0]).toBeTruthy();
    });

    // Second click: /route2?active=false
    // Link is inactive, so onActive (3rd call) should have been called with active = false
    fireEvent.click(route2Link);
    await waitFor(() => {
      expect(onActive.mock.calls[2][0]).toBeFalsy();
    });

    // Third click: /route1
    // Link is still inactive, so onActive shouldn't have been called a 4th times
    fireEvent.click(route1Link);
    await waitFor(() => {
      expect(onActive.mock.calls.length).toBe(3);
    });
  });

  test('It should not refresh (noRefresh prop) current route (if route 1)', async () => {
    const { getRouteName, route1Link, getInitId } = setUp('/route1');

    expect(getRouteName()).toHaveTextContent('route 1');
    const prevInitId = getInitId().textContent + '';

    fireEvent.click(route1Link);
    await waitFor(() => expect(getInitId()).toHaveTextContent(prevInitId));
  });

  test('It should refresh current route (if route home)', async () => {
    const { getRouteName, homeLink, getInitId } = setUp();

    expect(getRouteName()).toHaveTextContent('home');
    const prevInitId = getInitId().textContent + '';

    fireEvent.click(homeLink);
    await waitFor(() => expect(getInitId()).not.toHaveTextContent(prevInitId));
  });
})