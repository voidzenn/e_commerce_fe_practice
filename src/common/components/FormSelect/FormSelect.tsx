interface Option {
  name: string;
  value: string | number;
}

interface IProps {
  label?: string;
  isRequired?: boolean;
  labelClass?: string;
  selectClass?: string;
  options: Option[];
}

const FormSelect = ({
  label,
  isRequired = false,
  labelClass,
  selectClass,
  options,
}: IProps) => {
  return (
    <div>
      <label className={labelClass}>
        {label} {isRequired && '*'}
      </label>
      <select className={selectClass}>
        {options.map((option: Option, index: number) => {
          return <option key={index}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default FormSelect;
