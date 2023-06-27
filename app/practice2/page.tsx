'use client';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import Input from './components/Input';
import InfoInput from './components/InfoInput';

enum Steps {
  info,
  plan,
  add,
  finish,
}
export default function Parctice2() {
  const [step, setStep] = useState(Steps.info);

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
        label="pLease provide your name, email address,and phone number"
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
          <div className="flex justify-between w-44 absolute  top-16 right-[200px]">
            <div className=" w-8 h-8 flex z-10  bg-transparent  items-center justify-center border border-white rounded-full">
              1
            </div>
            <div className=" w-8 h-8 flex z-10  bg-transparent  items-center justify-center border border-white rounded-full">
              2
            </div>
            <div className=" w-8 h-8 flex z-10  bg-transparent  items-center justify-center border border-white rounded-full">
              3
            </div>
            <div className=" w-8 h-8 flex z-10  bg-transparent  items-center justify-center border border-white rounded-full">
              4
            </div>
          </div>
        </div>
        {/* <Modal
        
          //   onSubmit={handleSubmit(onSubmit)}
          actionLabel={actionLabel}
          secondartActionLabel={secondaryActionLabel}
          secondartAction={step === Steps.info ? undefined : onBack}
          body={bodyContent}
        /> */}
      </div>
    </div>
  );
}
