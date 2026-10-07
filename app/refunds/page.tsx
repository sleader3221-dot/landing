import LegalPage from '@/components/LegalPage';
import html from '@/content/legal/refunds';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Refund & Cancellation Policy | DukaanSe',
  'Refund & Cancellation Policy for DukaanSe, operated by Vyaptra Solutions Private Limited.',
  '/refunds/',
);

export default function RefundsPage() {
  return <LegalPage html={html} />;
}
