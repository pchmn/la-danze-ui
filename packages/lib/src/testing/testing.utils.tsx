import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Render component wrapped by BrowserRouter
// See https://testing-library.com/docs/example-react-router#reducing-boilerplate
export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
};

// Mock Framer motion
// See https://www.hectane.com/blog/mock-framer-motion-with-jest and https://testing-library.com/docs/example-react-transition-group
jest.mock('framer-motion', () => {
  const FakeAnimatePresence = jest.fn(({ children }) => children);

  const motion = {
    div: jest.fn(({ children }) => children)
  };

  return {
    motion: motion,
    AnimatePresence: FakeAnimatePresence,
  };
});