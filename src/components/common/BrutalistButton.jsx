import React from 'react';
import confetti from 'canvas-confetti';

export const BrutalistButton = ({
  children,
  variant = 'yellow', // yellow | blue | white | mint | dark | outline
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
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FFD000', '#2563EB', '#10B981', '#FF6B6B']
        });
      } catch (err) {
        // Safe fallback
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles = "inline-flex items-center justify-center font-extrabold font-display border-[2.5px] border-slate-900 rounded-xl transition-all duration-150 cursor-pointer select-none";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    md: "px-5 py-2.5 text-sm gap-2 shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-brutal-lg hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-x-[6px] active:translate-y-[6px] active:shadow-none min-h-[48px]",
  };

  const variantStyles = {
    yellow: "bg-accent-yellow hover:bg-accent-yellow-light text-slate-900",
    blue: "bg-brand-blue hover:bg-brand-blue-dark text-white",
    white: "bg-surface hover:bg-blue-50 text-slate-900",
    mint: "bg-accent-mint hover:bg-accent-mint-light text-slate-900",
    coral: "bg-accent-coral hover:bg-accent-coral-light text-white",
    dark: "bg-slate-900 hover:bg-slate-800 text-white shadow-brutal",
    outline: "bg-transparent hover:bg-white text-slate-900",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

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
