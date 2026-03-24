import React from 'react';
import { motion } from 'framer-motion';
import { PRIDE_VALUES } from '../../constants/content';

const PrideBand: React.FC = () => (
  <section className="py-16 bg-graphite overflow-hidden relative">
    <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 text-center md:text-left"
        >
          <p className="text-emerald text-xs font-semibold tracking-widest uppercase mb-1">Our DNA</p>
          <p className="font-display text-white text-2xl font-bold">We live by <span className="text-emerald">PRIDE</span></p>
        </motion.div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/10 flex-shrink-0" />

        {/* PRIDE values row */}
        <div className="flex items-center gap-0 flex-wrap justify-center md:justify-start">
          {PRIDE_VALUES.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center"
            >
              <div className="group flex flex-col items-center px-5 py-3 rounded-xl
                              hover:bg-white/5 transition-all duration-200 cursor-default">
                <span className="font-display text-3xl font-bold text-white
                                 group-hover:text-emerald transition-colors duration-200 leading-none mb-1">
                  {item.letter}
                </span>
                <span className="text-white/40 text-xs font-medium tracking-wide">
                  {item.value}
                </span>
              </div>
              {i < PRIDE_VALUES.length - 1 && (
                <span className="text-white/15 text-lg font-light">·</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <a
            href="#values"
            onClick={e => { e.preventDefault(); document.querySelector('#values')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline-dark text-xs px-5 py-2.5 whitespace-nowrap"
          >
            Our Values →
          </a>
        </motion.div>

      </div>
    </div>
  </section>
);

export default PrideBand;
