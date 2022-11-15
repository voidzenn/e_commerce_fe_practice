import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  isRequired?: boolean;
  labelClass?: string;
  inputClass?: string;
  hasAsterisk?: boolean;
  register: UseFormRegister<FieldValues>;
  name: string;
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
      />
    </div>
  );
};

export default FormInput;
