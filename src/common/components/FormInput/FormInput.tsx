import { useState } from 'react';
import { ReactNode } from 'react';
import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeHolder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  type?: 'text' | 'number' | 'password';
  isRequired?: boolean;
  labelClass?: string;
  inputClass?: string;
  hasAsterisk?: boolean;
  errors?: any;
  autoComplete?: string;
  onKeyDown?: any;
  rightIcon?: ReactNode;
}

const FormInput = ({
  register,
  label,
  name,
  placeHolder,
  type = 'text',
  isRequired = false,
  labelClass,
  inputClass,
  hasAsterisk = isRequired,
  errors,
  autoComplete = 'off',
  onKeyDown,
  rightIcon,
}: IProps) => {
  const [controlledType, setControlledType] = useState<string>('text');

  const isPassword = type === 'password';

  const handlePassword = (e: any) => {
    if (isPassword) {
      controlledType === 'text' && setControlledType('password');
    }
  };

  return (
    <div>
      <label className={labelClass}>
        {label} {isRequired && hasAsterisk && '*'}
      </label>
      {rightIcon && <div className="absolute right-10">{rightIcon}</div>}
      <input
        placeholder={placeHolder}
        className={inputClass}
        type={isPassword ? controlledType : type}
        required={isRequired}
        {...register(name)}
        autoComplete={autoComplete}
        onKeyUp={handlePassword}
        onKeyDown={onKeyDown}
      />
      <div className="text-red-700">{errors}</div>
    </div>
  );
};

export default FormInput;
