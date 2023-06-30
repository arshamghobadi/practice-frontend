import React, { useState } from 'react';

interface AddInputProps {
  service: string;
  discrip: string;
  plan: number;
  monthly: boolean;
}
const AddInput: React.FC<AddInputProps> = ({
  service,
  discrip,
  plan,
  monthly,
}) => {
  const [check, setCheck] = useState(false);
  console.log(check);

  return (
    <div
      className={`flex items-center px-4 py-2 rounded-lg justify-between
  ${check ? 'border border-blue-600' : 'border'}
      ${check ? ' bg-blue-100' : ' bg-white'}
  `}
    >
      <input
        onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
          setCheck(!!e.currentTarget.checked)
        }
        className=" w-6 h-6 rounded-3xl"
        type="checkbox"
      />
      <div className="flex-1 pl-4">
        <p className=" font-bold">{service}</p>
        <p>{discrip}</p>
      </div>
      <div>
        +${plan}/{!monthly ? 'mo' : 'yr'}
      </div>
    </div>
  );
};

export default AddInput;
