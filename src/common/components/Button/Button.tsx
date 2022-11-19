import { ReactNode } from 'react';

interface IProps {
  width?: string;
  height?: string;
  type?: 'button' | 'submit';
  bgColor?: string;
  otherProps?: string;
  children?: ReactNode;
  isDisabled?: boolean;
}

const Button = ({
  width = 'w-full',
  height = 'h-14',
  type = 'button',
  bgColor = 'bg-blue-400',
  otherProps,
  children,
  isDisabled = false,
}: IProps) => {
  return (
    <button
      type={type}
      className={`btn ${width} ${height} ${bgColor} ${otherProps}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
