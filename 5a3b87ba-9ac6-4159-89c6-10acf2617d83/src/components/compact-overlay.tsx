import { ArrowUpRight, GripHorizontal, Radio } from 'lucide-react';
import { useForecast } from './forecast-context';
import { assets, formatPrice } from '@/lib/mock-market';
export function CompactOverlay() {
  const { symbol, paused, settings } = useForecast();
  const asset = assets.find(a => a.symbol === symbol) ?? assets[0];
  return <div className="compact-overlay">
    <div className="flex items-center justify-between text-[10px]"><span className="flex items-center gap-2"><Radio className="size-3 text-primary" /><span className="font-semibold">{symbol}/USDT</span><span className="text-muted-foreground">· Demo</span></span><GripHorizontal className="size-4 text-muted-foreground" /></div>
    <div className="mt-3 flex items-end justify-between"><span className="text-xl font-semibold tabular-nums">${formatPrice(asset.price)}</span><span className="flex items-center text-[11px] text-bullish"><ArrowUpRight className="size-3" />{asset.change}</span></div>
    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-3"><div><div className="text-[9px] text-muted-foreground">PRÓXIMOS 5 MIN</div><div className="mt-1 flex items-center gap-1 text-xs text-bullish"><ArrowUpRight className="size-3" /> +0,24% <span className="ml-auto text-[10px] text-muted-foreground">76%</span></div></div><div className="border-l border-border pl-4"><div className="text-[9px] text-muted-foreground">PRÓXIMOS 10 MIN</div><div className="mt-1 flex items-center gap-1 text-xs text-bullish"><ArrowUpRight className="size-3" /> +0,47% <span className="ml-auto text-[10px] text-muted-foreground">68%</span></div></div></div>
    {settings.showUncertainty && <div className="mt-3 flex items-center gap-1.5 text-[9px] text-muted-foreground"><span className="status-dot" />{paused ? 'Demonstração pausada' : 'Projeção simulada'}<span className="ml-auto">±0,18%</span></div>}
  </div>;
}
