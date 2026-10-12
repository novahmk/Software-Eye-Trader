import { createFileRoute } from '@tanstack/react-router';
import { OverlayPage } from '@/components/workspace-pages';
export const Route = createFileRoute('/overlay')({
  head: () => ({ meta: [{ title: 'Overlay · Crypto Forecast Overlay' }, { name: 'description', content: 'Painel compacto de projeções fictícias e prévia da janela transparente.' }, { property: 'og:title', content: 'Overlay · Crypto Forecast Overlay' }, { property: 'og:description', content: 'Painel compacto de projeções fictícias e prévia da janela transparente.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: OverlayPage,
});
