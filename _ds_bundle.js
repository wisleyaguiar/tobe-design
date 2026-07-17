/* @ds-bundle: {"format":4,"namespace":"TOBEDesignSystem_a9c1f8","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"KpiCard","sourcePath":"components/dashboard/KpiCard.jsx"},{"name":"Sidebar","sourcePath":"components/dashboard/Sidebar.jsx"},{"name":"Sparkline","sourcePath":"components/dashboard/Sparkline.jsx"},{"name":"Table","sourcePath":"components/dashboard/Table.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0cad27dc0fe4","components/core/Input.jsx":"76c894baf20f","components/dashboard/KpiCard.jsx":"8bf02bf5c817","components/dashboard/Sidebar.jsx":"fc5c9fa32428","components/dashboard/Sparkline.jsx":"ac49cc8a57da","components/dashboard/Table.jsx":"7517a97fa966","ui_kits/tobe-dash/Overview.jsx":"3e7f3824699c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TOBEDesignSystem_a9c1f8 = window.TOBEDesignSystem_a9c1f8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 0.2,
  border: 'none',
  borderRadius: 'var(--radius-soft)',
  padding: '12px 22px',
  cursor: 'pointer',
  transition: 'background var(--duration-fast) var(--ease-cinematic),opacity var(--duration-fast)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: '#fff'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)'
  }
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 12
  },
  md: {},
  lg: {
    padding: '16px 28px',
    fontSize: 16
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  let style = {
    ...base,
    ...variants[variant],
    ...sizes[size]
  };
  if (disabled) {
    style = {
      ...style,
      opacity: 0.4,
      cursor: 'not-allowed'
    };
  } else if (hover) {
    if (variant === 'primary') style.background = 'var(--accent-hover)';
    if (variant === 'secondary') style = {
      ...style,
      borderColor: 'var(--text-secondary)'
    };
    if (variant === 'ghost') style.color = 'var(--text-primary)';
  }
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-soft)',
      color: 'var(--text-primary)',
      padding: '10px 14px',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--accent)',
    onBlur: e => e.target.style.borderColor = 'var(--border-subtle)'
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/KpiCard.jsx
try { (() => {
function KpiCard({
  label,
  value,
  delta,
  positive = true
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    style: {
      background: hover ? 'var(--surface-card-hover)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-soft)',
      padding: '24px',
      fontFamily: 'var(--font-sans)',
      transition: 'background var(--duration-base) var(--ease-cinematic)',
      minWidth: 180
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, React.createElement('div', {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value), delta && React.createElement('div', {
    style: {
      marginTop: 10,
      fontSize: 12,
      fontWeight: 600,
      color: positive ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, delta));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/Sidebar.jsx
try { (() => {
function Sidebar({
  items,
  active
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-canvas)',
      width: 220,
      height: '100%',
      padding: '28px 16px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      borderRight: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--text-primary)',
      padding: '0 12px 24px'
    }
  }, 'TO/BE'), items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      fontSize: 13,
      fontWeight: 600,
      color: it === active ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderLeft: it === active ? '2px solid var(--accent)' : '2px solid transparent',
      background: it === active ? 'var(--surface-card)' : 'transparent',
      cursor: 'pointer'
    }
  }, it)));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/Sparkline.jsx
try { (() => {
function Sparkline({
  data,
  width = 140,
  height = 48,
  color
}) {
  const c = color || 'var(--accent)';
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data.map((v, i) => `${i / (data.length - 1) * width},${height - (v - min) / (max - min || 1) * height}`).join(' ');
  return React.createElement('svg', {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`
  }, React.createElement('polyline', {
    points: pts,
    fill: 'none',
    stroke: c,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/Table.jsx
try { (() => {
function Table({
  columns,
  rows
}) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      textAlign: 'left',
      padding: '10px 14px',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, c)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    onMouseEnter: () => setHoverRow(ri),
    onMouseLeave: () => setHoverRow(-1),
    style: {
      background: hoverRow === ri ? 'var(--surface-card-hover)' : ri % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent',
      transition: 'background var(--duration-fast)'
    }
  }, r.map((cell, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/Table.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tobe-dash/Overview.jsx
try { (() => {
const {
  Sidebar,
  KpiCard,
  Table,
  Sparkline,
  Button,
  Input
} = window.TOBEDesignSystem_a9c1f8;
const NAV = ['Overview', 'Clientes', 'Relatórios', 'Financeiro'];
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '28px 40px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      color: 'var(--text-primary)',
      letterSpacing: -0.5
    }
  }, title), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Exportar PDF"));
}
function OverviewScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    title: "Vis\xE3o Geral"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Faturamento",
    value: "R$ 128k",
    delta: "+12.4%"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Alcance",
    value: "92.4k",
    delta: "+3.1%"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Engajamento",
    value: "4.2%",
    delta: "+0.6pp"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-soft)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Performance 30d"), /*#__PURE__*/React.createElement(Sparkline, {
    data: [4, 7, 6, 9, 12, 10, 14, 13, 16, 18, 15, 20],
    width: 160,
    height: 44
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 14
    }
  }, "Clientes Ativos"), /*#__PURE__*/React.createElement(Table, {
    columns: ['Cliente', 'Canal', 'Investimento', 'ROAS'],
    rows: [['Tricard', 'Meta Ads', 'R$ 18.400', '4.8x'], ['Vero Cosméticos', 'Google Ads', 'R$ 9.200', '3.2x'], ['Prime Imóveis', 'Meta + Google', 'R$ 26.000', '5.6x'], ['Norte Fit', 'Meta Ads', 'R$ 6.100', '2.9x']]
  }))));
}
function ClientesScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    title: "Clientes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: ['Cliente', 'Segmento', 'Status', 'Contrato desde'],
    rows: [['Tricard', 'Financeiro', 'Ativo', 'Jan 2024'], ['Vero Cosméticos', 'Beleza', 'Ativo', 'Mar 2024'], ['Prime Imóveis', 'Imobiliário', 'Ativo', 'Jun 2023'], ['Norte Fit', 'Fitness', 'Em revisão', 'Set 2024']]
  })));
}
function RelatoriosScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    title: "Relat\xF3rios"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      gap: 24
    }
  }, ['Relatório Mensal — Tricard', 'Relatório Mensal — Vero', 'Auditoria de Mídia — Q3'].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-soft)',
      padding: 24,
      width: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, r), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Abrir \u2192")))));
}
function FinanceiroScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    title: "Financeiro"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Buscar nota fiscal",
    placeholder: "NF-000123"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Receita M\xEAs",
    value: "R$ 61k"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Pendente",
    value: "R$ 4.2k",
    delta: "aten\xE7\xE3o",
    positive: false
  }))));
}
function App() {
  const [active, setActive] = React.useState('Overview');
  const screens = {
    Overview: /*#__PURE__*/React.createElement(OverviewScreen, null),
    Clientes: /*#__PURE__*/React.createElement(ClientesScreen, null),
    'Relatórios': /*#__PURE__*/React.createElement(RelatoriosScreen, null),
    Financeiro: /*#__PURE__*/React.createElement(FinanceiroScreen, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const t = e.target.textContent;
      if (NAV.includes(t)) setActive(t);
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    items: NAV,
    active: active
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, screens[active]));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tobe-dash/Overview.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Table = __ds_scope.Table;

})();
