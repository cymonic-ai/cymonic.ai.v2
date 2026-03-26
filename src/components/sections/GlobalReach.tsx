import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../ui/FadeUp';
import { GLOBAL_CITIES } from '../../constants/content';

const GlobalReach: React.FC = () => {
  const [hovered, setHovered] = useState<string|null>(null);
  return (
    <section className="py-24 md:py-32 bg-graphite overflow-hidden relative">
      <div className="absolute inset-0 hex-pattern opacity-50 pointer-events-none"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald/5 rounded-full blur-3xl pointer-events-none"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-emerald inline-block"/>
              Global Reach
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mt-2 mb-4">
              One Engineering Base. <span className="text-emerald">Six Global Markets.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/45 text-base max-w-xl mx-auto">
              Headquartered in Kochi, India — delivering enterprise AI engineering across North America, the Middle East, and Asia-Pacific.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.3}>
          <div className="relative w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 1000 550" className="w-full opacity-25" fill="none">
              {/* North America */}
              <path d="M50 80L100 70L120 100L140 130L130 160L110 170L80 150L60 110Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              {/* Central America & Caribbean */}
              <path d="M120 180L135 185L140 200L130 210L120 205Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.4"/>
              {/* South America */}
              <path d="M110 220L140 210L155 240L160 290L150 340L130 360L100 340L95 280L105 240Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* Europe */}
              <path d="M350 60L400 55L420 75L410 100L370 110L350 90Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              {/* Africa */}
              <path d="M390 110L450 100L480 120L490 180L500 250L480 300L450 310L420 280L410 200L400 150L390 120Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* Middle East */}
              <path d="M480 130L520 125L540 160L530 200L500 190L490 150Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* Russia & Central Asia */}
              <path d="M480 70L600 60L650 80L660 120L620 130L550 110L500 100Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* South Asia */}
              <path d="M590 160L630 155L650 180L640 210L610 220L595 200Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* Southeast Asia */}
              <path d="M650 190L700 185L720 220L710 250L670 245L655 210Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* East Asia */}
              <path d="M700 70L800 65L820 100L800 140L750 135L720 100Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* Australia */}
              <path d="M780 280L820 275L840 310L820 340L780 335Z" stroke="#10B981" strokeWidth="1.5" fill="#1F2937" fillOpacity="0.6"/>
              
              {/* New Zealand */}
              <path d="M860 330L875 325L880 355L865 360Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.4"/>
              
              {/* Grid lines */}
              {[100,150,200,250,300,350,400,450,500].map(y=><line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="#10B981" strokeOpacity="0.03" strokeWidth="1"/>)}
              {[100,200,300,400,500,600,700,800,900].map(x=><line key={`v${x}`} x1={x} y1="0" x2={x} y2="550" stroke="#10B981" strokeOpacity="0.03" strokeWidth="1"/>)}
            </svg>
            <div className="absolute inset-0">
              {GLOBAL_CITIES.map((city,i) => (
                <motion.div key={city.name}
                  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                  transition={{delay:0.4+i*0.12,duration:0.4,ease:'backOut'}}
                  className="absolute" style={{left:`${city.x}%`,top:`${city.y}%`,transform:'translate(-50%,-50%)'}}
                  onMouseEnter={() => setHovered(city.name)} onMouseLeave={() => setHovered(null)}>
                  {city.hq && (
                    <motion.div className="absolute rounded-full border-2 border-emerald"
                      animate={{scale:[1,2.5],opacity:[0.6,0]}} transition={{repeat:Infinity,duration:2,ease:'easeOut'}}
                      style={{width:14,height:14,top:-2,left:-2}}/>
                  )}
                  <div className={`rounded-full cursor-pointer transition-all duration-200
                    ${city.hq?'w-3.5 h-3.5 bg-emerald shadow-lg shadow-emerald/50':'w-2.5 h-2.5 bg-emerald/55 hover:bg-emerald'}`}/>
                  {hovered === city.name && (
                    <motion.div initial={{opacity:0,y:4}} animate={{opacity:1,y:0}}
                      className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1.5 shadow-xl whitespace-nowrap z-10">
                      <p className="text-graphite text-xs font-bold">{city.name}</p>
                      {city.hq && <p className="text-emerald text-xs">HQ</p>}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {GLOBAL_CITIES.map((city) => (
              <div key={city.name} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${city.hq?'bg-emerald':'bg-emerald/35'}`}/>
                <span className={`text-sm ${city.hq?'text-emerald font-semibold':'text-white/45'}`}>
                  {city.name}{city.hq?' (HQ)':''}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
export default GlobalReach;
