/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { CUSTOMER_APP, PARTNER_APP } from '@/lib/site';

const gmailComposeLink = ({ to, subject }: { to: string; subject: string }) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
};

const supportEmailLink = gmailComposeLink({
  to: 'support@dukaanseindia.com',
  subject: 'DukaanSe Support Request',
});

/** Site footer. On the home page the FAQ link is an in-page anchor; elsewhere it links to "/#faq". */
export default function Footer({ home = false }: { home?: boolean }) {
  return (
    <footer className="site"><div className="wrap">
      <div>
        <span className="brand" style={{ marginBottom: 14 }}><img className="mark" src="/assets/img/icon.svg" alt="" width="34" height="34" /><span className="wm brand-word" aria-hidden="true">Dukaan<span className="se">Se</span></span></span>
        <p>The digital layer for India&apos;s neighbourhood kiranas.</p>
        <p style={{ marginTop: 12 }}><span className="ds brand-word">Dukaan<span className="se">Se</span></span> is owned and operated by Vyaptra Solutions Private Limited, Mumbai.</p>
      </div>
      <div>
        <h4>Help</h4>
        <ul>
          <li><a href={supportEmailLink} target="_blank" rel="noreferrer noopener">support@dukaanseindia.com</a></li>
          <li><a href={home ? '#faq' : '/#faq'}>FAQ</a></li>
          <li><Link href="/privacy/#grievance">Grievance Officer</Link></li>
        </ul>
      </div>
      <div>
        <h4>Apps and policies</h4>
        <ul>
          <li><a href={CUSTOMER_APP}>DukaanSe for customers</a></li>
          <li><a href={PARTNER_APP}>DukaanSe Partner for kiranas</a></li>
          <li><Link href="/terms/">Terms of Use</Link></li>
          <li><Link href="/privacy/">Privacy Policy</Link></li>
          <li><Link href="/refunds/">Refund &amp; Cancellation Policy</Link></li>
          <li><Link href="/merchant-agreement/">Merchant Onboarding Agreement</Link></li>
        </ul>
      </div>
      <div className="legal"><span>© 2026 Vyaptra Solutions Private Limited. All rights reserved. CIN: U47912MH2025PTC454001</span><span>Made in India, for every neighbourhood.</span></div>
    </div></footer>
  );
}


