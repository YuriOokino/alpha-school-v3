"use client"

import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'light' | 'warm' | 'maroon';
}

export default function MainHeading({ 
  children, 
  description, 
  actions, 
  className = "",
  variant = 'default'
}: MainHeadingProps) {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'scheme-blue';
    }
    if (variant === 'light') {
      return 'scheme-lightblue';
    }
    if (variant === 'warm') {
      return 'scheme-pink';
    }
    if (variant === 'maroon') {
      return 'scheme-maroon';
    }
    return '';
  };

  const variantClasses = getVariantClasses();
  const hasBackground = variant !== 'default';

  return (
    <div className={`${hasBackground ? 'w-full' : ''} ${variantClasses} ${hasBackground ? 'rounded-b-[var(--radius-lg)]' : ''}`}>
      <div className="alpha-container pb-[var(--space-lg)]">
        <h1
          className={`hero-headline text-center max-w-[60vw] mx-auto mb-6 ${className}`.trim()}
          tabIndex={-1}
        >
          {children}
        </h1>
        {description && (
          <div className="text-lg text-center max-w-[60vw] mx-auto mb-6">
            {description}
          </div>
        )}
        {actions && (
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
} 