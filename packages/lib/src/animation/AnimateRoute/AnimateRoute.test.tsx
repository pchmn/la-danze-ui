import React from "react";
import { Switch } from "react-router-dom";
import { renderWithRouter } from "../../testing/testing.utils";
import { AnimateSwitch } from "../AnimateSwitch/AnimateSwitch";
import { AnimateRoute } from './AnimateRoute';

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

    const error = Error('You can\'t use <AnimateRoute /> outside a <AnimateSwitch />');
    expect(() => renderWithRouter(<ExceptionContainer />)).toThrow(error);

    // Restore writing to stderr.
    console.error = err;
  });
})
