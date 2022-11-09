import { ReactNode } from 'react';

interface IProps {
  width?: string;
  height?: string;
  otherProps?: string;
  children?: ReactNode;
}

const Card = ({
  width = 'w-52',
  height = 'h-52',
  otherProps,
  children,
}: IProps) => {
  return (
    <div
      className={`block p-6 shadow-lg bg-white ${width} ${height} ${otherProps}`}
    >
      {children}
    </div>
  );
};

export default Card;
