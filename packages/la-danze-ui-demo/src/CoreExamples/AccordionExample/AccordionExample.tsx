import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { Accordion } from 'la-danze-ui';
import React from 'react';
import { Demo, DemoAndSource, Header, SourceCode } from '../../DemoAndSource/DemoAndSource';

export function AccordionExample({ style }: React.HTMLAttributes<any>): JSX.Element {
  return (
    <>
      <DemoAndSource id="accordionExample" style={style}>
        <Header>
          <h1>Accordion</h1>
          <span>
            A classic material-ui <code>Accordion</code> that can be open upwards.
          </span>
        </Header>

        <Demo>
          <Accordion style={{ backgroundColor: '#393a3c' }}>
            <AccordionSummary
              expandIcon={
                <SvgIcon>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </SvgIcon>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Expend downwards</Typography>
              <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
                dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion direction="up" style={{ backgroundColor: '#393a3c' }}>
            <AccordionSummary
              expandIcon={
                <SvgIcon>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </SvgIcon>
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Expend upwards</Typography>
              <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
                dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: '#393a3c' }}>
            <AccordionSummary
              expandIcon={
                <SvgIcon>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </SvgIcon>
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Expend downwards 2</Typography>
              <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
                dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Demo>

        <SourceCode
          codeString={codeString}
          githubSourceLink="https://github.com/pchmn/la-danze-ui/blob/main/packages/la-danze-ui-demo/src/CoreExamples/AccordionExample/AccordionExample.tsx"
        />
      </DemoAndSource>
    </>
  );
}

const codeString = `
import Paper from '@material-ui/core/Paper';
import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Accordion } from 'la-danze-ui';

export function AccordionExample() {
  return (
    <>
      <Accordion direction="up">
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Panel 1
        </AccordionSummary>
        <AccordionDetails>
          Panel 1 content
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          Panel 2
        </AccordionSummary>
        <AccordionDetails>
          Panel 2 content
        </AccordionDetails>
      </Accordion>
    </>
  );
}
`.trim();
