import { ReactNode } from 'react';

interface IProps {
  width?: string;
  height?: string;
  type?: 'button' | 'submit';
  bgColor?: string;
  className?: string;
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  width = 'w-full',
  height = 'h-14',
  type = 'button',
  bgColor = 'bg-blue-400',
  className,
  children,
  isDisabled = false,
  onClick,
}: IProps) => {
  return (
    <button
      type={type}
      className={`btn ${width} ${height} ${bgColor} ${className}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
