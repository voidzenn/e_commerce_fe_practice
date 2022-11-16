import { FormEvent, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Option extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string | number;
}

interface IProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  options: Option[];
  value: string;
  label?: string;
  isRequired?: boolean;
  labelClass?: string;
  selectClass?: string;
  errors?: any;
  onChange: any;
}

const FormSelect = ({
  name,
  label,
  isRequired = false,
  labelClass,
  selectClass,
  options,
  value,
  register,
  errors,
}: IProps) => {
  return (
    <div>
      <label className={labelClass}>
        {label} {isRequired && '*'}
      </label>
      <select
        className={selectClass}
        {...register(name)}
        onChange={() => onchange}
      >
        {options.map((option: Option, index: number) => {
          return (
            <option key={index} value={value}>
              {option.name}
            </option>
          );
        })}
      </select>
      <div className="text-red-700">{errors}</div>
    </div>
  );
};

export default FormSelect;
