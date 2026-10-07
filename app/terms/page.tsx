import LegalPage from '@/components/LegalPage';
import html from '@/content/legal/terms';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Terms of Use | DukaanSe',
  'Terms of Use for DukaanSe, operated by Vyaptra Solutions Private Limited.',
  '/terms/',
);

export default function TermsPage() {
  return <LegalPage html={html} />;
}
