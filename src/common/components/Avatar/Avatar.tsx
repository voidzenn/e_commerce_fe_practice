import clsx from 'clsx';
import { useMemo } from 'react';

interface IProps {
  src: string;
  shape: 'circle' | 'square';
  size: string;
  className?: string;
  alt?: string;
}

const Avatar = ({ src, shape, size, className, alt = 'avatar' }: IProps) => {
  return (
    <>
      <img className={clsx(className, shape, size)} alt={alt} src={src} />
    </>
  );
};

export default Avatar;
