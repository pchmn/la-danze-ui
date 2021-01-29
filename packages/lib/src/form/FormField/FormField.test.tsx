import { TextField } from "@material-ui/core";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../Form/Form";
import { FormField } from "./FormField";

describe('<FormControl />', () => {

  const Container = ({ onSubmit }: { onSubmit: any }) => {
    const form = useForm();

    return (
      <>
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormField id="email" name="email" as={TextField} rules={{ required: { value: true, message: 'Email is required' }, pattern: { value: /^\S+@\S+$/, message: 'Email format is wrong' } }} label="Email" />

          <label htmlFor="customInput">Custom Input</label>
          <FormField name="customInput" rules={{ required: { value: true, message: 'Custom Input is required' } }} as={
            <input id="customInput" type="text" />
          } />
          <p>{form.errors.customInput?.message}</p>

          <button type="submit">
            Validate
          </button>
        </Form>
      </>
    );
  };

  const setUp = () => {
    const onSubmit = jest.fn();
    const container = render(<Container onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText('Email');
    const customInput = screen.getByLabelText('Custom Input');
    const validateButton = screen.getByText('Validate');

    return { emailInput, customInput, onSubmit, validateButton, ...container };
  };

  test('It should show fields', async () => {
    const { emailInput, customInput } = setUp();

    expect(emailInput).toBeTruthy();
    expect(customInput).toBeTruthy();
  });

  test('It should show required messages', async () => {
    const { validateButton, onSubmit } = setUp();

    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeTruthy();
      expect(screen.getByText('Custom Input is required')).toBeTruthy();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test('It should show format error message', async () => {
    const { validateButton, emailInput, onSubmit } = setUp();

    fireEvent.change(emailInput, { target: { value: 'wrongemail' } });
    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText('Email format is wrong')).toBeTruthy();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test('It should show form values', async () => {
    const { validateButton, emailInput, customInput, onSubmit } = setUp();

    fireEvent.change(emailInput, { target: { value: 'good@email' } });
    fireEvent.change(customInput, { target: { value: 'custom value' } });
    fireEvent.click(validateButton);

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ email: 'good@email', customInput: 'custom value' }, expect.anything()));
  });

});