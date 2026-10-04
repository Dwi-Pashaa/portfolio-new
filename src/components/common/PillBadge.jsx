import React from 'react';

export const PillBadge = ({
  children,
  icon,
  color = 'bg-surface text-ink',
  borderColor = 'border-ink',
  size = 'md', // sm | md | lg
  shadow = 'shadow-none',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3 py-1 text-sm gap-1.5 border-2",
    md: "px-3.5 py-1.5 text-sm gap-2 border-2",
    lg: "px-4 py-2 text-base gap-2 border-2",
  };

  return (
    <span
      className={`inline-flex items-center font-display font-bold rounded-full ${sizeStyles[size] || sizeStyles.md} ${color} ${borderColor} ${shadow} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

