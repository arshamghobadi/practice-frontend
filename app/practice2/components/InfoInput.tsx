'use client';

interface InfoInputProps {
  label: string;
  type?: string;
  placeholder: string;
}

const InfoInput: React.FC<InfoInputProps> = ({
  label,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className=" text-blue-950 text-sm">{label}</label>
      <input
        className="border rounded-md mr-2 placeholder:p-3 p-2"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InfoInput;
