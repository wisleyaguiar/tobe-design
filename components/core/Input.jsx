import React from 'react';
export function Input({label,placeholder,type='text',value,onChange}){
  return React.createElement('label',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-sans)'}},
    label && React.createElement('span',{style:{fontSize:11,fontWeight:600,letterSpacing:1,textTransform:'uppercase',color:'var(--text-secondary)'}},label),
    React.createElement('input',{
      type,placeholder,value,onChange,
      style:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-soft)',color:'var(--text-primary)',padding:'10px 14px',fontSize:14,fontFamily:'var(--font-sans)',outline:'none'},
      onFocus:e=>e.target.style.borderColor='var(--accent)',
      onBlur:e=>e.target.style.borderColor='var(--border-subtle)'
    })
  );
}
