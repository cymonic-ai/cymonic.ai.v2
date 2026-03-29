import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../ui/FadeUp';
import { GLOBAL_CITIES } from '../../constants/content';
import worldMapUrl from '../../assets/world-outline.svg';

const GlobalReach: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string|null>(null);
  const [hoveredCity, setHoveredCity] = useState<string|null>(null);
  
  // For mobile: use active state; For desktop: use hover
  const displayedCity = activeCity || hoveredCity;
  
  const handleCityClick = (cityName: string) => {
    setActiveCity(activeCity === cityName ? null : cityName);
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-graphite overflow-hidden relative">
      <div className="absolute inset-0 hex-pattern opacity-50 pointer-events-none"/>
      {/* Responsive background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[300px] bg-emerald/5 rounded-full blur-3xl pointer-events-none"/>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-3 md:mb-4">
          <FadeUp>
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-emerald inline-block"/>
              Global Reach
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-white font-bold mt-1 mb-1 md:mb-2 text-[clamp(1.6rem,4.2vw,2.4rem)]">
              One Engineering Base. <span className="text-emerald">Six Global Markets.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto px-2">
              Headquartered in Kochi, India — delivering enterprise AI engineering across North America, the Middle East, and Asia-Pacific.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="relative w-full max-w-5xl mx-auto bg-graphite/50 rounded-lg overflow-hidden">
            {/* SVG Map Container with responsive aspect ratio */}
            <div className="w-full aspect-[2000/857] min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center">
              <img src={worldMapUrl} alt="" className="w-full h-full object-contain opacity-70" aria-hidden="true" />
            </div>

            {/* City markers overlay */}
            <div className="absolute inset-0">
              {GLOBAL_CITIES.map((city, i) => (
                <motion.div
                  key={city.name}
                  initial={{opacity:0,scale:0}}
                  whileInView={{opacity:1,scale:1}}
                  viewport={{once:true}}
                  transition={{delay:0.4+i*0.12,duration:0.4,ease:'backOut'}}
                  className="absolute"
                  style={{left:`${city.x}%`,top:`${city.y}%`,transform:'translate(-50%,-50%)'}}
                >
                  {city.hq && (
                    <motion.div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-emerald pointer-events-none"
                      animate={{scale:[1,2.5],opacity:[0.6,0]}}
                      transition={{repeat:Infinity,duration:2,ease:'easeOut'}}
                    />
                  )}
                  
                  {/* Larger touch target for mobile */}
                  <button
                    onClick={() => handleCityClick(city.name)}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className={`rounded-full transition-all duration-200 relative z-20
                      ${city.hq?'w-4 h-4 bg-emerald shadow-lg shadow-emerald/50':'w-3 h-3 bg-emerald/55 hover:bg-emerald'}
                      ${displayedCity === city.name ? 'ring-2 ring-emerald ring-offset-2' : ''}`}
                    aria-label={`Location: ${city.name}${city.hq ? ' (Headquarters)' : ''}`}
                  />

                  {/* Smart positioned tooltip with mobile fallback */}
                  {displayedCity === city.name && (
                    <motion.div
                      initial={{opacity:0,y:4}}
                      animate={{opacity:1,y:0}}
                      className="absolute z-30 bg-white rounded-lg px-3 py-2 shadow-xl whitespace-nowrap text-center"
                      style={{
                        bottom: city.y > 70 ? 'auto' : 'calc(100% + 12px)',
                        top: city.y > 70 ? 'calc(100% + 12px)' : 'auto',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        minWidth: '120px'
                      }}
                    >
                      <p className="text-graphite text-xs font-bold">{city.name}</p>
                      {city.hq && <p className="text-emerald text-xs font-semibold">Headquarters</p>}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Mobile-optimized legend */}
        <FadeUp delay={0.5}>
          <div className="mt-3 md:mt-4 px-2 sm:px-0">
            {/* Mobile: Show as list, Desktop: Show as wrapped boxes */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3 md:gap-4">
              {GLOBAL_CITIES.map((city) => (
                <div key={city.name} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${city.hq?'bg-emerald':'bg-emerald/35'}`}/>
                  <span className={`text-sm ${city.hq?'text-emerald font-semibold':'text-white/45'}`}>
                    {city.name}{city.hq?' (HQ)':''}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Mobile legend - compact stacked layout */}
            <div className="sm:hidden space-y-2">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3 text-center">Our Locations</p>
              {GLOBAL_CITIES.map((city) => (
                <div key={city.name} className="flex items-center gap-2 text-center justify-center">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${city.hq?'bg-emerald':'bg-emerald/35'}`}/>
                  <span className={`text-xs ${city.hq?'text-emerald font-semibold':'text-white/50'}`}>
                    {city.name}{city.hq?' (HQ)':''}
                  </span>
                </div>
              ))}
            </div>

            {/* Info text for mobile */}
            <p className="text-white/30 text-xs text-center mt-4 md:hidden">
              Tap the dots on the map to see location details
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default GlobalReach;
