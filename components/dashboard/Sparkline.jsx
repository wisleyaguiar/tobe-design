import React from 'react';
export function Sparkline({data,width=140,height=48,color}){
  const c = color||'var(--accent)';
  const max=Math.max(...data), min=Math.min(...data);
  const pts=data.map((v,i)=>`${(i/(data.length-1))*width},${height-((v-min)/(max-min||1))*height}`).join(' ');
  return React.createElement('svg',{width,height,viewBox:`0 0 ${width} ${height}`},
    React.createElement('polyline',{points:pts,fill:'none',stroke:c,strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'})
  );
}
