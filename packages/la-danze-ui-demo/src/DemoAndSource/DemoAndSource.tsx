import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import { ResizeSensor } from 'css-element-queries';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import React, { useEffect, useState } from 'react';
import styles from './DemoAndSource.module.scss';
import { ReactComponent as GithubIcon } from '/assets/github.svg';

interface DemoAndSourceProps {
  id: string;
}

export function DemoAndSource({ children, id }: React.PropsWithChildren<DemoAndSourceProps>): JSX.Element {
  const { header, demo, sourceCode } = getContainers();

  useEffect(() => {
    autoResizeSourceCode();
  });

  function autoResizeSourceCode() {
    const paperElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root`);
    const sourCodeElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root div[class*="sourceCode"]`);
    const actionBarElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root div[class*="actionBar"]`);

    if (paperElt && actionBarElt && sourCodeElt) {
      // When "demo" resizes, resize source code as well so they have the same height
      new ResizeSensor(paperElt, function () {
        (sourCodeElt as HTMLElement).style.height = `${paperElt.clientHeight - actionBarElt.clientHeight}px`;
        (sourCodeElt as HTMLElement).style.display = 'block';
      });
    }
  }

  function getContainers() {
    let header: any;
    let demo: any;
    let sourceCode: any;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === Header) {
          header = child;
        } else if (child.type === Demo) {
          demo = child;
        } else if (child.type === SourceCode) {
          sourceCode = child;
        }
      }
      if (header && demo && sourceCode) {
        return;
      }
    });

    if (!header || !demo || !sourceCode) {
      throw new Error('DemoAndSource must have a Header, Demo and SourceCode component');
    }
    return { header, demo, sourceCode };
  }

  return (
    <Grid container spacing={0} className={styles.demoAndSource} data-id={id}>
      <>{header}</>
      <>{demo}</>
      <>{sourceCode}</>
    </Grid>
  );
}

export function Header({ children }: React.PropsWithChildren<any>): JSX.Element {
  return (
    <Grid item md={12} className={styles.header}>
      {children}
    </Grid>
  );
}

export function Demo({ children }: React.PropsWithChildren<any>): JSX.Element {
  return (
    <Grid item md={6} xs={12}>
      <Paper className={`${styles.demo} paperContainer`}>{children}</Paper>
    </Grid>
  );
}

interface SourceCodeProps {
  codeString: string;
  githubSourceLink: string;
  height?: number;
}
export function SourceCode({
  codeString,
  githubSourceLink,
  height = -1
}: React.PropsWithChildren<SourceCodeProps>): JSX.Element {
  const [open, setOpen] = useState(false);
  // codeString = '(num) => num + 1';

  function copyToCliboard() {
    if (!codeString) {
      throw new Error('No code to copy');
    }

    const textArea = document.createElement('textarea');
    textArea.value = codeString;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setOpen(true);
    } catch (err) {
      console.error('Error copy: ', err);
    }

    document.body.removeChild(textArea);
  }

  function openGithubSource() {
    window.open(githubSourceLink, '_blank');
  }

  return (
    <Grid item md={6} xs={12}>
      <Paper
        className={`${styles.sourceCodePaper} sourCodePaper`}
        style={height !== -1 ? { height: 'auto' } : { height }}
      >
        <div className={styles.actionBar}>
          <Tooltip title="Show full source on Github">
            <IconButton aria-label="copy" onClick={openGithubSource}>
            <SvgIcon fontSize="small">
                <GithubIcon />
            </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy the source">
            <IconButton aria-label="copy" onClick={copyToCliboard}>
              <SvgIcon fontSize="small">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" />
              </SvgIcon> 
            </IconButton>
          </Tooltip>
        </div>
        <div className={styles.sourceCode} style={{ display: 'none' }}>
          <Highlight {...defaultProps} theme={theme} code={codeString} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} ${styles.pre}`} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })} key={i} className={styles.tokenLine}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <Snackbar message="Source code copied !" open={open} autoHideDuration={1500} onClose={() => setOpen(false)} />
      </Paper>
    </Grid>
  );
}
