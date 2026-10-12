import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/components/workspace-pages';
export const Route = createFileRoute('/configuracoes')({
  head: () => ({ meta: [{ title: 'Configurações · Crypto Forecast Overlay' }, { name: 'description', content: 'Preferências de aparência, opacidade e futura janela nativa do Crypto Forecast Overlay.' }, { property: 'og:title', content: 'Configurações · Crypto Forecast Overlay' }, { property: 'og:description', content: 'Preferências de aparência, opacidade e futura janela nativa do Crypto Forecast Overlay.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: SettingsPage,
});
