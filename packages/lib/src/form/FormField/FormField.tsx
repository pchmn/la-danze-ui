import React from "react";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";

type NativeInputs = 'input' | 'select' | 'textarea';

type Props = ControllerProps<React.ReactElement | React.ComponentType<any> | NativeInputs, FieldValues> & FormProps;

type FormProps = {
  name: string;
  className?: string;
  label?: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

export function FormField({ defaultValue = '', ...props }: Props): JSX.Element {
  return (
    <Controller
      defaultValue={defaultValue}
      {...props}
    />
  );

}