'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Success: React.FC = () => {
  const router = useRouter();

  const handleDismiss = () => {
    // Redirect to the main page
    router.push('/');
  };
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className=" bg-white w-[32vw] rounded-2xl p-8 text-[#37384e] space-y-3">
        <Image
          src="/images/practice-1/icon-success.svg"
          alt="tick icon"
          width={25}
          height={25}
        />
        <h2 className=" font-bold text-2xl">Thanks for subscribing!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id
          enim soluta quod non dolorum tempore
        </p>
        <button
          onClick={handleDismiss}
          className="border rounded-lg bg-[#37384e] text-white p-2 w-full text-[10px]"
        >
          Dissmiss maeeage
        </button>
      </div>
    </div>
  );
};

export default Success;
