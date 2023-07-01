'use client';

interface AddInputProps {
  onClick: (value: string) => void;
  service: string;
  discrip: string;
  plan: number;
  monthly: boolean;
  check: boolean;
}
const AddInput: React.FC<AddInputProps> = ({
  service,
  discrip,
  plan,
  monthly,
  onClick,
  check,
}) => {
  return (
    <div
      className={`flex items-center px-4 py-2 rounded-lg justify-between
  ${check ? 'border border-blue-600' : 'border'}
      ${check ? ' bg-blue-100' : ' bg-white'}
  `}
    >
      <input
        onClick={() => onClick(service)}
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
