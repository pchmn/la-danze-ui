import { AnimateRoute } from '@la-danze-ui/animation/AnimateRoute/AnimateRoute';
import { AnimateSwitch } from '@la-danze-ui/animation/AnimateSwitch/AnimateSwitch';
import { renderWithRouter, RouteContainer } from '@la-danze-ui/testing/testing.utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

describe('<AnimateSwitch />', () => {
  const Container = ({
    setLocation = false,
    setOtherDiv = false
  }: {
    setLocation?: boolean;
    setOtherDiv?: boolean;
  }) => {
    const location = useLocation();
    return (
      <div>
        <Link to="/">Go to Home</Link>
        <Link to="/route1">Go to Route 1</Link>

        {setOtherDiv ? (
          <AnimateSwitch location={setLocation ? location : undefined}>
            <AnimateRoute exact path="/">
              <RouteContainer routeName="home" />
            </AnimateRoute>
            <AnimateRoute path="/route1">
              <RouteContainer routeName="route 1" />
            </AnimateRoute>
            <div></div>
          </AnimateSwitch>
        ) : (
          <AnimateSwitch location={setLocation ? location : undefined}>
            <AnimateRoute exact path="/">
              <RouteContainer routeName="home" />
            </AnimateRoute>
            <AnimateRoute path="/route1">
              <RouteContainer routeName="route 1" />
            </AnimateRoute>
          </AnimateSwitch>
        )}
      </div>
    );
  };

  const setUp = ({ route, ...props }: { route?: string; setLocation?: boolean; setOtherDiv?: boolean }) => {
    const container = renderWithRouter(<Container {...props} />, { route });
    const homeLink = screen.getByText('Go to Home');
    const route1Link = screen.getByText('Go to Route 1');
    const getRouteName = () => screen.getByTestId('routeName');

    return { homeLink, route1Link, getRouteName, ...container };
  };

  test('It should throw an Error if <AnimateSwitch> contains element other than <AnimateRoute>', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error(`Invariant failed: You can't use other element than <AnimateRoute> in <AnimateSwitch>`);
    expect(() => setUp({ setLocation: true, setOtherDiv: true })).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should be on route home at launch', async () => {
    const { getRouteName } = setUp({});

    expect(getRouteName()).toHaveTextContent('home');
  });

  test('It should be on route 1 at launch', async () => {
    const { getRouteName } = setUp({ route: '/route1' });

    expect(getRouteName()).toHaveTextContent('route 1');
  });

  test('It should redirect to route 1', async () => {
    const { route1Link, getRouteName } = setUp({});

    fireEvent.click(route1Link);

    await waitFor(() => expect(getRouteName()).toHaveTextContent('route 1'));
  });

  test('It should redirect to home', async () => {
    const { homeLink, getRouteName } = setUp({ route: '/route1' });

    fireEvent.click(homeLink);

    await waitFor(() => expect(getRouteName()).toHaveTextContent('home'));
  });
});
