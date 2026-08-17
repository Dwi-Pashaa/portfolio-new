import React from 'react';

export const BrutalistCard = ({
  children,
  className = '',
  bg = 'bg-surface',
  borderColor = 'border-slate-900',
  borderWidth = 'border-[3px]',
  rounded = 'rounded-2xl',
  shadow = 'shadow-brutal', // shadow-brutal-sm | shadow-brutal | shadow-brutal-lg | shadow-brutal-xl
  lift = false,
  headerTitle,
  headerIcon: HeaderIcon,
  headerBg = 'bg-slate-100',
  ...props
}) => {
  const liftClass = lift ? "transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-xl" : "";

  return (
    <div
      className={`${bg} ${borderColor} ${borderWidth} ${rounded} ${shadow} ${liftClass} relative overflow-hidden ${className}`}
      {...props}
    >
      {headerTitle && (
        <div className={`flex items-center justify-between px-4 py-2.5 border-b-[2.5px] border-slate-900 ${headerBg}`}>
          <div className="flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider text-slate-900">
            {HeaderIcon && <HeaderIcon className="w-4 h-4" />}
            <span>{headerTitle}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-slate-900"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900"></span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};
