import clsx from 'clsx';
import { useMemo } from 'react';

interface IProps {
  src: string;
  shape: 'circle' | 'square';
  size: string;
  className?: string;
  alt?: string;
  onClick?: any;
  onBlur?: any;
}

const Avatar = ({
  src,
  shape,
  size,
  className,
  alt = 'avatar',
  onClick,
  onBlur,
}: IProps) => {
  return (
    <>
      <img
        className={clsx(className, shape, size)}
        alt={alt}
        src={src}
        onClick={(e) => onClick(e)}
        onBlur={onBlur}
      />
    </>
  );
};

export default Avatar;
