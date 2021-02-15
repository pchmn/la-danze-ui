import { AnimateLink, AnimateRoute, AnimateSwitch, useAnimationKey } from "@la-danze-ui/animation";
import { renderWithRouter } from "@la-danze-ui/testing/testing.utils";
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from "react";

describe('<AnimateRoute />', () => {

  const Container = ({ onClick, safeOnClick }: { onClick: () => void, safeOnClick: () => void }) => {
    const animationKey = useAnimationKey();
    return (
      <div>
        <AnimateLink to="/" animationKey={animationKey} onClick={onClick} safeOnClick={safeOnClick}>Go to Home</AnimateLink>
        <AnimateLink to="/route1" animationKey={animationKey} noRefresh onClick={onClick} safeOnClick={safeOnClick}>Go to Route 1</AnimateLink>

        <AnimateSwitch animationKey={animationKey}>
          <AnimateRoute exact path="/"><RouteContainer routeName="home" /></AnimateRoute>
          <AnimateRoute path="/route1"><RouteContainer routeName="route 1" /></AnimateRoute>
        </AnimateSwitch>

        <span data-testid="animationKey">{animationKey.key}</span>
      </div>
    );
  };

  const RouteContainer = ({ routeName }: { routeName: string }) => {
    return (
      <div>
        <span data-testid="routeName">{routeName}</span>
      </div>
    )
  };

  const setUp = (route?: string) => {
    const onClick = jest.fn();
    const safeOnClick = jest.fn();
    const container = renderWithRouter(<Container onClick={onClick} safeOnClick={safeOnClick} />, { route });
    const homeLink = screen.getByText('Go to Home');
    const route1Link = screen.getByText('Go to Route 1');
    const getRouteName = () => screen.getByTestId('routeName');
    const getAnimationKey = () => screen.getByTestId('animationKey');

    return { homeLink, route1Link, getRouteName, getAnimationKey, onClick, safeOnClick, ...container };
  };

  test('It should redirect to route 1 and update animation key', async () => {
    const { getRouteName, getAnimationKey, route1Link } = setUp();

    const prevAnimationKey = getAnimationKey().textContent;
    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(getRouteName()).toHaveTextContent('route 1');
      expect(getAnimationKey().textContent).not.toBe(prevAnimationKey);
      expect(route1Link).toHaveClass('active');
    })
  });

  test('It should update animation key (refresh)', async () => {
    const { getRouteName, getAnimationKey, homeLink } = setUp();

    const prevAnimationKey = getAnimationKey().textContent;
    fireEvent.click(homeLink);

    await waitFor(() => {
      expect(getRouteName()).toHaveTextContent('home');
      expect(getAnimationKey().textContent).not.toBe(prevAnimationKey);
      expect(homeLink).toHaveClass('active');
    })
  });

  test('It should not upate animation key (noRefresh)', async () => {
    const { getRouteName, getAnimationKey, route1Link } = setUp('/route1');

    const prevAnimationKey = getAnimationKey().textContent;
    fireEvent.click(route1Link);

    await waitFor(() => {
      expect(getRouteName()).toHaveTextContent('route 1');
      expect(getAnimationKey().textContent).toBe(prevAnimationKey);
    })
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

});

