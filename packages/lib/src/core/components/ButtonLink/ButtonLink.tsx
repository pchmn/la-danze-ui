import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { RouterLink } from '../RouterLink/RouterLink';

interface ButtonLinkProps extends ButtonProps {
  to: string;
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  elementOnClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
}

export function ButtonLink({ children, to, className, onClick, elementOnClick, ...otherProps }: ButtonLinkProps): JSX.Element {
  return (
    <RouterLink className={className} to={to} onClick={onClick} elementOnClick={elementOnClick}>
      <Button {...otherProps}>
        {children}
      </Button>
    </RouterLink>
  );
}

