import React from 'react';

interface HeaderProps {
  h2: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ h2, label }) => {
  return (
    <div className=" space-y-3">
      <h2 className=" font-bold text-2xl text-blue-900">{h2}</h2>
      <label className=" text-gray-400">{label}</label>
    </div>
  );
};

export default Header;