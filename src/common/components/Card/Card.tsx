import { ReactNode } from 'react';

interface IProps {
  width?: string;
  height?: string;
  otherClass?: string;
  children?: ReactNode;
}

const Card = ({
  width = 'w-52',
  height = 'h-52',
  otherClass,
  children,
}: IProps) => {
  return (
    <div
      className={`block p-6 shadow-lg bg-white ${width} ${height} ${otherClass}`}
    >
      {children}
    </div>
  );
};

export default Card;
