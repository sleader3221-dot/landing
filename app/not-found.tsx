import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata('Page not found | DukaanSe', 'Page not found.', '/404.html');

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main"><section className="legal-page"><div className="wrap" style={{ display: 'block', textAlign: 'center' }}>
        <h1>This page went to the kirana and didn&apos;t come back.</h1>
        <p className="updated" style={{ margin: '16px 0 28px' }}>Let&apos;s get you home.</p><Link className="btn btn-red" href="/">Go to the homepage</Link></div></section></main>
      <Footer />
    </>
  );
}
