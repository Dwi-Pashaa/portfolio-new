import React from 'react';
import confetti from 'canvas-confetti';

export const BrutalistButton = ({
  children,
  variant = 'yellow', // yellow (brand/primary) | outline | blue | dark
  size = 'md', // sm | md | lg
  onClick,
  href,
  target,
  rel,
  className = '',
  withConfetti = false,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) return;
    
    if (withConfetti) {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#ffd43b', '#3b82f6', '#111111']
        });
      } catch (err) {
        // Safe fallback
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles = "inline-flex items-center justify-center font-bold font-display border-2 border-ink rounded-lg transition-all duration-100 cursor-pointer select-none no-underline whitespace-nowrap";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-sm gap-1.5 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2 shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    lg: "px-6 py-3 text-base sm:text-lg gap-2.5 shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-none min-h-[48px]",
  };

  const variantStyles = {
    yellow: "bg-accent hover:bg-accent-hover text-ink",
    outline: "bg-surface hover:bg-yellow-50 text-ink",
    blue: "bg-brand-blue hover:bg-brand-blue-dark text-white",
    dark: "bg-ink hover:bg-neutral-800 text-white",
    white: "bg-surface hover:bg-yellow-50 text-ink",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.yellow} ${disabledStyles} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={handleClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

