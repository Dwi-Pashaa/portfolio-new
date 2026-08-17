import React from 'react';

export const PillBadge = ({
  children,
  icon,
  color = 'bg-brand-blue-light text-brand-blue-dark',
  borderColor = 'border-slate-900',
  size = 'md', // sm | md | lg
  shadow = 'shadow-[2px_2px_0px_#0F172A]',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1 border-[1.5px]",
    md: "px-3 py-1 text-xs gap-1.5 border-2",
    lg: "px-4 py-1.5 text-sm gap-2 border-[2.5px]",
  };

  return (
    <span
      className={`inline-flex items-center font-display font-bold uppercase tracking-wider rounded-full ${sizeStyles[size]} ${color} ${borderColor} ${shadow} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
