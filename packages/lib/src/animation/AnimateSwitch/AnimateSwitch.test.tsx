import { AnimateRoute, AnimateSwitch } from "@la-danze-ui/animation";
import { renderWithRouter } from "@la-danze-ui/testing/testing.utils";
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from "react";
import { Link, Route } from "react-router-dom";

describe('<AnimateSwitch />', () => {
  const ExceptionContainer = () => {
    return (
      <div>
        <AnimateSwitch>
          <Route path="/">Exception</Route>
        </AnimateSwitch>
      </div>
    );
  };

  const Container = () => {
    return (
      <div>
        <Link to="/">Go to Home</Link>
        <Link to="/route1">Go to Route 1</Link>

        <AnimateSwitch>
          <AnimateRoute exact path="/"><RouteContainer routeName="home" /></AnimateRoute>
          <AnimateRoute path="/route1"><RouteContainer routeName="route 1" /></AnimateRoute>
        </AnimateSwitch>
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
    const container = renderWithRouter(<Container />, { route });
    const homeLink = screen.getByText('Go to Home');
    const route1Link = screen.getByText('Go to Route 1');
    const getRouteName = () => screen.getByTestId('routeName');

    return { homeLink, route1Link, getRouteName, ...container };
  };

  test('It should throw an error if children != AnimateRoute', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error('<AnimateSwitch /> can only be used with <AnimateRoute />');
    expect(() => renderWithRouter(<ExceptionContainer />)).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });

  test('It should be on route home at launch', async () => {
    const { getRouteName } = setUp();

    expect(getRouteName()).toHaveTextContent('home');
  });

  test('It should be on route 1 at launch', async () => {
    const { getRouteName } = setUp('/route1');

    expect(getRouteName()).toHaveTextContent('route 1');
  });

  test('It should redirect to route 1', async () => {
    const { route1Link, getRouteName } = setUp();

    fireEvent.click(route1Link);

    await waitFor(() => expect(getRouteName()).toHaveTextContent('route 1'));
  });

  test('It should redirect to home', async () => {
    const { homeLink, getRouteName } = setUp('/route1');

    fireEvent.click(homeLink);

    await waitFor(() => expect(getRouteName()).toHaveTextContent('home'));
  });
})
