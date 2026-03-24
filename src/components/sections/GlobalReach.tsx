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
            <svg viewBox="0 0 1000 500" className="w-full opacity-20" fill="none">
              <path d="M80 80L200 60L240 90L260 140L230 180L200 200L170 220L140 210L110 190L90 160L70 130Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M170 240L210 230L230 260L220 320L200 370L180 380L160 350L150 300L155 260Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M430 70L490 60L520 80L510 110L480 120L450 115L430 100Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M440 140L500 130L530 160L540 220L520 290L490 320L460 310L440 270L430 200L435 160Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M520 60L700 50L780 80L800 130L760 160L700 170L640 150L580 140L540 120L520 90Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M630 160L660 155L670 200L650 240L630 230L620 190Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.7"/>
              <path d="M720 160L760 155L780 180L760 200L730 195Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              <path d="M760 280L840 270L870 300L860 350L820 370L780 360L750 330L745 300Z" stroke="#10B981" strokeWidth="1" fill="#1F2937" fillOpacity="0.5"/>
              {[100,200,300,400].map(y=><line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#10B981" strokeOpacity="0.04" strokeWidth="1"/>)}
              {[200,400,600,800].map(x=><line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#10B981" strokeOpacity="0.04" strokeWidth="1"/>)}
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
