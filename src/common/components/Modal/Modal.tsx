import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { IconRemove } from '../Icons/Icons';

interface IProps {
  children: ReactNode;
  modalOpen: boolean;
  handleModal: () => void;
}

const Modal = ({ children, modalOpen = false, handleModal }: IProps) => {
  return (
    <div
      className={clsx(
        'fixed z-50 top-0 w-full h-full bg-gray-700 bg-opacity-50',
        { hidden: !modalOpen }
      )}
    >
      <div className="flex w-full h-full justify-center items-center mx-auto my-auto">
        <div className="h-4/6 w-7/12 bg-white rounded-md px-5 py-5">
          <div className="flex justify-end w-full h-8">
            <IconRemove handleModal={handleModal} />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
