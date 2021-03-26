import React from 'react';
import { AccordionExample } from './AccordionExample/AccordionExample';
import { FlexLayoutExample } from './FlexLayoutExample/FlexLayoutExample';

export function CoreExamples(): JSX.Element {
  return (
    <>
      <FlexLayoutExample />
      <AccordionExample style={{ marginTop: 70 }} />
    </>
  );
}
