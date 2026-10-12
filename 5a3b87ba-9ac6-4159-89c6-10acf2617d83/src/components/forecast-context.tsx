import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CalibrationProfile, OverlaySettings } from '@/lib/market-types';

function useForecastState() {
  const [symbol, setSymbol] = useState('BTC');
  const [paused, setPaused] = useState(false);
  const [settings, setSettings] = useState<OverlaySettings>({ opacity: 85, position: 'Superior direita', size: 'Compacto', clickThrough: false, showUncertainty: true });
  const [calibration, setCalibration] = useState<CalibrationProfile>({ name: 'BTC · TradingView', scale: 100, referencePrice: 67432.8, valid: true });
  return { symbol, setSymbol, paused, setPaused, settings, setSettings, calibration, setCalibration };
}
const ForecastContext = createContext<ReturnType<typeof useForecastState> | null>(null);
export function ForecastProvider({ children }: { children: ReactNode }) { const value = useForecastState(); return <ForecastContext.Provider value={value}>{children}</ForecastContext.Provider>; }
export function useForecast() { const value = useContext(ForecastContext); if (!value) throw new Error('ForecastProvider required'); return value; }