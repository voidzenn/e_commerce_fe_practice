interface IProps {
  label?: string;
  name: string;
  type?: string;
  isRequired?: boolean;
  labelClass?: string;
  inputClass?: string;
  hasAsterisk?: boolean;
}

const FormInput = ({
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
        name={name}
        type={type}
        required={isRequired}
      />
    </div>
  );
};

export default FormInput;
