import { createFileRoute } from '@tanstack/react-router';
import { HistoryPage } from '@/components/workspace-pages';
export const Route = createFileRoute('/historico')({
  head: () => ({ meta: [{ title: 'Histórico · Crypto Forecast Overlay' }, { name: 'description', content: 'Histórico ilustrativo de projeções e resultados de criptomoedas com dados fictícios.' }, { property: 'og:title', content: 'Histórico · Crypto Forecast Overlay' }, { property: 'og:description', content: 'Histórico ilustrativo de projeções e resultados de criptomoedas com dados fictícios.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: HistoryPage,
});
