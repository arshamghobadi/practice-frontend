'use client';

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disable,
  outline,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`
   relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md select-none
   hover:opacity-80 transition w-full 
   ${outline ? 'bg-white' : 'bg-blue-950'}
   ${outline ? ' text-gray-200' : 'text-white'}
   ${outline ? ' border-none' : ''}
   
   ${small ? 'py-1' : 'py-3'}
   ${small ? 'text-sm' : 'text-md'}
   ${small ? 'font-light' : 'font-semibold'}
   ${small ? 'border-[1px]' : 'border-2'}
`}
    >
      {label}
    </button>
  );
};

export default Button;
