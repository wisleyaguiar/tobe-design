import React from 'react';
/** @startingPoint section="Components" subtitle="Ultra-clean data table with subtle zebra + row hover" viewport="700x260" */
export interface TableProps {
  columns: string[];
  rows: React.ReactNode[][];
}
