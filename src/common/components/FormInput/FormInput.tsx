import { InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import './form-input.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  type?: 'text' | 'number' | 'password';
  isRequired?: boolean;
  labelClass?: string;
  inputClass?: string;
  hasAsterisk?: boolean;
  errors?: any;
  autoComplete?: string;
}

const FormInput = ({
  register,
  label,
  name,
  type = 'text',
  isRequired = false,
  labelClass,
  inputClass,
  hasAsterisk = isRequired,
  errors,
  autoComplete = 'off',
}: IProps) => {
  return (
    <div>
      <label className={labelClass}>
        {label} {isRequired && hasAsterisk && '*'}
      </label>
      <input
        className={inputClass}
        type={type}
        required={isRequired}
        {...register(name)}
        autoComplete={autoComplete}
      />
      <div className="text-red-700">{errors}</div>
    </div>
  );
};

export default FormInput;
