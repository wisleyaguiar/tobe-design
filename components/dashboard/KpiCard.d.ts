import React from 'react';
/** @startingPoint section="Components" subtitle="Huge-number metric card with serif value" viewport="700x180" */
export interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}
