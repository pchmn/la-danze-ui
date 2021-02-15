import { ComponentFormFieldProps, Form, FormField } from '@la-danze-ui/form';
import { TextField } from '@material-ui/core';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';

describe('<FormControl />', () => {
  const Container = ({ onSubmit }: { onSubmit: any }) => {
    const form = useForm();

    return (
      <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          id="email"
          name="email"
          as={TextField}
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: { value: /^\S+@\S+$/, message: 'Email format is wrong' }
          }}
          label="Email"
        />
        <FormField
          id="customInput"
          name="customInput"
          label="Custom Input"
          as={CustomInput}
          rules={{ required: { value: true, message: 'Custom Input is required' } }}
        />

        <button type="submit">Validate</button>
      </Form>
    );
  };

  const CustomInputComponent = (
    { helperText, id, label, error, name, value, onChange }: ComponentFormFieldProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} ref={ref} type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        {error && <p>{helperText}</p>}
      </>
    );
  };

  const CustomInput = React.forwardRef<any, ComponentFormFieldProps>(CustomInputComponent);

  const setUp = () => {
    const onSubmit = jest.fn();
    const container = render(<Container onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const customInput = screen.getByLabelText('Custom Input') as HTMLInputElement;
    const validateButton = screen.getByText('Validate');

    return { emailInput, customInput, onSubmit, validateButton, ...container };
  };

  test('It should show fields', async () => {
    const { emailInput, customInput } = setUp();

    expect(emailInput).toBeTruthy();
    expect(customInput).toBeTruthy();
  });

  test('It should show required error message', async () => {
    const { validateButton, onSubmit, emailInput } = setUp();

    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeTruthy();
      expect(screen.getByText('Custom Input is required')).toBeTruthy();
      expect(emailInput).toBeInvalid();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test('It should show format error message', async () => {
    const { validateButton, emailInput, onSubmit } = setUp();

    fireEvent.change(emailInput, { target: { value: 'wrongemail' } });
    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText('Email format is wrong')).toBeTruthy();
      expect(emailInput).toBeInvalid();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test('It should call onSubmit', async () => {
    const { validateButton, emailInput, customInput, onSubmit } = setUp();

    console.log('custominput before', customInput.value, emailInput.value);

    fireEvent.change(emailInput, { target: { value: 'good@email' } });
    fireEvent.change(customInput, { target: { value: 'custom value' } });
    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(emailInput).toBeValid();
      expect(onSubmit).toHaveBeenCalledWith({ email: 'good@email', customInput: 'custom value' }, expect.anything());
    });
  });
});
