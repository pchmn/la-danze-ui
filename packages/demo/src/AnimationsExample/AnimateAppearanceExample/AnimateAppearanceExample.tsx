import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { AnimatePresence } from 'framer-motion';
import { MountTransition } from 'la-danze-ui';
import React, { useState } from 'react';
import { Demo, DemoAndSource, Header, SourceCode } from '../../DemoAndSource/DemoAndSource';
import styles from './AnimateAppearanceExample.module.scss';

export function AnimateAppearance({ className, ...props }: React.HTMLAttributes<any>) {
  const [animationType, setAnimationType] = useState<'scale' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'>('scale');
  const [animationStatus, setAnimationStatus] = useState(false);

  function handleAnimationChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAnimationType((event.target as HTMLInputElement).value as any);
  }

  function animate() {
    setAnimationStatus(true);
    setTimeout(() => setAnimationStatus(false), 1500)
  }

  return (
    <div className={`${styles.animateAppearance} ${className}`} {...props}>
      <DemoAndSource id="AnimationsExample">
        <Header>
          <h1>Animate (dis)appearance</h1>
          <span>
            Example of (dis)appearance animations using <pre>AnimatePresence</pre> and <pre>MountTransition</pre> component.
          </span>
        </Header>

        <Demo>
          <span className={styles.label}>Animation type</span>
          <FormControl component="fieldset">
            <RadioGroup onChange={handleAnimationChange} value={animationType} row aria-label="position" name="position" defaultValue="top">
              <FormControlLabel
                className={styles.radio}
                value="scale"
                control={<Radio color="primary" />}
                label="Scale"
                labelPlacement="end"
              />
              <FormControlLabel
                className={styles.radio}
                value="fade"
                control={<Radio color="primary" />}
                label="Fade"
                labelPlacement="end"
              />
              <FormControlLabel
                className={styles.radio}
                value="slideUp"
                control={<Radio color="primary" />}
                label="Slide up"
                labelPlacement="end"
              />
              <FormControlLabel
                className={styles.radio}
                value="slideDown"
                control={<Radio color="primary" />}
                label="Slide down"
                labelPlacement="end"
              />
              <FormControlLabel
                className={styles.radio}
                value="slideRight"
                control={<Radio color="primary" />}
                label="Slide right"
                labelPlacement="end"
              />
              <FormControlLabel
                className={styles.radio}
                value="slideLeft"
                control={<Radio color="primary" />}
                label="Slide left"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          <Button className={styles.animateButton} onClick={animate} variant="contained" color="primary" type="submit">
            Animate
          </Button>

          <div className={styles.animationResult}>
            <span>Result:</span>
            <Paper variant="outlined" className={styles.paperResult}>
              <AnimatePresence>
                {animationStatus &&
                  <MountTransition animationType={animationType}>
                    <div className={styles.animatedBox} />
                  </MountTransition>
                }
              </AnimatePresence>
            </Paper>
          </div>
        </Demo>

        <SourceCode codeString={codeString} githubSourceLink="https://github.com/pchmn/la-danze-react/blob/main/.env" />
      </DemoAndSource>
    </div>
  );
}

const codeString =
  `import Paper from '@material-ui/core/Paper';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { MountTransition } from 'la-danze-ui';


export function AnimationsExample() {
  const [animationStatus, setAnimationStatus] = useState(false);

  useEffet(() => {
    // Simulate appearance after 1 sec
    setTimeout(() => setAnimationStatus(true), 1000);
  })

  return (
    <Paper>
      <AnimatePresence>
        {animationStatus &&
          <MountTransition animationType="scale">
            <div />
          </MountTransition>
        }
      </AnimatePresence>
    </Paper>
  );
}`;