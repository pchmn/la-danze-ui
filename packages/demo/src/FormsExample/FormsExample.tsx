import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormField, ReactHookForm } from 'la-danze-ui';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Demo, DemoAndSource, Header, SourceCode } from '../DemoAndSource/DemoAndSource';
import styles from './FormsExample.module.scss';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email mandatory')
    .email('Wrong email format'),
  username: yup
    .string()
    .required('Username mandatory')
    .min(2, '2 characters minimum'),
  password: yup
    .string()
    .required('Password mandatory')
    .min(8, '8 characters minimum'),
  confirmPassword: yup
    .string()
    .required('Confirm password mandatory')
    .oneOf([yup.ref('password'), ''], 'Passwords mismatch'),
});

export function FormsExample() {
  // Form
  const form = useForm({
    resolver: yupResolver(validationSchema)
  });
  const form2 = useForm();
  const [loading, setLoading] = useState(false);
  let drawer: any;

  useEffect(() => {
    setFixedHeight();
    classListener();
  });

  function setFixedHeight() {
    const paperElts = document.querySelectorAll('div[class*="FormsExample"] .MuiPaper-root');
    if (paperElts?.length > 1 && !(paperElts[1] as HTMLElement).style.maxHeight) {
      (paperElts[1] as HTMLElement).style.maxHeight = getComputedStyle(paperElts[0] as HTMLElement).height;
    }
  }

  function classListener() {
    drawer = document.querySelector('div[class*="MuiDrawer"]');
    var observer = new MutationObserver(function (event: any) {
      for (let val of event[0]?.target.classList.values()) {
        if (val.includes('Open')) {
          console.log('open (with scapp)');
        }
      }
    })

    observer.observe(drawer, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    })
  }

  function onSubmit(values: any) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      console.log('form values', values);
    }, 1000)
  }

  if (form2.errors) {
    console.log('form error', form2.errors)
  }

  return (
    <div className={styles.formsExample}>
      <DemoAndSource id="FormsExample">
        <Header>
          <h2><pre>ReactHookForm</pre> and <pre>FormField</pre></h2>
          <span>
            Example of form using <pre>react-hook-form</pre> and <pre>yup</pre> by implementing <pre>ReactHookForm</pre> and <pre>FormField</pre> components.
          </span>
        </Header>

        <Demo>
          <ReactHookForm form={form} onSubmit={form.handleSubmit(onSubmit)} disabled={loading}>
            <FormField className={styles.textField} name="email" as={TextField} label="Email" />
            <FormField className={styles.textField} name="username" as={TextField} label="Username" />

            <span className={styles.passwordHelper}>8 characters minimum.</span>
            <FormField className={styles.textField} type="password" name="password" as={TextField} label="Password" />
            <FormField className={styles.textField} type="password" name="confirmPassword" as={TextField} label="Confirm password" />

            <Button className={styles.submitButton} disabled={loading} variant="contained" color="primary" type="submit">
              Validate
              </Button>
          </ReactHookForm>

          <ReactHookForm form={form2} onSubmit={form2.handleSubmit(onSubmit)}>
            <FormField name="email" as={TextField} rules={{ required: true }} label="Email" />
            <FormField type="password" name="password" as={TextField} rules={{ required: true }} label="Password" />

            <button type="submit">
              Validate
            </button>
          </ReactHookForm>
        </Demo>

        <SourceCode codeString={codeString} githubSourceLink="https://github.com/pchmn/la-danze-react/blob/main/.env" />
      </DemoAndSource>
    </div>
  );
}

const codeString =
  `import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ReactHookForm, FormField } from 'la-danze-ui';


const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email mandatory')
    .email('Wrong email format'),
  username: yup
    .string()
    .required('Username mandatory')
    .min(2, '2 characters minimum'),
  password: yup
    .string()
    .required('Password mandatory')
    .min(8, '8 characters minimum'),
  confirmPassword: yup
    .string()
    .required('Confirm password mandatory')
    .oneOf([yup.ref('password'), ''], 'Passwords mismatch'),
});

export function FormsExample() {
  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(values: any) {
    console.log('form values', values);
  }

  return (
    <ReactHookForm form={form} onSubmit={form.handleSubmit(onSubmit)}>
      <FormField name="email" as={TextField} label="Email" />
      <FormField name="username" as={TextField} label="Username" />

      <span>8 characters minimum.</span>
      <FormField type="password" name="password" as={TextField} label="Password" />
      <FormField type="password" name="confirmPassword" as={TextField} label="Confirm password" />

      <Button type="submit">
        Validate
      </Button>
    </ReactHookForm>
  );
}`;
