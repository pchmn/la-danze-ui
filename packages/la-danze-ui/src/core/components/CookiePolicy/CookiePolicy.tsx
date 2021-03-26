import styled from '@emotion/styled';
import { Accordion } from '@la-danze-ui/core/components/Accordion/Accordion';
import { FlexItem } from '@la-danze-ui/core/components/FlexItem/FlexItem';
import { FlexLayout } from '@la-danze-ui/core/components/FlexLayout/FlexLayout';
import { getStorage } from '@la-danze-ui/core/hooks/useStorage/storage';
import { useStorage } from '@la-danze-ui/core/hooks/useStorage/useStorage.hook';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Switch from '@material-ui/core/Switch';
import Cookies, { CookieAttributes } from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { ReactComponent as CookieIcon } from './cookie-bite-solid.svg';

const SnackBarStyled = styled(Snackbar)`
  z-index: 1199;
  left: auto;
  right: auto;
  & .paperContainer {
    background-color: var(--color-grey-A400);
    position: relative;
    padding: 1.5rem;
    max-width: 325px;
    font-size: 0.9rem;
  }
  & .paperContainer > span {
    display: block;
    margin-bottom: 20px;
  }
  & .paperContainer h4 > .MuiSvgIcon-root {
    vertical-align: text-bottom;
    margin-right: 10px;
  }
  & .paperContainer > .MuiSvgIcon-root,
  .paperContainer > .MuiIconButton-root {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }
  & .paperContainer > h4 {
    font-size: 0.95rem;
    margin-bottom: 15px;
  }

  & .MuiButton-root {
    margin-top: 20px;
    padding: 5px 16px;
    font-size: 0.9rem;
    float: right;
  }
`;

const AccordionStyled = styled(Accordion)`
  background-color: var(--color-grey-800);
  & .MuiAccordionSummary-root,
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: inherit;
    padding: 2px 16px;
  }
  & .MuiAccordionSummary-root.Mui-expanded {
    border-top: 1px solid var(--color-divider);
  }
  & .MuiAccordionSummary-content,
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 7px 0;
  }
  & .MuiAccordionDetails-root {
    padding-bottom: 0;
  }
  & .LaDuiFlexLayout {
    margin-bottom: 16px;
  }
  & .LaDuiFlexLayout h4 {
    margin-bottom: 5px;
  }
`;

export type CookiePolicyType = 'strictlyNecessary' | 'functionality' | 'performance' | 'targeting';

export interface CookiePolicyProps extends React.HTMLAttributes<any> {
  title: string;
  summary: string;
  settingsLabel: string;
  cookies: {
    type: CookiePolicyType;
    title: string;
    summary: string;
    checked?: boolean;
    disabled?: boolean;
  }[];
  cookieOptions?: CookieAttributes;
  onCookieValueChange?: (id: string | number, value: boolean) => void;
  linkToPrivacyPolicy?: string;
}

const COOKIE_POLICY_PREFIX = 'cookiePolicy_';

export function CookiePolicy({
  title,
  summary,
  settingsLabel,
  cookies,
  onCookieValueChange,
  linkToPrivacyPolicy,
  cookieOptions = { expires: 365, secure: true },
  ...otherProps
}: CookiePolicyProps): JSX.Element {
  const storage = getStorage('cookieStorage');
  const [cookieValues, setCookieValues] = useState(cookies);
  const [cookiePolicyConsent, setCookiePolicyContent] = useCookiePolicy('consent');

  useEffect(() => {
    if (!cookiePolicyConsent) {
      cookies.forEach((item) => Cookies.remove(`${COOKIE_POLICY_PREFIX}${item.type}`));
    }
  }, [cookiePolicyConsent]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValues = [...cookieValues];
    newValues[index].checked = event.target.checked;
    setCookieValues(newValues);
  };

  const handleClose = () => {
    setCookiePolicyContent(true, cookieOptions);
    console.log('cookies', cookieValues)
    cookieValues.forEach((item) =>
      storage.set(`${COOKIE_POLICY_PREFIX}${item.type}`, item.checked, cookieOptions)
    );
  };

  return (
    <SnackBarStyled
      open={!cookiePolicyConsent}
      message="Note archived"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...otherProps}
    >
      <Paper className="paperContainer">
        <h4>
          <SvgIcon fontSize="small">
            <CookieIcon />
          </SvgIcon>
          {title}
        </h4>
        <span>{summary}</span>
        {/* <SvgIcon fontSize="small" onClick={handleClose}>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </SvgIcon> */}
        <IconButton size="small" onClick={handleClose}>
          <SvgIcon fontSize="small">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </SvgIcon>
        </IconButton>
        <AccordionStyled direction="up">
          <AccordionSummary
            expandIcon={
              <SvgIcon>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </SvgIcon>
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {settingsLabel}
          </AccordionSummary>
          <AccordionDetails>
            {cookieValues.map((item, index) => (
              <FlexLayout key={index}>
                <FlexItem flexGrow={1}>
                  <h4>{item.title}</h4>
                  <span>{item.summary}</span>
                </FlexItem>
                <FlexItem>
                  <Switch
                    size="small"
                    checked={item.checked}
                    onChange={(event) => handleChange(event, index)}
                    name={item.type}
                    disabled={item.disabled}
                  />
                </FlexItem>
              </FlexLayout>
            ))}
          </AccordionDetails>
        </AccordionStyled>
        {/* <Button variant="outlined" color="secondary">
          Confirm
        </Button> */}
      </Paper>
    </SnackBarStyled>
  );
}

export function useCookiePolicy(
  name: string
){
  return useStorage(`${COOKIE_POLICY_PREFIX}${name}`, {defaultValue: false, storage: 'cookieStorage'});
}
