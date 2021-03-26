import * as React from 'react';

// This is a helper function to inject the classname
export function withClass(className?: string) {
  return (Component: any) => {
    const ComponentWithCustomClass = (props: any) => {
      return <Component {...props} className={`${className}${props.className ? ' ' + props.className : ''}`} />;
    };

    return ComponentWithCustomClass;
  };
}
