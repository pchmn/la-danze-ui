import styled from '@emotion/styled';
import { default as MuiAccordion } from '@material-ui/core/Accordion';

export interface AccordionProps {
  direction?: 'down' | 'up';
}

export const Accordion = styled(MuiAccordion)(({ direction = 'down' }: AccordionProps) => ({
  display: 'flex',
  flexDirection: 'column',
  '& > div:first-of-type': {
    order: direction === 'down' ? 0 : 1
  }
}));
