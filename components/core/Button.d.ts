import React from 'react';
/** @startingPoint section="Components" subtitle="Primary/secondary/ghost CTA button" viewport="700x200" */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}
