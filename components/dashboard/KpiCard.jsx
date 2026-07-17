import React from 'react';
export function KpiCard({label,value,delta,positive=true}){
  const [hover,setHover]=React.useState(false);
  return React.createElement('div',{
    style:{background:hover?'var(--surface-card-hover)':'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-soft)',padding:'24px',fontFamily:'var(--font-sans)',transition:'background var(--duration-base) var(--ease-cinematic)',minWidth:180},
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false)
  },
    React.createElement('div',{style:{fontSize:11,fontWeight:600,letterSpacing:1,textTransform:'uppercase',color:'var(--text-secondary)',marginBottom:10}},label),
    React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:40,color:'var(--text-primary)',lineHeight:1}},value),
    delta && React.createElement('div',{style:{marginTop:10,fontSize:12,fontWeight:600,color:positive?'var(--accent)':'var(--text-secondary)'}},delta)
  );
}
