import Paper from '@material-ui/core/Paper';
import { FlexItem, FlexLayout } from 'la-danze-ui';
import React from 'react';
import { Demo, DemoAndSource, Header, SourceCode } from '../../DemoAndSource/DemoAndSource';
import styles from './FlexLayoutExample.module.scss';

export function FlexLayoutExample() {
  return (
    <>
      <DemoAndSource id="flexLayoutExample" className={styles.FlexLayoutExample}>
        <Header>
          <h1>Flex layout</h1>
          <span>
            Use flex css with <code>FlexLayout</code> and <code>FlexItem</code> components.
          </span>
        </Header>

        <Demo>
          <span>{'<FlexLayout>'}</span>
          <Paper variant="outlined" className={styles.paperContainer}>
            <FlexLayout fullHeight>
              <FlexItem className={styles.flexItem}>
                {'<FlexItem>'}
                <Paper className={styles.paper}></Paper>
              </FlexItem>
              <FlexItem className={styles.flexItem} flexGrow={1} alignSelf="flex-end">
                {'<FlexItem>'} (flexGrow=1, alignSelf=flex-end)
                <Paper className={styles.paper}></Paper>
              </FlexItem>
              <FlexItem className={styles.flexItem}>
                {'<FlexItem>'}
                <Paper className={styles.paper}></Paper>
              </FlexItem>
              <FlexItem className={styles.flexItem}>
                {'<FlexItem>'}
                <Paper className={styles.paper}></Paper>
              </FlexItem>
            </FlexLayout>
          </Paper>
        </Demo>

        <SourceCode
          codeString={codeString}
          githubSourceLink="https://github.com/pchmn/la-danze-ui/blob/main/packages/la-danze-ui-demo/src/CoreExamples/FlexLayoutExample/FlexLayoutExample.tsx"
        />
      </DemoAndSource>
    </>
  );
}

const codeString = `
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { FlexItem, FlexLayout } from 'la-danze-ui';

export function FlexLayoutExample() {
  return (
    <FlexLayout fullHeight>
      <FlexItem>
        Flex item
        <Paper variant="outlined"></Paper>
      </FlexItem>
      <FlexItem flexGrow={1} alignSelf="flex-end">
        Flex item (flexGrow=1, alignSelf=flex-end)
        <Paper variant="outlined"></Paper>
      </FlexItem>
      <FlexItem>
        Flex item
        <Paper variant="outlined"></Paper>
      </FlexItem>
      <FlexItem>
        Flex item
        <Paper variant="outlined"></Paper>
      </FlexItem>
    </FlexLayout>
  );
}
`.trim();
