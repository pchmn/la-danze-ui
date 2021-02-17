import { AnimateRoute } from '@la-danze-ui/animation/AnimateRoute/AnimateRoute';
import { AnimateSwitch } from '@la-danze-ui/animation/AnimateSwitch/AnimateSwitch';
import { renderWithRouter } from '@la-danze-ui/testing/testing.utils';
import React from 'react';
import { Switch } from 'react-router-dom';

describe('<AnimateRoute />', () => {
  const ExceptionContainer = () => {
    return (
      <div>
        <AnimateSwitch></AnimateSwitch>
        <Switch>
          <AnimateRoute path="/">Exception</AnimateRoute>
        </Switch>
      </div>
    );
  };

  test('It should throw an error if <AnimateRoute /> is used outside <AnimateSwitch />', async () => {
    // Prevent writing to stderr during this render.
    const err = console.error;
    console.error = jest.fn();

    const error = Error("You can't use <AnimateRoute /> outside a <AnimateSwitch />");
    expect(() => renderWithRouter(<ExceptionContainer />)).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });
});
