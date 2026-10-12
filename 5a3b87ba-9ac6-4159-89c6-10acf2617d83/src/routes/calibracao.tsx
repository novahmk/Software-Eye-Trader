import { createFileRoute } from '@tanstack/react-router';
import { CalibrationPage } from '@/components/workspace-pages';
export const Route = createFileRoute('/calibracao')({
  head: () => ({ meta: [{ title: 'Calibração · Crypto Forecast Overlay' }, { name: 'description', content: 'Controles visuais de calibração manual e perfis de referência demonstrativos.' }, { property: 'og:title', content: 'Calibração · Crypto Forecast Overlay' }, { property: 'og:description', content: 'Controles visuais de calibração manual e perfis de referência demonstrativos.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: CalibrationPage,
});
