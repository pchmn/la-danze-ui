import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './DemoAndSource.module.scss';
import atomOneDark from './highlight-theme';


interface DemoAndSourceProps {
  id: string;
}

export function DemoAndSource({ children, id }: React.PropsWithChildren<DemoAndSourceProps>) {
  const { header, demo, sourceCode } = getContainers();

  useEffect(() => {
    setFixedHeight()
  });

  function setFixedHeight() {
    const paperElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root`);
    const sourCodeElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root div[class*="sourceCode"]`);
    const actionBarElt = document.querySelector(`div[data-id*="${id}"] .MuiPaper-root div[class*="actionBar"]`);
    if (paperElt && actionBarElt) {
      (sourCodeElt as HTMLElement).style.height = `${(paperElt as HTMLElement).clientHeight - (actionBarElt as HTMLElement).clientHeight}px`;
      (sourCodeElt as HTMLElement).style.display = 'block';
    }
  }

  function getContainers() {
    let header: any;
    let demo: any;
    let sourceCode: any;

    React.Children.forEach(children, child => {
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
      <>
        {header}
      </>
      <>
        {demo}
      </>
      <>
        {sourceCode}
      </>

    </Grid>
  );
}

export function Header({ children }: React.PropsWithChildren<any>) {
  return (
    <Grid item md={12} className={styles.header}>
      {children}
    </Grid>
  );
}

export function Demo({ children }: React.PropsWithChildren<any>) {
  return (
    <Grid item md={6} xs={12}>
      <Paper className={`${styles.demo} paperContainer`}>
        {children}
      </Paper>
    </Grid>
  );
}

interface SourceCodeProps {
  codeString: string;
  githubSourceLink: string;
  height?: number
}
export function SourceCode({ codeString, githubSourceLink, height = -1 }: React.PropsWithChildren<SourceCodeProps>) {

  const [open, setOpen] = useState(false);

  function copyToCliboard() {
    if (!codeString) {
      throw new Error('No code to copy');
    }

    const textArea = document.createElement("textarea");
    textArea.value = codeString;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

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
      <Paper className={`${styles.sourceCodePaper} sourCodePaper`} style={height !== -1 ? { height: 'auto' } : { height }}>
        <div className={styles.actionBar}>
          <Tooltip title="Show full source on Github">
            <IconButton aria-label="githubFullSource" onClick={openGithubSource}>
              <FontAwesomeIcon icon={faGithub} size="sm" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy the source">
            <IconButton aria-label="copy" onClick={copyToCliboard}>
              <FileCopyOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <div className={styles.sourceCode} style={{ display: 'none' }}>
          <SyntaxHighlighter className={styles.code} language="javascript" style={atomOneDark} wrapLongLines>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <Snackbar message="Source code copied !" open={open} autoHideDuration={1500} onClose={() => setOpen(false)} />
      </Paper>
    </Grid>
  );
}
