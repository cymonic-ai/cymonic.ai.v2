import React from 'react';
import { FadeUp } from './FadeUp';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, center = false }) => (
  <div className={`mb-14 md:mb-20 ${center ? 'text-center' : ''}`}>
    <FadeUp>
      <span className="section-label">
        <span className="w-6 h-px bg-emerald inline-block" />
        {label}
      </span>
    </FadeUp>
    <FadeUp delay={0.1}>
      <h2 className="section-title mt-2 mb-4 leading-snug">{title}</h2>
    </FadeUp>
    {subtitle && (
      <FadeUp delay={0.2}>
        <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      </FadeUp>
    )}
  </div>
);
