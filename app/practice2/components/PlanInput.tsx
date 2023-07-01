'use client';

import Image from 'next/image';
interface PlanInput {
  yearPLan: number;
  monthly: boolean;
  item: string;
  plan: number;
  image: string;
  planDate: string;
  alt: string;
  selected?: boolean;
  onClick: (value: string) => void;
}
const PlanInput: React.FC<PlanInput> = ({
  item,
  plan,
  image,
  planDate,
  alt,
  onClick,
  selected,
  monthly,
  yearPLan,
}) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={` p-5 flex gap-4 rounded-xl
      ${selected ? 'border border-blue-600' : 'border'}
      ${selected ? ' bg-blue-100' : ' bg-white'}
      `}
    >
      <Image priority src={image} alt={alt} width={45} height={45} />
      <div className="">
        <p>{item}</p>
        <span>
          ${!monthly ? plan : yearPLan}/{planDate}
        </span>
        <div>{monthly ? '2 months free' : null}</div>
      </div>
    </div>
  );
};

export default PlanInput;
