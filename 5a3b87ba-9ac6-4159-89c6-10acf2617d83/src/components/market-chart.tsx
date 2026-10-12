import { useMemo } from 'react';
import { ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
import { mockMarketAdapter, assets, formatPrice } from '@/lib/mock-market';
import { useForecast } from './forecast-context';

function CandleShape(props: any) {
  const { x, y, width, height, payload } = props;
  if (!payload || !payload.close) return <g />;
  const span = payload.high - payload.low;
  const bodyY = y + (payload.high - Math.max(payload.open, payload.close)) / span * height;
  const bodyHeight = Math.max(2, Math.abs(payload.close - payload.open) / span * height);
  const color = payload.close >= payload.open ? 'var(--bullish)' : 'var(--bearish)';
  return <g><line x1={x + width / 2} x2={x + width / 2} y1={y} y2={y + height} stroke={color} strokeWidth={1} /><rect x={x + width * .15} y={bodyY} width={width * .7} height={bodyHeight} rx={1} fill={color} /></g>;
}
export function MarketChart({ uncertainty = true, indicators = true }: { uncertainty?: boolean; indicators?: boolean }) {
  const { symbol } = useForecast();
  const price = assets.find(a => a.symbol === symbol)?.price ?? 67432.8;
  const data = useMemo(() => {
    const candles = mockMarketAdapter.getCandles(symbol);
    const rows: any[] = candles.map((c, i) => ({ ...c, candle: [c.low, c.high], ma: c.close - price * .0008, forecastUp: i === candles.length - 1 ? c.close : undefined, forecastDown: i === candles.length - 1 ? c.close : undefined }));
    const last = candles[candles.length - 1]?.close ?? price;
    for (let i = 1; i <= 14; i++) rows.push({ time: `15:${String(9 + i).padStart(2, '0')}`, forecastUp: last + price * .00035 * i + Math.sin(i * .8) * price * .0003, forecastDown: last - price * .00019 * i + Math.sin(i * .7) * price * .0003, uncertainty: [last - price * .0003 * i, last + price * .00045 * i] });
    return rows;
  }, [symbol, price]);
  return <ResponsiveContainer width="100%" height="100%"><ComposedChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 8 }}>
    <CartesianGrid stroke="var(--grid)" vertical={false} />
    <XAxis dataKey="time" tick={{ fill: 'var(--muted-foreground)', fontSize: 9 }} interval={11} axisLine={false} tickLine={false} dy={10} />
    <YAxis orientation="right" domain={[price * .992, price * 1.007]} tick={{ fill: 'var(--muted-foreground)', fontSize: 9 }} tickFormatter={v => Math.round(v).toLocaleString('en-US')} axisLine={false} tickLine={false} width={64} tickCount={7} />
    <Tooltip content={({ active, payload, label }) => active && payload?.length ? <div className="rounded-md border border-border bg-card px-3 py-2 text-xs"><div className="text-muted-foreground">{label} · Simulado</div><div className="mt-1">${formatPrice(payload[0]?.payload?.close ?? payload[0]?.payload?.forecastUp ?? price)}</div></div> : null} />
    {uncertainty && <Area type="monotone" dataKey="uncertainty" stroke="none" fill="var(--forecast-fill)" isAnimationActive={false} />}
    <Bar dataKey="candle" shape={<CandleShape />} isAnimationActive={false} />
    {indicators && <Line dataKey="ma" stroke="var(--warning)" strokeOpacity={.55} strokeWidth={1.2} dot={false} isAnimationActive={false} />}
    <Line type="monotone" dataKey="forecastUp" stroke="var(--bullish)" strokeDasharray="5 4" strokeWidth={1.8} dot={false} isAnimationActive={false} />
    <Line type="monotone" dataKey="forecastDown" stroke="var(--bearish)" strokeDasharray="5 4" strokeWidth={1.8} dot={false} isAnimationActive={false} />
    <ReferenceLine x="15:09" stroke="var(--muted-foreground)" strokeOpacity={.4} strokeDasharray="3 4" label={{ value: 'PROJEÇÃO', position: 'insideTopRight', fill: 'var(--muted-foreground)', fontSize: 8 }} />
    <ReferenceLine y={price} stroke="var(--bullish)" strokeOpacity={.35} strokeDasharray="3 4" />
  </ComposedChart></ResponsiveContainer>;
}
