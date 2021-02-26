import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AnimateLink, AnimateRoute, AnimateSwitch, useAnimationKey } from 'la-danze-ui';
import React from 'react';
import { Demo, DemoAndSource, Header, SourceCode } from '../../DemoAndSource/DemoAndSource';
import styles from './AnimateRoutingExample.module.scss';

export function AnimateRouting({ className, ...props }: React.HTMLAttributes<any>): JSX.Element {
  const animationKey = useAnimationKey();

  function onActive(active: boolean) {
    console.log('route 1 active: ', active);
  }

  return (
    <div className={`${styles.animateRoutingExample} ${className}`} {...props}>
      <DemoAndSource id="AnimateRoutingExample">
        <Header>
          <h1>Animate routing</h1>
          <span>
            Example of routing animations using <code>AnimateSwitch</code> and <code>AnimateRoute</code> components.
          </span>
        </Header>

        <Demo>
          <Button
            color="primary"
            variant="contained"
            className={styles.animateButton}
            component={AnimateLink}
            animationKey={animationKey}
            to="/animations/"
            exact
          >
            Go to Home
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={styles.animateButton}
            component={AnimateLink}
            animationKey={animationKey}
            onActive={onActive}
            to="/animations/route1"
          >
            Go to Route 1
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={styles.animateButton}
            component={AnimateLink}
            animationKey={animationKey}
            to="/animations/route2"
          >
            Go to Route 2
          </Button>

          <div className={styles.animationResult}>
            <span>Result:</span>
            <Paper variant="outlined" className={styles.paperResult}>
              <AnimateSwitch animationKey={animationKey} animationType="slideLeft">
                <AnimateRoute exact path="/animations/">
                  <Route name="Home" />
                </AnimateRoute>
                <AnimateRoute path="/animations/route1">
                  <Route name="Route 1" />
                </AnimateRoute>
                <AnimateRoute path="/animations/route2">
                  <Route name="Route 2" />
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

function Route(props: any) {
  return <div style={{ textAlign: 'center' }}>{props.name}</div>;
}

const codeString = `
import { AnimateSwitch, AnimateRoute  } from 'la-danze-ui';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function AnimationsExample() {  
  return (
    <Button component={Link} to="/" exact>
      Go to Home
    </Button>
    <Button component={Link} to="/route1">
      Go to Route 1
    </Button>
    <Button component={Link} to="/route2">
      Go to Route 2
    </Button>

    <AnimateSwitch animationType="slideLeft">
      <AnimateRoute exact path="/">
        Home
      </AnimateRoute>
      <AnimateRoute path="/route1">
        Route 1
      </AnimateRoute>
      <AnimateRoute path="/route2">
        Route 2
      </AnimateRoute>
    </AnimateSwitch>
  );
}`.trim();
