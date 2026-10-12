export interface Candle { time: string; open: number; high: number; low: number; close: number; volume: number }
export interface Forecast { horizon: 5 | 10; bullish: number; bearish: number; confidence: number; simulated: true }
export interface CalibrationProfile { name: string; scale: number; referencePrice: number; valid: boolean }
export interface OverlaySettings { opacity: number; position: string; size: string; clickThrough: boolean; showUncertainty: boolean }
export interface MarketConnection { status: 'demo' | 'paused' | 'delayed'; source: string; simulated: true }
export interface MarketAdapter { getCandles(symbol: string): Candle[]; getForecasts(symbol: string): Forecast[] }