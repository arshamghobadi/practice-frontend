'use client';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';

import InfoInput from './components/InfoInput';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { log } from 'console';

enum Steps {
  info,
  plan,
  add,
  finish,
}
export default function Parctice2() {
  const [step, setStep] = useState(Steps.info);
  console.log(step);
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      number: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    onNext();
  };
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === Steps.finish) {
      return 'confirm';
    }
    return 'next';
  }, [step]);
  const secondaryActionLabel = useMemo(() => {
    if (step === Steps.info) {
      return undefined;
    }
    return 'Go Back';
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col space-y-3">
      <Header
        h2="personal Info"
        label="please provide your name, email address,and phone number"
      />
      <InfoInput label="Name" placeholder="e.g stephen King" />
      <InfoInput
        label="Email Address"
        type="password"
        placeholder="e.g stephenKing@lorem.com"
      />
      <InfoInput label="Phone Number" placeholder="e.g. +1 234 567 890" />
    </div>
  );

  if (step === Steps.plan) {
    bodyContent = (
      <div className="flex flex-col space-y-3">
        <Header
          h2="personal Info"
          label="please provide your name, email address,and phone number"
        />
      </div>
    );
  }
  return (
    <div className=" h-screen bg-gray-200 relative">
      <div>
        <div>
          <Image
            className="w-full"
            src="/images/practice-2/bg-sidebar-mobile.svg"
            alt="mobile pic"
            width={500}
            height={100}
          />
        </div>
        <Modal
          step={step}
          onSubmit={handleSubmit(onSubmit)}
          actionLabel={actionLabel}
          secondartActionLabel={secondaryActionLabel}
          secondartAction={step === Steps.info ? undefined : onBack}
          body={bodyContent}
          selected={step}
        />
      </div>
    </div>
  );
}
