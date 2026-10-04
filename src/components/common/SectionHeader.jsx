import React from 'react';

export const SectionHeader = ({
  title,
  subtitle,
  align = 'center', // left | center
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-10 sm:mb-14 max-w-3xl ${alignClasses} ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-ink tracking-tight leading-tight mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

