
import TextField from '@material-ui/core/TextField';
import { waitFor } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { useForm, UseFormMethods } from 'react-hook-form';
import { FormField } from '../FormField/FormField';
import { ReactHookForm } from './ReactHookForm';

const onSubmitMock = jest.fn((values: any) => console.log('form values', values));
let useFormValue: UseFormMethods<any>;
describe('<ReactHookForm /> with no props', () => {
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn((msg) => {
      if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
        return null;
      } else {
        return originalConsoleError(msg);
      }
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  const ContainerWithProps = () => {
    const form = useForm();

    return (
      <ReactHookForm form={form} method="get" action="test" className="className">
        <FormField className="className" name="custom" as={TextField} error={true} type="password" helperText="helper text" disabled label="Password" />
      </ReactHookForm>
    );
  };
  const containerWithProps = mount(<ContainerWithProps />);

  const Container = () => {
    useFormValue = useForm();

    return (
      <ReactHookForm form={useFormValue} onSubmit={useFormValue.handleSubmit(onSubmitMock)}>
        <FormField name="email" as={TextField} rules={{ required: { value: true, message: 'required' }, pattern: { value: /^\S+@\S+$/, message: 'wrong email format' } }} label="Email" />
        <FormField type="password" name="password" as={TextField} rules={{ required: { value: true, message: 'required' }, minLength: { value: 8, message: 'password too short' } }} label="Password" />
        <FormField type="number" name="age" as={TextField} rules={{ required: { value: true, message: 'required' }, min: { value: 18, message: 'you must be 18' }, max: { value: 99, message: 'you are too old' } }} label="Age" />

        <button type="submit">
          Validate
        </button>
      </ReactHookForm>
    );
  };
  const container = mount(<Container />);

  const form = container.find('form');

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should preserve props of <form> and FormField', () => {
    // Form
    expect(containerWithProps.find('form').first().props()).toEqual(expect.objectContaining({
      method: 'get',
      action: 'test',
      className: 'className'
    }));
    // Formfield
    expect(containerWithProps.find(FormField).first().props()).toEqual(expect.objectContaining({
      name: 'custom',
      className: 'className',
      type: 'password',
      error: true,
      helperText: 'helper text',
      disabled: true,
      as: TextField,
      label: 'Password'
    }));
  });

  it('should add proper props to FormField automatically', () => {
    const formFields = container.find(FormField);

    formFields.forEach(wrapper => {
      expect(wrapper.props()).toEqual(expect.objectContaining({
        control: useFormValue.control,
        error: Boolean(useFormValue?.errors[wrapper.prop('name')]?.type),
        helperText: useFormValue?.errors[wrapper.prop('name')]?.message,
        disabled: undefined
      }));
    });

    // Email
    expect(formFields.first().props()).toEqual(expect.objectContaining({
      name: 'email',
      as: TextField,
      label: 'Email',
      rules: { required: { value: true, message: 'required' }, pattern: { value: /^\S+@\S+$/, message: 'wrong email format' } }
    }));

    // Password
    expect(formFields.at(1).props()).toEqual(expect.objectContaining({
      name: 'password',
      as: TextField,
      label: 'Password',
      rules: { required: { value: true, message: 'required' }, minLength: { value: 8, message: 'password too short' } }
    }));

    // Age
    expect(formFields.at(2).props()).toEqual(expect.objectContaining({
      name: 'age',
      as: TextField,
      label: 'Age',
      rules: { required: { value: true, message: 'required' }, min: { value: 18, message: 'you must be 18' }, max: { value: 99, message: 'you are too old' } }
    }));
  });

  test('it should check mandatory fields', async () => {
    // Simulate submit
    await waitFor(() => form.simulate('submit'))
    container.update();

    // Check errors
    // All fields mandatory
    container.find(FormField).forEach(wrapper => {
      expect(wrapper.props()).toEqual(expect.objectContaining({
        error: true,
        helperText: 'required'
      }));
    });
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  test('it should check other errors', async () => {
    const inputs = container.find('input');
    inputs.first().simulate('change', {
      target: { value: 'wrongemail' }
    });
    inputs.at(1).simulate('change', {
      target: { value: '1234567' }
    });
    inputs.at(2).simulate('change', {
      target: { value: 17 }
    });
    // Simulate submit
    await waitFor(() => form.simulate('submit'))
    container.update();

    // Check errors
    const formFields = container.find(FormField);
    expect(formFields.first().props()).toEqual(expect.objectContaining({
      error: true,
      helperText: 'wrong email format'
    }));
    expect(formFields.at(1).props()).toEqual(expect.objectContaining({
      error: true,
      helperText: 'password too short'
    }));
    expect(formFields.at(2).props()).toEqual(expect.objectContaining({
      error: true,
      helperText: 'you must be 18'
    }));
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  test('it should check other errors 2', async () => {
    container.find('input[name="age"]').first().simulate('change', {
      target: { value: 100 }
    });
    // Simulate submit
    await waitFor(() => form.simulate('submit'))
    container.update();

    // Check errors
    expect(container.find(FormField).at(2).props()).toEqual(expect.objectContaining({
      error: true,
      helperText: 'you are too old'
    }));
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  test('it should call onSubmit function', async () => {
    const inputs = container.find('input');
    inputs.first().simulate('change', {
      target: { value: 'good@email' }
    });
    inputs.at(1).simulate('change', {
      target: { value: '12345678' }
    });
    inputs.at(2).simulate('change', {
      target: { value: 20 }
    });
    // Simulate submit
    await waitFor(() => form.simulate('submit'))
    container.update();

    // Check onSubmit callback
    expect(onSubmitMock).toHaveBeenCalled();
    expect(onSubmitMock.mock.calls[0][0]).toEqual({ email: 'good@email', password: '12345678', age: 20 });
  });
});