import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { Form, FormField } from 'la-danze-ui';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Demo, DemoAndSource, Header, SourceCode } from '../DemoAndSource/DemoAndSource';
import styles from './FormsExample.module.scss';

const validationSchema = yup.object({
  email: yup.string().required('Email mandatory').email('Wrong email format'),
  username: yup.string().required('Username mandatory').min(2, '2 characters minimum'),
  password: yup.string().required('Password mandatory').min(8, '8 characters minimum'),
  confirmPassword: yup
    .string()
    .required('Confirm password mandatory')
    .oneOf([yup.ref('password'), ''], 'Passwords mismatch')
});

export function FormsExample(): JSX.Element {
  // Form
  const form = useForm({
    resolver: yupResolver(validationSchema)
  });
  const [loading, setLoading] = useState(false);

  function onSubmit(values: any) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('form values', values);
    }, 1000);
  }

  return (
    <div className={styles.formsExample}>
      <DemoAndSource id="FormsExample">
        <Header>
          <h1>Form</h1>
          <span>
            Example of form using <code>react-hook-form</code> and <code>yup</code> by implementing <code>Form</code>{' '}
            and <code>FormField</code> components.
          </span>
        </Header>

        <Demo pending={loading}>
          <Form form={form} onSubmit={form.handleSubmit(onSubmit)} disabled={loading}>
            <FormField className={styles.textField} name="email" as={TextField} label="Email" />
            <FormField className={styles.textField} name="username" as={TextField} label="Username" />

            <span className={styles.passwordHelper}>8 characters minimum.</span>
            <FormField className={styles.textField} type="password" name="password" as={TextField} label="Password" />
            <FormField
              className={styles.textField}
              type="password"
              name="confirmPassword"
              as={TextField}
              label="Confirm password"
            />

            <LoadingButton
              className={styles.submitLoadingButton}
              pending={loading}
              variant="contained"
              color="primary"
              type="submit"
            >
              Validate
            </LoadingButton>
          </Form>
        </Demo>

        <SourceCode
          codeString={codeString}
          githubSourceLink="https://github.com/pchmn/la-danze-ui/blob/main/packages/la-danze-ui-demo/src/FormsExample/FormsExample.tsx"
        />
      </DemoAndSource>
    </div>
  );
}

const codeString = `
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, FormField } from 'la-danze-ui';


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
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
      <FormField name="email" as={TextField} label="Email" />
      <FormField name="username" as={TextField} label="Username" />

      <span>8 characters minimum.</span>
      <FormField type="password" name="password" as={TextField} label="Password" />
      <FormField type="password" name="confirmPassword" as={TextField} label="Confirm password" />

      <Button type="submit">
        Validate
      </Button>
    </Form>
  );
}
`.trim();
