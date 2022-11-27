import clsx from 'clsx';
import Spinner from '../Icons/Spinner/Spinner';

interface IProps {
  isHidden: boolean;
}

const FullPageSpinner = ({ isHidden = true }: IProps) => {
  return (
    <div
      className={clsx(
        { hidden: isHidden },
        'flex h-full w-full justify-center items-center absolute bg-white'
      )}
    >
      <Spinner size="w-14 h-14" />
    </div>
  );
};

export default FullPageSpinner;
