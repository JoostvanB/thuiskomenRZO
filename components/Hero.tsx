import React from 'react';
import LogoBox from './LogoBox';
import Navigation from './Navigation';
import { BadgeCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-gray-100 overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-pastel-900/10"></div>
      </div>

      <LogoBox />
      <Navigation />

      {/* Main Hero Content Area */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-24 md:pb-32">
        
        {/* CTA Button */}
        <div className="ml-0 md:ml-20 mb-12">
           <a href="#contact" className="inline-block bg-pastel-500 hover:bg-pastel-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm tracking-wider uppercase">
             Kennismaken
           </a>
        </div>

        {/* Certified Badge */}
        <div className="absolute bottom-10 left-0 md:left-20 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-r-lg shadow-sm flex items-center space-x-3">
          <BadgeCheck className="w-8 h-8 text-pastel-600" />
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold uppercase tracking-wider text-sm">Thuiskomen</span>
            <span className="text-gray-500 text-xs font-semibold uppercase">Official Method</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;