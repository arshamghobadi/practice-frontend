'use client';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import { motion } from 'framer-motion';
import InfoInput from './components/InfoInput';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';

import PlanInput from './components/PlanInput';
import AddInput from './components/AddInput';
import FinishUp from './components/FinishUp';

enum Steps {
  info,
  plan,
  add,
  finish,
}
export default function Parctice2() {
  const [step, setStep] = useState(Steps.info);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  const {
    register,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      arcade: '',
      email: '',
      number: '',
      item: '',
      service: '',
      service1: '',
      service2: '',
    },
  });
  const items = watch('item');

  const serviceValue: string[] = getValues(['service', 'service1', 'service2']);
  console.log(serviceValue);

  const getPlan = getValues('item');
  console.log(getPlan);
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
    <div className="flex flex-col space-y-5">
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
      <div className="flex flex-col space-y-7">
        <Header
          h2="Select your plan"
          label="You have the option of monthly or yearly billing"
        />
        <PlanInput
          monthly={isOn}
          item="Arcade"
          onClick={(item) => setCustomValue('item', item)}
          selected={items === 'Arcade'}
          image="/images/practice-2/icon-arcade.svg"
          alt="arcade image"
          plan={9}
          planDate={isOn ? 'yr' : 'mo'}
          yearPLan={90}
        />
        <PlanInput
          monthly={isOn}
          item="advance"
          onClick={(item) => setCustomValue('item', item)}
          selected={items === 'advance'}
          image="/images/practice-2/icon-advanced.svg"
          alt="advance image"
          plan={12}
          planDate={isOn ? 'yr' : 'mo'}
          yearPLan={120}
        />
        <PlanInput
          monthly={isOn}
          item="pro"
          onClick={(item) => setCustomValue('item', item)}
          selected={items === 'pro'}
          image="/images/practice-2/icon-pro.svg"
          alt="arcade image"
          plan={15}
          yearPLan={150}
          planDate={isOn ? 'yr' : 'mo'}
        />
        <div className="flex items-center justify-evenly bg-blue-50 p-3">
          <div>Monthly</div>
          <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          <div>Yearly</div>
        </div>
      </div>
    );
  }
  if (step === Steps.add) {
    bodyContent = (
      <div className="flex flex-col space-y-7">
        <Header
          h2="Pick add-ons"
          label="Add-ons help enhance your gaming experience"
        />
        <AddInput
          check={false}
          onClick={(item) => setCustomValue('service', item)}
          service="Online sevice"
          discrip="Access to miltiplayer games"
          plan={isOn ? 10 : 1}
          monthly={isOn}
        />
        <AddInput
          onClick={(item) => setCustomValue('service1', item)}
          check={false}
          service="Larger storage"
          discrip="Rxtra 1TB of cloud save"
          plan={isOn ? 20 : 2}
          monthly={isOn}
        />
        <AddInput
          onClick={(item) => setCustomValue('service2', item)}
          check={false}
          service="Customizable profile"
          discrip="custom theme on your profile"
          plan={isOn ? 20 : 2}
          monthly={isOn}
        />
      </div>
    );
  }
  function monthlyPriceHandler(isOn: boolean, getPlan: string) {
    switch (getPlan) {
      case 'Arcade':
        if (isOn) {
          return 90;
        } else {
          return 9;
        }
      case 'advance':
        if (isOn) {
          return 120;
        } else {
          return 12;
        }
      case 'pro':
        if (isOn) {
          return 150;
        } else {
          return 15;
        }
      default:
        return 0; // Return a default value if the plan is not recognized
    }
  }

  if (step === Steps.finish) {
    bodyContent = (
      <div className="flex flex-col space-y-7">
        <Header
          h2="Finishing"
          label="Double-check everything looks ok before confirming"
        />
        <FinishUp
          yearly={isOn}
          plan={getPlan}
          monthlyPrice={monthlyPriceHandler(isOn, getPlan)}
          serviceValue={serviceValue}
        />
      </div>
    );
  }
  return (
    <div className=" h-screen bg-gray-200 relative">
      <div>
        <div>
          <Image
            priority
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
        />
      </div>
    </div>
  );
}
