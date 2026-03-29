import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ARISE_VALUES } from '../../constants/content';

const Arise: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused) {
        posRef.current -= speed;
        // Reset when first set scrolled fully out of view
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  // Duplicate values for seamless loop
  const doubled = [...ARISE_VALUES, ...ARISE_VALUES];

  return (
    <section id="values" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          label="Core Values"
          title="What We Live By"
          subtitle="ARISE is not a word — it's the standard every Cymonic team member holds themselves to, every day."
        />
      </div>

      {/* Scrolling strip */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-graphite to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-graphite to-transparent" />

        {/* Track */}
        <div ref={trackRef} className="flex gap-4 sm:gap-5 w-max px-4 sm:px-6">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 p-7
                         hover:border-emerald/40 hover:shadow-xl hover:shadow-emerald/8
                         transition-all duration-300 flex flex-col cursor-default flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px]"
            >
              {/* Big letter */}
              <span className="font-display text-7xl font-bold leading-none select-none mb-3
                               text-gray-100 group-hover:text-emerald-tint2 transition-colors duration-300">
                {item.letter}
              </span>
              {/* Accent bar */}
              <div className="w-8 h-0.5 bg-emerald mb-4 group-hover:w-14 transition-all duration-300" />
              {/* Value */}
              <h3 className="font-display text-graphite text-xl font-bold mb-2">{item.value}</h3>
              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

              {/* Emerald dot top-right */}
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-emerald opacity-0
                              group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ARISE acronym footer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-6">
          {ARISE_VALUES.map((item, i) => (
            <React.Fragment key={item.letter}>
              <div className="flex flex-col items-center px-4 md:px-8">
                <span className="font-display font-bold text-white leading-none text-[clamp(2rem,7vw,3.75rem)]">
                  {item.letter}
                </span>
                <span className="text-[0.65rem] sm:text-xs text-white/60 font-medium mt-2 tracking-widest uppercase">
                  {item.value}
                </span>
              </div>
              {i < ARISE_VALUES.length - 1 && (
                <div className="w-px h-10 bg-white/15 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Arise;
