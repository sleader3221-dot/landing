import LegalPage from '@/components/LegalPage';
import html from '@/content/legal/merchant-agreement';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Merchant Onboarding Agreement | DukaanSe',
  'Merchant Onboarding Agreement for DukaanSe, operated by Vyaptra Solutions Private Limited.',
  '/merchant-agreement/',
);

export default function MerchantAgreementPage() {
  return <LegalPage html={html} />;
}
