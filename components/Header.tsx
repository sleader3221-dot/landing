/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { CUSTOMER_APP } from '@/lib/site';

/** Site header. On the home page the nav uses in-page anchors ("#how"); on other pages it links back to "/#how". */
export default function Header({ home = false }: { home?: boolean }) {
  const h = home ? '' : '/';
  return (
    <header className="top"><div className="wrap">
      <Link className="brand" href="/" aria-label="DukaanSe home"><img className="mark" src="/assets/img/icon.svg" alt="" width="38" height="38" /><span className="wm" aria-hidden="true">Dukaan<span className="se">Se</span></span></Link>
      <nav className="links" aria-label="Main">
        <a href={`${h}#how`}>How it works</a><a href={`${h}#compare`}>Pickup or delivery</a><a href={`${h}#gullak`}>Gullak</a><a href={`${h}#kiranas`}>For kiranas</a><a href={`${h}#faq`}>FAQ</a>
      </nav>
      <a className="btn btn-red" href={CUSTOMER_APP}>Get the app</a>
    </div></header>
  );
}
