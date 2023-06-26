'use clinet';
import React, { useCallback } from 'react';

import Button from './Button';

interface ModalProps {
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondartAction?: () => void;
  secondartActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  onSubmit,
  title,
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
      <div className=" relative  bg-white m-4 -top-20 p-4">
        <div>
          asd
          {title}
        </div>
        <div>{body}asd</div>
        <div>{footer}asd</div>
      </div>
      <Button label={actionLabel} disable={disabled} onClick={handleSubmit} />
    </>
  );
};

export default Modal;
