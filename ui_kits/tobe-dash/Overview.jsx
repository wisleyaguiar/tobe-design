const { Sidebar, KpiCard, Table, Sparkline, Button, Input } = window.TOBEDesignSystem_a9c1f8;
const NAV = ['Overview','Clientes','Relatórios','Financeiro'];

function Topbar({title}){
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'28px 40px',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{fontFamily:'var(--font-display)',fontSize:32,color:'var(--text-primary)',letterSpacing:-0.5}}>{title}</div>
      <Button variant="secondary" size="sm">Exportar PDF</Button>
    </div>
  );
}

function OverviewScreen(){
  return (<>
    <Topbar title="Visão Geral"/>
    <div style={{padding:'32px 40px',display:'flex',flexDirection:'column',gap:32}}>
      <div style={{display:'flex',gap:24}}>
        <KpiCard label="Faturamento" value="R$ 128k" delta="+12.4%"/>
        <KpiCard label="Alcance" value="92.4k" delta="+3.1%"/>
        <KpiCard label="Engajamento" value="4.2%" delta="+0.6pp"/>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-soft)',padding:24,display:'flex',flexDirection:'column',justifyContent:'center',gap:10,minWidth:180}}>
          <div style={{fontSize:11,fontWeight:600,letterSpacing:1,textTransform:'uppercase',color:'var(--text-secondary)'}}>Performance 30d</div>
          <Sparkline data={[4,7,6,9,12,10,14,13,16,18,15,20]} width={160} height={44}/>
        </div>
      </div>
      <div>
        <div style={{fontSize:11,fontWeight:600,letterSpacing:1,textTransform:'uppercase',color:'var(--text-secondary)',marginBottom:14}}>Clientes Ativos</div>
        <Table columns={['Cliente','Canal','Investimento','ROAS']} rows={[
          ['Tricard','Meta Ads','R$ 18.400','4.8x'],
          ['Vero Cosméticos','Google Ads','R$ 9.200','3.2x'],
          ['Prime Imóveis','Meta + Google','R$ 26.000','5.6x'],
          ['Norte Fit','Meta Ads','R$ 6.100','2.9x'],
        ]}/>
      </div>
    </div>
  </>);
}

function ClientesScreen(){
  return (<>
    <Topbar title="Clientes"/>
    <div style={{padding:'32px 40px'}}>
      <Table columns={['Cliente','Segmento','Status','Contrato desde']} rows={[
        ['Tricard','Financeiro','Ativo','Jan 2024'],
        ['Vero Cosméticos','Beleza','Ativo','Mar 2024'],
        ['Prime Imóveis','Imobiliário','Ativo','Jun 2023'],
        ['Norte Fit','Fitness','Em revisão','Set 2024'],
      ]}/>
    </div>
  </>);
}

function RelatoriosScreen(){
  return (<>
    <Topbar title="Relatórios"/>
    <div style={{padding:'32px 40px',display:'flex',gap:24}}>
      {['Relatório Mensal — Tricard','Relatório Mensal — Vero','Auditoria de Mídia — Q3'].map((r,i)=>(
        <div key={i} style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-soft)',padding:24,width:220}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:22,color:'var(--text-primary)',marginBottom:16}}>{r}</div>
          <Button variant="ghost" size="sm">Abrir →</Button>
        </div>
      ))}
    </div>
  </>);
}

function FinanceiroScreen(){
  return (<>
    <Topbar title="Financeiro"/>
    <div style={{padding:'32px 40px',display:'flex',flexDirection:'column',gap:24,maxWidth:420}}>
      <Input label="Buscar nota fiscal" placeholder="NF-000123"/>
      <div style={{display:'flex',gap:24}}>
        <KpiCard label="Receita Mês" value="R$ 61k"/>
        <KpiCard label="Pendente" value="R$ 4.2k" delta="atenção" positive={false}/>
      </div>
    </div>
  </>);
}

function App(){
  const [active, setActive] = React.useState('Overview');
  const screens = {Overview:<OverviewScreen/>, Clientes:<ClientesScreen/>, 'Relatórios':<RelatoriosScreen/>, Financeiro:<FinanceiroScreen/>};
  return (
    <div style={{display:'flex',height:'100vh',background:'var(--surface-canvas)'}}>
      <div onClick={(e)=>{const t=e.target.textContent; if(NAV.includes(t)) setActive(t);}}>
        <Sidebar items={NAV} active={active}/>
      </div>
      <div style={{flex:1,overflow:'auto'}}>{screens[active]}</div>
    </div>
  );
}
