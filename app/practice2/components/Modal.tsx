'use clinet';
import React, { useCallback } from 'react';

import Button from './Button';

interface ModalProps {
  onSubmit: () => void;

  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondartAction?: () => void;
  secondartActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  onSubmit,

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
      <div className=" relative  bg-white m-4 -top-20 p-4 rounded-lg">
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
        <Button label={actionLabel} disable={disabled} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Modal;
