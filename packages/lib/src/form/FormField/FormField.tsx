import React from "react";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";

type NativeInputs = 'input' | 'select' | 'textarea';

export type FormFieldProps = ControllerProps<React.ReactElement | React.ComponentType<any> | NativeInputs, FieldValues> & MuiProps;

export interface MuiProps {
  name: string;
  className?: string;
  label?: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

export interface ComponentFormFieldProps extends MuiProps, React.RefAttributes<any> {
  id?: string;
  value: any;
  onChange: (event: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export function FormField({ defaultValue = '', ...props }: FormFieldProps): JSX.Element {

  return (
    <Controller
      defaultValue={defaultValue}
      {...props}
    />
  );

}
