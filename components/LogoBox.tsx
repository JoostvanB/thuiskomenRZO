import React from 'react';
import { Leaf } from 'lucide-react';

const LogoBox: React.FC = () => {
  return (
    <div className="absolute top-0 left-4 md:left-24 z-30 bg-white shadow-lg p-6 rounded-b-lg w-32 h-36 flex flex-col items-center justify-center text-center">
      <div className="bg-pastel-100 p-2 rounded-full mb-2">
        <Leaf className="w-8 h-8 text-pastel-600" />
      </div>
      <span className="text-xs font-bold text-gray-600 leading-tight tracking-wider">
        THUIS<br/>KOMEN
      </span>
      <div className="w-8 h-0.5 bg-pastel-400 mt-2"></div>
    </div>
  );
};

export default LogoBox;