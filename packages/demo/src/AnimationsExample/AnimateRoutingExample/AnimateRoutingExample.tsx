import { Paper } from '@material-ui/core';
import { AnimateRoute, AnimateSwitch, ButtonLink, useAnimateSwitch } from 'la-danze-ui';
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Demo, DemoAndSource, Header, SourceCode } from '../../DemoAndSource/DemoAndSource';
import styles from './AnimateRoutingExample.module.scss';


export function AnimateRouting({ className, ...props }: React.HTMLAttributes<any>) {
  const location = useLocation();
  const { switchKey, setSwitchKey } = useAnimateSwitch(location.pathname);

  return (
    <div className={`${styles.animateRoutingExample} ${className}`} {...props}>
      <DemoAndSource id="AnimateRoutingExample">
        <Header>
          <h1>Animate routing</h1>
          <span>
            Example of routing animations using <pre>AnimateSwitch</pre> and <pre>AnimateRoute</pre> components.
          </span>
        </Header>

        <Demo>
          <ButtonLink className={styles.animateButton} color="primary" variant="contained" onClick={() => setSwitchKey("/animations/route1")} to="/animations/route1">
            Go to Route 1
          </ButtonLink>
          <ButtonLink className={styles.animateButton} color="primary" variant="contained" onClick={() => setSwitchKey("/animations/route2")} to="/animations/route2">
            Go to Route 2
          </ButtonLink>
          <ButtonLink className={styles.animateButton} color="primary" variant="contained" onClick={() => setSwitchKey("/animations/route3")} to="/animations/route3">
            Go to Route 3
          </ButtonLink>

          <div className={styles.animationResult}>
            <span>Result:</span>
            <Paper variant="outlined" className={styles.paperResult}>
              <AnimateSwitch switchKey={switchKey} animationType="slideLeft">
                <AnimateRoute path="/animations/route1">
                  <div style={{ textAlign: 'center' }}>Route 1</div>
                </AnimateRoute>
                <AnimateRoute path="/animations/route2">
                  <div style={{ textAlign: 'center' }}>Route 2</div>
                </AnimateRoute>
                <AnimateRoute path="/animations/route3">
                  <div style={{ textAlign: 'center' }}>Route 3</div>
                </AnimateRoute>
                <AnimateRoute exact path="/animations/">
                  <Redirect to='/animations/route1' />
                </AnimateRoute>
              </AnimateSwitch>
            </Paper>
          </div>
        </Demo>

        <SourceCode codeString={codeString} githubSourceLink="https://github.com/pchmn/la-danze-react/blob/main/.env" />
      </DemoAndSource>
    </div>
  );
}

const codeString =
  `import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { MountTransition } from 'la-danze-ui';
import { Button, Paper } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';


export function AnimationsExample() {
  const { switchKey, setSwitchKey } = useAnimateSwitch();

  return (
    <Button type="submit">
      <Link to="/route1" onClick={() => setSwitchKey("/route1")}>Go to Route 1</Link>
    </Button>
    <Button type="submit">
      <Link to="/route2" onClick={() => setSwitchKey("/route2")}>Go to Route 2</Link>
    </Button>
    <Button type="submit">
      <Link to="/route3" onClick={() => setSwitchKey("/route3")}>Go to Route 3</Link>
    </Button>

    <AnimateSwitch switchKey={switchKey} animationType="slideLeft">
      <AnimateRoute path="/route1">
        <div>Route 1</div>
      </AnimateRoute>
      <AnimateRoute path="/route2">
        <div>Route 2</div>
      </AnimateRoute>
      <AnimateRoute path="/route3">
        <div>Route 3</div>
      </AnimateRoute>
      <AnimateRoute exact path="/">
        <Redirect to='/route1' />
      </AnimateRoute>
    </AnimateSwitch>
  );
}`;
