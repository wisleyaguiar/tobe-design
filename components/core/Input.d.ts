import React from 'react';
/** @startingPoint section="Components" subtitle="Dark-mode text input with label" viewport="700x140" */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
