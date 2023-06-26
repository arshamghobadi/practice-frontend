'use client';
import Image from 'next/image';
import React from 'react';
import Modal from './components/Modal';

type Props = {};

export default function Parctice2({}: Props) {
  return (
    <div className=" h-screen bg-gray-200">
      <div>
        <Image
          className="w-full"
          src="/images/practice-2/bg-sidebar-mobile.svg"
          alt="mobile pic"
          width={500}
          height={100}
        />
        <Modal />
      </div>
    </div>
  );
}
