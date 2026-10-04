import React from 'react';

export const BrutalistCard = ({
  children,
  className = '',
  bg = 'bg-surface',
  borderColor = 'border-ink',
  borderWidth = 'border-2',
  rounded = 'rounded-lg',
  shadow = 'shadow-brutal',
  hoverLift = false,
  ...props
}) => {
  const liftClass = hoverLift ? "transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover" : "";

  return (
    <div
      className={`${bg} ${borderColor} ${borderWidth} ${rounded} ${shadow} ${liftClass} relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

