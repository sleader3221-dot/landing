import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Policy page shell. `html` is the original TOC + article markup, extracted verbatim
 * from the static site so the legal wording stays byte-for-byte identical.
 */
export default function LegalPage({ html }: { html: string }) {
  return (
    <>
      <Header />
      <main id="main">
        <section className="legal-page"><div className="wrap" dangerouslySetInnerHTML={{ __html: html }} /></section>
      </main>
      <Footer />
    </>
  );
}
