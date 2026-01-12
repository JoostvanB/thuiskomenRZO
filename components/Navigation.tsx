import React from 'react';
import { User, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="absolute top-0 right-0 z-20 p-6 md:p-8 w-full flex justify-end items-center">
      {/* Mobile Menu Icon (Visible only on small screens) */}
      <button className="md:hidden text-pastel-800 bg-white/80 p-2 rounded-full mr-4 shadow-lg">
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10 text-white font-bold text-lg tracking-wide drop-shadow-md">
        <a href="#welkom" className="hover:text-pastel-200 transition-colors uppercase">Welkom</a>
        <a href="#voor-wie" className="hover:text-pastel-200 transition-colors uppercase">Voor wie</a>
        <a href="#aanbod" className="hover:text-pastel-200 transition-colors uppercase">Aanbod</a>
        <a href="#over-mij" className="hover:text-pastel-200 transition-colors uppercase">Over mij</a>
        <a href="#contact" className="hover:text-pastel-200 transition-colors uppercase">Contact</a>
        
        <a href="#login" className="text-white hover:text-pastel-200 transition-colors">
          <User className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;