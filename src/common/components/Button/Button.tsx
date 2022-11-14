import { ReactNode } from 'react';

interface IProps {
  width?: string;
  height?: string;
  type?: 'button' | 'submit';
  bgColor?: string;
  otherProps?: string;
  children?: ReactNode;
}

const Button = ({
  width = 'w-full',
  height = 'h-14',
  type = 'button',
  bgColor = 'bg-blue-400',
  otherProps,
  children,
}: IProps) => {
  return (
    <button
      type={type}
      className={`btn ${width} ${height} ${bgColor} ${otherProps}`}
    >
      {children}
    </button>
  );
};

export default Button;
