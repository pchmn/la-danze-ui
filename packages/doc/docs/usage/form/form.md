---
title: Form
---

Simplify use of [react-hook-form](https://react-hook-form.com/) with [material-ui](https://next.material-ui.com/) components. See demo.

By using `Form` and `FormField` your form fields will be automatically mapped and some useful props will be added to field components (`error`, `helperText` (error message) and `disabled`).

> It uses react-hook-form `Controller` component under the hook

## Basic usage

Just set `form` prop on `Form` component, and `name` prop on `FormField` component (same as Controller component).

Below a form example with [yup](https://github.com/jquense/yup) validation:

```tsx
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
    .min(2, '2 characters minimum')
});

function App() {
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

      <Button type="submit">Validate</Button>
    </Form>
  );
}
```

## Advanced usage

### Use `FormField` with custom components

If you want to use `FormField` with custom component, your component props must inherit `ComponentFormFieldProps`. For additional props see react-hook-form `Controller` [doc](https://react-hook-form.com/api/#Controller).

```tsx
import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { Form, FormField, ComponentFormFieldProps } from 'la-danze-ui';

function App() {
  const form = useForm();

  function onSubmit(values: any) {
    console.log('form values', values);
  }

  return (
      <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField id="customInput" name="customInput" as={CustomInput} rules={{ required: { value: true, message: 'Custom Input is required' } }} />

        <button type="submit">Validate</button>
      </Form>
  );
}

const CustomInput = React.forwardRef<any, ComponentFormFieldProps>(({ helperText, id, error, name, value, onChange }, ref) => {
  return (
    <>
      <label htmlFor={id}>Custom Input</label>
      <input id={id} name={name} ref={ref} type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      {error &&
        <p>{helperText}</p>
      }
    </>
  )
});
```

## API

* [`Form`](api/components/Form.mdx)
* [`FormField`](api/components/FormField.mdx)  