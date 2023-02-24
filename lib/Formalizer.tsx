import * as React from 'react';
import { Controller, FieldErrors, Control } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';

interface Props<T> {
  name: string;
  control: Control;
  defaultValue?: boolean;
  required?: boolean | string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  errors?: any;
  children: React.ReactElement;
}

const styles = {
  error: {
    color: 'red',
    fontSize: 10,
    margin: 0,
  },
};

export const Formalizer = <T extends unknown>({
  name,
  control,
  defaultValue,
  required,
  errors,
  children,
  ...rest
}: Props<T>) => (
  <div>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required }}
      render={({ field }) =>
        React.cloneElement(children, {
          ...field,
          // error: errors[name] ? errors[name].message : undefined,
          ...rest,
        })
      }
    />
    {/* <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) =>
        message ? <p style={styles.error}>{message}</p> : null
      }
    /> */}
  </div>
);

interface CreateFormalizer {
  control: any;
  errors: FieldErrors;
}

interface PartialFormalizer {
  name: string;
  defaultValue?: boolean;
  required?: boolean | string;
  disabled?: boolean;
  children: React.ReactElement;
}

export const createFormalizer =
  ({ control, errors }: CreateFormalizer) =>
  // eslint-disable-next-line react/display-name
  ({
    name,
    defaultValue,
    required,
    disabled,
    children,
    ...rest
  }: PartialFormalizer) =>
    (
      <Formalizer
        name={name}
        control={control}
        defaultValue={defaultValue}
        required={required}
        errors={errors}
        {...rest}>
        {children}
      </Formalizer>
    );
