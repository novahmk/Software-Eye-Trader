import { Link, Outlet } from '@tanstack/react-router';
import { Activity, LayoutDashboard, Layers, ScanLine, SlidersHorizontal, History, CircleHelp, Wifi, BatteryFull, Command, ChevronDown, Radio } from 'lucide-react';
import wallpaper from '@/assets/desktop-wallpaper.jpg';
import { ForecastProvider, useForecast } from './forecast-context';
import { Button } from './ui/button';
const navigation = [
  { to: '/', label: 'Visão geral', icon: LayoutDashboard },
  { to: '/overlay', label: 'Overlay', icon: Layers },
  { to: '/calibracao', label: 'Calibração', icon: ScanLine },
  { to: '/historico', label: 'Histórico', icon: History },
  { to: '/configuracoes', label: 'Configurações', icon: SlidersHorizontal },
] as const;
function ShellContent() {
  const { paused, calibration } = useForecast();
  return <div className="desktop">
    <img src={wallpaper} width={1920} height={1080} alt="" className="desktop-wallpaper" />
    <div className="mac-menubar"><div className="flex items-center gap-5"><svg width="14" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.1 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.8-3.2 1.9-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2 1 0 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6s1.8-1 2.5-1.9c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.8-1.1-2.8-2.9ZM15.1 6.6c.6-.8 1-1.8.9-2.9-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.8-1 2.8 1.1.1 2.2-.5 2.9-1.3Z" /></svg><span className="font-semibold">Crypto Forecast</span><span className="mac-menu-items text-foreground/80">Arquivo</span><span className="mac-menu-items text-foreground/80">Visualizar</span><span className="mac-menu-items text-foreground/80">Janela</span></div><div className="flex items-center gap-4"><Wifi className="size-3.5" /><BatteryFull className="size-4" /><span>Seg. 12 out. <span className="ml-2">17:22</span></span></div></div>
    <div className="app-window"><div className="window-titlebar"><div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div><div className="titlebar-name"><Activity className="size-3.5 text-muted-foreground" />Crypto Forecast Overlay</div><span className="ml-auto text-[10px] text-muted-foreground">v0.1.0</span></div>
      <div className="window-body"><aside className="sidebar"><div className="flex items-center gap-2.5 px-3"><div className="brand-icon"><Activity className="size-5" /></div><div className="sidebar-brand-text"><div className="text-[13px] font-semibold">Crypto Forecast</div><div className="mt-0.5 text-[10px] text-muted-foreground">Clareza no próximo movimento.</div></div></div><div className="sidebar-label">Workspace</div><nav>{navigation.map(({ to, label, icon: Icon }) => <Link key={to} to={to} activeOptions={{ exact: true }} className="nav-link" title={label}><Icon /><span className="nav-label">{label}</span>{to === '/calibracao' && <span className="nav-label ml-auto status-dot" />}</Link>)}</nav><div className="sidebar-bottom mt-auto"><div className="mx-3 mb-5 border-t border-border pt-4"><div className="flex items-center gap-2 text-[11px]"><Radio className="size-3.5 text-primary" />Modo demonstração</div><p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">Dados e projeções simulados.<br />Nenhuma ordem é executada.</p></div><Button variant="nav" size="sm" asChild className="w-full"><Link to="/configuracoes"><CircleHelp className="size-4" />Preferências<Command className="ml-auto size-3" /></Link></Button></div></aside>
        <main className="min-w-0"><Outlet /></main>
      </div><footer className="window-footer"><div className="flex flex-wrap items-center gap-5"><span className="flex items-center gap-1.5"><span className="status-dot" />{paused ? 'Demo pausada' : 'Feed simulado conectado'}</span><span className="flex items-center gap-1.5"><ScanLine className="size-3" />{calibration.valid ? 'Calibração válida · Demo' : 'Calibração pendente'}</span></div><span className="flex items-center gap-2">Ambiente de demonstração<ChevronDown className="size-3" /></span></footer>
    </div>
  </div>;
}
export function AppShell() { return <ForecastProvider><ShellContent /></ForecastProvider>; }
export function PageHeader({ title, subtitle, children }: { title: string; subtitle: string; children?: React.ReactNode }) { return <header className="page-header"><div><h1>{title}</h1><p>{subtitle}</p></div><div className="flex items-center gap-2">{children}</div></header>; }
