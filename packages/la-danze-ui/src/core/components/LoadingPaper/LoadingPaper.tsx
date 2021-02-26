import styled from '@emotion/styled';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import React from 'react';

export interface LoadingPaperPros extends PaperProps {
  pending?: boolean;
  progressColor?: 'secondary' | 'primary';
}

const PaperStyled = styled(Paper)`
  position: relative;
  overflow: auto;
  & .MuiLinearProgress-root {
    width: 100%;
    height: 0.25rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export function LoadingPaper({
  children,
  pending,
  progressColor = 'secondary',
  ...otherProps
}: LoadingPaperPros): JSX.Element {
  return (
    <PaperStyled {...otherProps} aria-busy={pending} aria-describedby="progress">
      {pending && <LinearProgress color={progressColor} aria-label="progress" />}
      {children}
    </PaperStyled>
  );
}
