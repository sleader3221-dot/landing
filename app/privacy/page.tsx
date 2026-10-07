import LegalPage from '@/components/LegalPage';
import html from '@/content/legal/privacy';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Privacy Policy | DukaanSe',
  'Privacy Policy for DukaanSe, operated by Vyaptra Solutions Private Limited.',
  '/privacy/',
);

export default function PrivacyPage() {
  return <LegalPage html={html} />;
}
