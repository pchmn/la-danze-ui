import React from "react";
import { UseFormMethods } from "react-hook-form";
import { FormField } from "../FormField/FormField";

interface FormProps extends React.FormHTMLAttributes<any> {
  form: UseFormMethods<any> & { onSubmit?: any };
  disabled?: boolean;
}

export function ReactHookForm({ children, form, disabled, ...otherProps }: FormProps): JSX.Element {

  function childrenWithProps() {
    return React.Children.map(children, child => {
      // Check if child is FormikTextField
      if (React.isValidElement(child) && child.type === FormField) {
        return React.cloneElement(child, {
          control: child?.props?.control || form.control,
          error: child?.props?.error || Boolean(form.errors[child.props.name]?.type),
          helperText: child?.props?.helperText || form.errors[child.props.name]?.message,
          disabled: child?.props?.disabled || disabled
        });
      }
      return child;
    });
  }

  return (
    <form {...otherProps}>
      {childrenWithProps()}
    </form>
  );
}