'use clinet';
import React, { useCallback } from 'react';

import Button from './Button';

interface ModalProps {
  onSubmit: () => void;
  step: number;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondartAction?: () => void;
  secondartActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  onSubmit,
  step,
  disabled,
  body,
  footer,
  actionLabel,
  secondartAction,
  secondartActionLabel,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondartAction) {
      return;
    }
    secondartAction();
  }, [disabled, secondartAction]);
  return (
    <>
      <div className="flex justify-between w-44 absolute  top-16 right-[150px]">
        <div
          className={`w-8 h-8 flex z-10  items-center justify-center border border-white rounded-full
            ${step === 0 ? ' bg-cyan-100' : ' bg-transparent'}
            `}
        >
          1
        </div>
        <div
          className={`w-8 h-8 flex z-10  items-center justify-center border border-white rounded-full
          ${step === 1 ? ' bg-cyan-100' : ' bg-transparent'}
            `}
        >
          2
        </div>
        <div
          className={`w-8 h-8 flex z-10  items-center justify-center border border-white rounded-full
            ${step === 3 ? ' bg-cyan-100' : ' bg-transparent'}
            `}
        >
          3
        </div>
        <div
          className={`w-8 h-8 flex z-10  items-center justify-center border border-white rounded-full
            ${step === 4 ? ' bg-cyan-100' : ' bg-transparent'}
            `}
        >
          4
        </div>
      </div>
      <div className=" relative  bg-white m-4 -top-[105px] p-4 rounded-lg">
        <div>{body}</div>
        <div>{footer}</div>
      </div>
      <div className="flex p-4 items-center justify-between gap-8 bg-white">
        <Button
          outline
          label={secondartActionLabel}
          disable={disabled}
          onClick={handleSecondaryAction}
        />
        <Button label={actionLabel} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Modal;
