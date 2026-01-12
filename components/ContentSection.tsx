import React from 'react';
import { Leaf, User, Heart, Wind, Zap } from 'lucide-react';

const ContentSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* SECTIE 1: WELKOM */}
      <section id="welkom" className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-pastel-800 mb-10 text-center">
            Welkom bij Thuiskomen
          </h1>
          
          <div className="prose prose-lg text-gray-600 leading-relaxed text-left mx-auto">
            <p className="mb-4">
              Thuiskomen is de plek waar je weer verbinding maakt met wie je werkelijk bent. 
              Waar je mag vertragen, voelen, ademen en landen. 
              Waar je ruimte maakt voor rust, helderheid en richting.
            </p>
            <p className="mb-4">
              Veel mensen leven vooral vanuit hun hoofd. Ze rennen, regelen, presteren en houden vol. Tot het niet meer gaat. Tot het lichaam signalen geeft. Tot je voelt dat er iets moet veranderen.
            </p>
            <p className="mb-6 font-medium text-pastel-900">
              Thuiskomen helpt je om terug te keren naar jezelf — naar je lichaam, je energie en je essentie.
            </p>
            <p className="mb-8">
              Met een combinatie van <strong>coaching, ademwerk, de Wim Hof Methode en Reiki</strong> begeleid ik je stap voor stap naar meer rust, bewustzijn en innerlijke kracht.
            </p>
            
            <div className="text-center mt-12">
              <a href="#contact" className="inline-block border-2 border-pastel-500 text-pastel-700 font-bold py-3 px-8 rounded-full hover:bg-pastel-50 transition-colors">
                Plan een kennismakingsgesprek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2: VOOR WIE */}
      <section id="voor-wie" className="bg-pastel-50 py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-pastel-800 mb-8">
            Voor wie is Thuiskomen
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-l-8 border-pastel-400">
            <p className="text-lg mb-6 text-gray-700">Thuiskomen is voor jou als je:</p>
            <ul className="space-y-3 mb-8 text-gray-600">
              {[
                "vastloopt in werk of privé",
                "stress, spanning of onrust ervaart",
                "het gevoel hebt jezelf kwijt te zijn",
                "verlangt naar rust, richting en helderheid",
                "voelt dat er meer in je zit dan er nu uitkomt",
                "openstaat voor persoonlijke en spirituele ontwikkeling",
                "wilt leven vanuit je essentie in plaats van vanuit overleven"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Leaf className="w-5 h-5 text-pastel-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-pastel-800 italic">
              Je hoeft het niet alleen te doen. Je bent welkom.
            </p>
            
            <div className="mt-8">
              <a href="#over-mij" className="text-pastel-600 font-bold hover:underline">
                Meer over mij &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 3: AANBOD */}
      <section id="aanbod" className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-pastel-800 mb-12 text-center">
            Wat ik aanbied
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kaart 1 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-pastel-50/30">
              <h3 className="text-xl font-bold text-pastel-700 mb-2">Thuiskomen bij jezelf</h3>
              <div className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">— Individuele trajecten</div>
              <p className="text-gray-600">
                Voor rust, helderheid en persoonlijke groei. Een combinatie van coaching, ademwerk en energetisch werk.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-pastel-50/30">
              <h3 className="text-xl font-bold text-pastel-700 mb-2">Thuiskomen in je lichaam</h3>
              <div className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">— Adem & koude</div>
              <p className="text-gray-600">
                Wim Hof ademtechnieken en lichaamswerk voor veerkracht, ontspanning en energie.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-pastel-50/30">
              <h3 className="text-xl font-bold text-pastel-700 mb-2">Thuiskomen in je energie</h3>
              <div className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">— Reiki & bewustzijn</div>
              <p className="text-gray-600">
                Voor innerlijke rust, balans en het loslaten van spanning.
              </p>
            </div>

            {/* Kaart 4 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-pastel-50/30">
              <h3 className="text-xl font-bold text-pastel-700 mb-2">Thuiskomen in verbinding</h3>
              <div className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">— Teams & organisaties</div>
              <p className="text-gray-600">
                Teamprocessen, samenwerking en veiligheid vanuit bewustzijn en verbinding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 4: WERKWIJZE */}
      <section className="bg-gray-50 py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-pastel-800 mb-8">
            Mijn manier van werken
          </h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed mb-12">
             <p className="italic mb-6 text-gray-500">
               Ik werk rustig, aards, respectvol en met veel aandacht. Geen oordeel, geen haast, geen maskers.
             </p>
             <p className="mb-4">In mijn begeleiding combineer ik:</p>
             <ul className="list-none pl-0 space-y-4">
               {[
                 { title: "Coaching", desc: "voor inzicht, helderheid en richting", icon: User },
                 { title: "Ademwerk", desc: "voor regulatie, ontspanning en lichaamsbewustzijn", icon: Wind },
                 { title: "Wim Hof Methode", desc: "voor veerkracht en energie", icon: Zap },
                 { title: "Reiki", desc: "voor balans, zachtheid en energetische ruimte", icon: Heart },
                 { title: "Bewustzijnswerk", desc: "voor essentie, zingeving en innerlijke groei", icon: Leaf },
               ].map((item, i) => (
                 <li key={i} className="flex items-center">
                   <div className="mr-3 text-pastel-500">
                      <item.icon className="w-5 h-5" />
                   </div>
                   <span><strong>{item.title}</strong> {item.desc}</span>
                 </li>
               ))}
             </ul>
             <p className="mt-8">
               Ik geloof dat iedereen een innerlijk kompas heeft. Soms is het alleen even verstopt onder spanning, overtuigingen of oude patronen. Samen maken we dat kompas weer zichtbaar.
             </p>
          </div>

          <div className="bg-pastel-800 text-white p-8 rounded-xl">
             <h3 className="text-2xl font-heading font-bold mb-4">Waarom kies je voor Thuiskomen</h3>
             <p className="mb-4 text-pastel-100">Thuiskomen is geen eindpunt.</p>
             <p className="text-pastel-50 leading-relaxed">
               Het is een beweging — naar binnen, naar rust, naar waarheid. Het is de plek waar je niet hoeft te presteren. Waar je niet hoeft te voldoen. Waar je mag zijn wie je bent.
             </p>
             <p className="mt-6 font-semibold">Ik loop graag met je mee.</p>
          </div>
        </div>
      </section>

      {/* SECTIE 5: OVER MIJ (RICHARD) */}
      <section id="over-mij" className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img src="./richard.jpg" alt="Richard - Oprichter Thuiskomen" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-heading font-bold text-pastel-800 mb-6">
              Maak kennis met Richard
            </h2>
            <div className="prose text-gray-600 leading-relaxed">
              <p className="mb-4 font-semibold text-gray-800">
                Ik ben Richard, oprichter van Thuiskomen.
              </p>
              <p className="mb-4">
                Mijn leven is altijd een zoektocht geweest naar rust, richting en betekenis. Ik weet hoe het voelt om vast te lopen, om te twijfelen, om jezelf kwijt te zijn. En ik weet ook hoe het voelt om weer thuis te komen — in je lichaam, je energie en je essentie.
              </p>
              <p className="mb-4">
                Door de jaren heen heb ik me verdiept in:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                <li>coaching en persoonlijke ontwikkeling</li>
                <li>Reiki</li>
                <li>de Wim Hof Methode</li>
                <li>teamprocessen en groepsdynamiek</li>
                <li>spiritualiteit en bewustzijnswerk</li>
              </ul>
              <p className="mb-4 italic text-gray-500">
                Niet als losse technieken, maar als één geheel.
              </p>
              <p className="font-medium text-pastel-700">
                Want echte verandering ontstaat wanneer hoofd, hart, lichaam en ziel weer samenwerken.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;