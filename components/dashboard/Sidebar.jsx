import React from 'react';
export function Sidebar({items,active}){
  return React.createElement('div',{style:{background:'var(--surface-canvas)',width:220,height:'100%',padding:'28px 16px',boxSizing:'border-box',fontFamily:'var(--font-sans)',display:'flex',flexDirection:'column',gap:4,borderRight:'1px solid var(--border-hairline)'}},
    React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:22,color:'var(--text-primary)',padding:'0 12px 24px'}},'TO/BE'),
    items.map((it,i)=>React.createElement('div',{key:i,style:{
      display:'flex',alignItems:'center',gap:10,padding:'10px 12px',fontSize:13,fontWeight:600,
      color:it===active?'var(--text-primary)':'var(--text-secondary)',
      borderLeft:it===active?'2px solid var(--accent)':'2px solid transparent',
      background:it===active?'var(--surface-card)':'transparent',cursor:'pointer'
    }},it))
  );
}
