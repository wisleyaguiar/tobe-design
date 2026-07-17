import React from 'react';
const base={fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,letterSpacing:0.2,border:'none',borderRadius:'var(--radius-soft)',padding:'12px 22px',cursor:'pointer',transition:'background var(--duration-fast) var(--ease-cinematic),opacity var(--duration-fast)',display:'inline-flex',alignItems:'center',gap:8};
const variants={
primary:{background:'var(--accent)',color:'#fff'},
secondary:{background:'transparent',color:'var(--text-primary)',border:'1px solid var(--border-subtle)'},
ghost:{background:'transparent',color:'var(--text-secondary)'}
};
const sizes={sm:{padding:'8px 16px',fontSize:12},md:{},lg:{padding:'16px 28px',fontSize:16}};

export function Button({children,variant='primary',size='md',disabled=false,onClick}){
  const [hover,setHover]=React.useState(false);
  let style={...base,...variants[variant],...sizes[size]};
  if(disabled){style={...style,opacity:0.4,cursor:'not-allowed'}}
  else if(hover){
    if(variant==='primary') style.background='var(--accent-hover)';
    if(variant==='secondary') style={...style,borderColor:'var(--text-secondary)'};
    if(variant==='ghost') style.color='var(--text-primary)';
  }
  return React.createElement('button',{style,disabled,onClick,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false)},children);
}
