import { Form, FormField } from '@la-danze-ui/form';
import TextField from '@material-ui/core/TextField';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';

describe('<Form />', () => {
  const Container = ({ onSubmit }: { onSubmit: any }) => {
    const useFormValue = useForm();

    return (
      <Form form={useFormValue} onSubmit={useFormValue.handleSubmit(onSubmit)}>
        <FormField
          id="email"
          name="email"
          as={TextField}
          rules={{ required: true, pattern: /^\S+@\S+$/ }}
          label="Email"
        />

        <button type="submit">Validate</button>
      </Form>
    );
  };

  const setUp = () => {
    const onSubmit = jest.fn();
    const container = render(<Container onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText('Email');
    const validateButton = screen.getByText('Validate');

    return { emailInput, onSubmit, validateButton, ...container };
  };

  test('It should do nothing if form is empty', async () => {
    const { validateButton, onSubmit } = setUp();

    fireEvent.click(validateButton);

    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  test('It should do nothing if form is invalid', async () => {
    const { validateButton, onSubmit, emailInput } = setUp();

    fireEvent.change(emailInput, { target: { value: 'wrongemail' } });
    fireEvent.click(validateButton);

    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  test('It should call onSubmit', async () => {
    const { validateButton, onSubmit, emailInput } = setUp();

    fireEvent.change(emailInput, { target: { value: 'good@email' } });
    fireEvent.click(validateButton);

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ email: 'good@email' }, expect.anything()));
  });
});
