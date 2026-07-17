import React from 'react';
export function Table({columns,rows}){
  const [hoverRow,setHoverRow]=React.useState(-1);
  return React.createElement('table',{style:{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-sans)',fontSize:13,color:'var(--text-primary)'}},
    React.createElement('thead',null,
      React.createElement('tr',null,columns.map((c,i)=>React.createElement('th',{key:i,style:{textAlign:'left',padding:'10px 14px',fontSize:11,fontWeight:600,letterSpacing:1,textTransform:'uppercase',color:'var(--text-secondary)',borderBottom:'1px solid var(--border-subtle)'}},c)))
    ),
    React.createElement('tbody',null,rows.map((r,ri)=>
      React.createElement('tr',{key:ri,onMouseEnter:()=>setHoverRow(ri),onMouseLeave:()=>setHoverRow(-1),
        style:{background:hoverRow===ri?'var(--surface-card-hover)':(ri%2===1?'rgba(255,255,255,0.02)':'transparent'),transition:'background var(--duration-fast)'}},
        r.map((cell,ci)=>React.createElement('td',{key:ci,style:{padding:'12px 14px',borderBottom:'1px solid var(--border-hairline)'}},cell))
      )
    ))
  );
}
