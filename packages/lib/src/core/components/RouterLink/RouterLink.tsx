import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface RouterLinkProps extends LinkProps {
  to: string;
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  elementOnClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
}

export function RouterLink({ children, to, onClick, elementOnClick, ...otherProps }: React.PropsWithChildren<RouterLinkProps>): JSX.Element {
  const location = useLocation();

  function handleOnClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (location.pathname.includes(to)) {
      if (elementOnClick) {
        elementOnClick(event);
      }
      event.preventDefault();
    } else {
      if (onClick) {
        onClick(event);
      }
      if (elementOnClick) {
        elementOnClick(event);
      }
    }
  }

  return (
    <Link to={to} {...otherProps} onClick={handleOnClick}>
      {children}
    </Link>
  );
}
