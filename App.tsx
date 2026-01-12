import React from 'react';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import { Calendar, MapPin, Clock, Phone, Mail } from 'lucide-react';

const UpcomingEvents = () => (
  <section id="agenda" className="bg-pastel-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-heading font-bold text-pastel-800 mb-10 text-center uppercase tracking-widest">
        Agenda
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Hieronder vind je een overzicht van geplande workshops waarin we de methodes van Thuiskomen in de praktijk brengen.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border-b-4 border-pastel-400">
            <div className="text-pastel-600 font-bold text-lg mb-2">Thuiskomen Basis</div>
            <div className="space-y-3 text-gray-600 text-sm mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Zaterdag, 12 Oktober</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>10:00 - 16:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Veluwe, Gelderland</span>
              </div>
            </div>
            <button className="w-full py-2 border border-pastel-500 text-pastel-600 font-semibold rounded hover:bg-pastel-50 transition-colors">
              Reserveren
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-pastel-900 text-pastel-100 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <span className="font-bold text-2xl tracking-widest block mb-6">THUISKOMEN</span>
          <p className="opacity-80 leading-relaxed max-w-sm">
             Thuiskomen is de plek waar je weer verbinding maakt met wie je werkelijk bent. Waar je mag vertragen, voelen, ademen en landen.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6 text-white">Contactgegevens</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
               <div className="bg-pastel-800 p-2 rounded-full">
                 <Mail className="w-5 h-5 text-pastel-300" />
               </div>
               <a href="mailto:info@thuiskomen.net" className="hover:text-white transition-colors">info@thuiskomen.net</a>
            </div>
            <div className="flex items-center space-x-3">
               <div className="bg-pastel-800 p-2 rounded-full">
                 <Phone className="w-5 h-5 text-pastel-300" />
               </div>
               <a href="tel:+31653181298" className="hover:text-white transition-colors">+31 6 53181298</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-pastel-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
        <div>&copy; 2024 Thuiskomen.net. Alle rechten voorbehouden.</div>
        <div className="mt-4 md:mt-0">Ontwikkeld met natuurlijke aandacht.</div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ContentSection />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default App;