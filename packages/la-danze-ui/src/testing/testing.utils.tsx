import { render } from '@testing-library/react';
import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { matchers } from '@emotion/jest';

// Render component wrapped by BrowserRouter
// See https://testing-library.com/docs/example-react-router#reducing-boilerplate
export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export const resizeWindow = ({ height, width }: { height?: number; width?: number }) => {
  if (width) {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width
    });
  } else if (height) {
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height
    });
  }

  window.dispatchEvent(new Event('resize'));
};

export function mockMediaQueries(type: 'downMd' | 'upMd'): any {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query === '(max-width: 600px)' ? false : type === 'downMd',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  });
}

const failMessage = (received: HTMLElement, className: string, not = true) => () => `${matcherHint(`${not ? '.not' : ''}.toHaveClassContains`, 'received', 'expected')}

Expected the element${not ? 'not' : ''} to have class that contains:
${printExpected(className)}
Received:
${printReceived(received.classList)}`;

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveClassContains: (className: string) => CustomMatcherResult;
    }
  }
}

expect.extend({
  toHaveClassContains(received: HTMLElement, className: string): jest.CustomMatcherResult {
    invariant(received && received.classList, `Element does not have any classes`);
    let classExists = false;

    received.classList.forEach((item) => {
      if (item.includes(className)) {
        classExists = true;
      }
    });

    return classExists
      ? {
          pass: true,
          message: failMessage(received, className)
        }
      : {
          pass: false,
          message: failMessage(received, className, false)
        };
  }
});
expect.extend(matchers);

// Mock Framer motion
// See https://www.hectane.com/blog/mock-framer-motion-with-jest and https://testing-library.com/docs/example-react-transition-group
jest.mock('framer-motion', () => {
  const FakeAnimatePresence = jest.fn(({ children }) => children);

  const motion = {
    div: jest.fn(({ children }) => children)
  };

  return {
    motion: motion,
    AnimatePresence: FakeAnimatePresence
  };
});

export const RouteContainer = ({ routeName }: { routeName: string }) => {
  return (
    <div>
      <span data-testid="routeName">{routeName}</span>
    </div>
  );
};
