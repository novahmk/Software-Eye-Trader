import type { MarketAdapter } from './market-types';

export const assets = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67432.80, change: '+2,34%', mark: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 3521.64, change: '+1,82%', mark: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', price: 172.38, change: '+4,16%', mark: '◎' },
] as const;
export const formatPrice = (value: number) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const mockMarketAdapter: MarketAdapter = {
  getCandles(symbol) {
    const base = assets.find(a => a.symbol === symbol)?.price ?? assets[0].price;
    return Array.from({ length: 50 }, (_, i) => {
      const trend = -0.0052 + i * 0.000105;
      const wave = Math.sin(i * 0.39) * 0.0015 + Math.cos(i * 0.81) * 0.00065;
      const close = base * (1 + trend + wave);
      const open = close + base * Math.sin(i * 1.8 + 2) * 0.00058;
      return { time: `${14 + Math.floor((20 + i) / 60)}:${String((20 + i) % 60).padStart(2, '0')}`, open, close, high: Math.max(open, close) + base * 0.0004, low: Math.min(open, close) - base * 0.00038, volume: 40 + Math.abs(Math.sin(i * 3.8)) * 110 };
    });
  },
  getForecasts(symbol) {
    const base = assets.find(a => a.symbol === symbol)?.price ?? assets[0].price;
    return [{ horizon: 5, bullish: base * 1.0024, bearish: base * 0.9985, confidence: 76, simulated: true }, { horizon: 10, bullish: base * 1.0047, bearish: base * 0.9972, confidence: 68, simulated: true }];
  },
};