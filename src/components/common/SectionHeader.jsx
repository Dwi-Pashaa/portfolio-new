import React from 'react';
import { PillBadge } from './PillBadge';

export const SectionHeader = ({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center', // left | center
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 max-w-3xl ${alignClasses} ${className}`}>
      {tag && (
        <div className="mb-4">
          <PillBadge color="bg-accent-yellow text-slate-900" size="md">
            {tag}
          </PillBadge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight mb-4">
        {title}{' '}
        {highlight && (
          <span className="relative inline-block px-2 bg-brand-blue text-white rounded-lg border-2 border-slate-900 shadow-[3px_3px_0px_#0F172A] -rotate-1 transform">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
