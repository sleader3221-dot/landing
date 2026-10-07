/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroStage from '@/components/home/HeroStage';
import Moments from '@/components/home/Moments';
import Picker from '@/components/home/Picker';
import GullakCalculator from '@/components/home/GullakCalculator';
import { CUSTOMER_APP, PARTNER_APP, pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'DukaanSe - Flat 25% OFF*',
  '*Offer applies to pickup orders using available Gullak coins, up to 25% of item value and a maximum of 100 coins per order. No minimum order.',
  '/',
);

const JSON_LD = '{"@context":"https://schema.org","@graph":[{"@type":"Organization","name":"DukaanSe","legalName":"Vyaptra Solutions Private Limited","url":"https://www.dukaanseindia.com/","logo":"https://www.dukaanseindia.com/assets/img/icon.svg","email":"support@dukaanseindia.com"},{"@type":"MobileApplication","name":"DukaanSe","operatingSystem":"Android","applicationCategory":"ShoppingApplication","installUrl":"https://play.google.com/store/apps/details?id=com.dukaan.customer","offers":{"@type":"Offer","price":"0","priceCurrency":"INR"}}]}';

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

const merchantEmailLink = gmailComposeLink({
  to: 'merchants@dukaanseindia.com',
  subject: 'DukaanSe Merchant Partnership Enquiry',
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD }}
      />
      <Header home />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title"><div className="wrap">
          <div>
            <h1 id="hero-title"><span className="hero-line">Order karo <span className="ds">phone se,</span></span><span className="hero-line l2"><span>Pick up karo </span><span className="ds">Dukaan<span className="se">Se</span>.</span></span></h1>
            <p className="lede">Order from the neighbourhood kirana you already trust. Bhaiya packs it, you pick it up on your way, and Gullak coins take up to 25% off.*</p>
            <div className="cta-row"><a className="gplay" href={CUSTOMER_APP} aria-label="Get DukaanSe on Google Play"><img src="/assets/img/google-play-badge.png" alt="Get it on Google Play" width="188" height="56" /></a><span className="soon">iPhone app coming soon</span></div>
            <ul className="facts" aria-label="Good to know"><li>No minimum order</li><li>Pick up anytime</li><li>Delivery when you need it</li></ul>
          </div>
          <HeroStage />
        </div></section>

        <section className="addk" aria-label="Add your kirana"><div className="wrap"><div className="inner">
          <div className="coin" aria-hidden="true">100</div>
          <div><strong>Your kirana isn't on <span className="ds">Dukaan<span className="se">Se</span></span> yet?</strong><p>Add it from the app and earn 100 Gullak coins once it goes live. We're adding new kiranas every week.</p></div>
          <a className="btn" href={CUSTOMER_APP}>Add your kirana</a>
        </div></div></section>

        <section className="how" id="how" aria-labelledby="h-title"><div className="wrap">
          <img src="/assets/img/evening.webp" alt="A customer walking home past his society gate with a DukaanSe bag" width="1009" height="551" loading="lazy" />
          <div>
            <h2 id="h-title">Three steps. Zero queue.</h2>
            <ol className="steps">
              <li><div><h3>Order on the app</h3><p>Pick a kirana near you, add what you need and pay in the app.</p></div></li>
              <li><div><h3>Your kirana packs it</h3><p>The shop you already know gets your order and packs it while you carry on with your day.</p></div></li>
              <li><div><h3>Show your OTP, take your bag</h3><p>Walk in whenever you pass by. No waiting at the counter, no "bhaiya, woh wala dena".</p></div></li>
            </ol>
          </div>
        </div></section>

        <section className="day" aria-labelledby="d-title"><div className="wrap">
          <div className="top-row">
            <h2 id="d-title">Fits into the day you already have.</h2>
            <p className="lede">You already pass your kirana a dozen times a week. Pick a moment and see how <span className="ds brand-word">Dukaan<span className="se">Se</span></span> fits in.</p>
          </div>
          <Moments />
        </div></section>

        <section className="compare" id="compare" aria-labelledby="cmp-title"><div className="wrap">
          <div className="top-row">
            <h2 id="cmp-title">Not every grocery run needs a rider.</h2>
            <p className="lede">Pickup or delivery, it's your call. Tell us what's going on and we'll suggest the easier way.</p>
          </div>
          <Picker />
          <h3 className="cmp-sub">Pickup and delivery, side by side</h3>
          <div className="cmp-grid">
            <div className="tbl-wrap"><table className="tbl cmp">
              <caption className="sr">Pickup and delivery compared</caption>
              <thead><tr><th scope="col"><span className="sr">Feature</span></th><th scope="col" className="pick">Pickup <span className="badge">Saves more</span></th><th scope="col">Delivery</th></tr></thead>
              <tbody>
                <tr><th scope="row">Delivery fee</th><td className="pick"><b>None</b></td><td>₹25, free above ₹899</td></tr>
                <tr><th scope="row">Pay with Gullak coins</th><td className="pick"><span className="yes">Yes</span>, up to 25% off (max 100 coins)</td><td><span className="no">No</span></td></tr>
                <tr><th scope="row">Earn Gullak coins</th><td className="pick"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td></tr>
                <tr><th scope="row">How you get it</th><td className="pick">Show your OTP at the counter, whenever you pass by</td><td>Brought to your door by the store's staff</td></tr>
                <tr><th scope="row">If you can't make it</th><td className="pick">Held until the store closes the next day</td><td>Not applicable</td></tr>
                <tr><th scope="row">Best for</th><td className="pick">Daily needs on your walk, commute or school run</td><td>Urgent needs, heavy baskets, days you can't step out</td></tr>
              </tbody></table></div>
            <div className="fee-card">
              <h3>Marketplace fee</h3>
              <p>One small fee per order, the same for pickup and delivery.</p>
              <table className="tbl fee"><caption className="sr">Marketplace fee by order value</caption>
                <thead><tr><th scope="col">Item value</th><th scope="col">Fee</th></tr></thead>
                <tbody><tr><td>₹1 to ₹199</td><td>₹8</td></tr><tr><td>₹200 to ₹399</td><td>₹10</td></tr><tr><td>₹400 to ₹599</td><td>₹12</td></tr><tr><td>₹600 and above</td><td>₹15</td></tr></tbody></table>
              <p className="small">GST included. Shown in your cart before you pay. Never charged to your kirana.</p>
            </div>
          </div>
        </div></section>

        <section className="gullak" id="gullak" aria-labelledby="g-title"><div className="wrap">
          <div>
            <h2 id="g-title">Your savings live in a Gullak.</h2>
            <p className="lede" style={{ marginTop: 20 }}>Like the clay piggy bank you had as a kid, but it fills up every time you shop smart.</p>
            <div className="g-tables">
              <table className="tbl small-tbl"><caption>Earn coins</caption>
                <thead><tr><th scope="col">When you</th><th scope="col">You get</th></tr></thead>
                <tbody>
                  <tr><td>Sign up</td><td><b>50 coins</b></td></tr>
                  <tr><td>Order ₹200 to ₹299 of items</td><td><b>5%</b> back in coins</td></tr>
                  <tr><td>Order ₹300 to ₹499 of items</td><td><b>3%</b> back in coins</td></tr>
                  <tr><td>Order ₹500 or more of items</td><td><b>2%</b> back in coins</td></tr>
                  <tr><td>Refer a friend (after their first order)</td><td><b>50 coins</b></td></tr>
                  <tr><td>Add a kirana (once it's live)</td><td><b>100 coins</b></td></tr>
                </tbody></table>
              <p className="g-line">Every coin is worth ₹1 and stays in your Gullak for 30 days. Use them on pickup orders, as the calculator shows.</p>
            </div>
          </div>
          <GullakCalculator />
        </div></section>

        <section className="kiranas" id="kiranas" aria-labelledby="k-title"><div className="wrap">
          <img src="/assets/img/seller.webp" alt="A kirana owner standing proudly at his counter" width="950" height="556" loading="lazy" />
          <div>
            <h2 id="k-title">Your dukaan.<span className="l2">Now on every phone nearby.</span></h2>
            <p className="lede" style={{ marginTop: 20 }}>Get digital orders from your own neighbourhood, without turning your shop into a warehouse.</p>
            <ul className="perks">
              <li><strong>Zero commission</strong><span>for your first 24 months on <span className="ds">Dukaan<span className="se">Se</span></span>.</span></li>
              <li><strong>No new stock or staff</strong><span>Sell what's already on your shelves.</span></li>
              <li><strong>Prepaid orders</strong><span>Customers pay in the app before they arrive.</span></li>
              <li><strong>Discounts are on us</strong><span>Gullak coins are funded by <span className="ds">Dukaan<span className="se">Se</span></span>. You get your full price.</span></li>
            </ul>
            <div className="k-cta"><a className="gplay" href={PARTNER_APP} aria-label="Get the DukaanSe Partner app on Google Play"><img src="/assets/img/google-play-badge.png" alt="Get it on Google Play" width="188" height="56" /></a></div>
            <p className="small">Download the DukaanSe Partner app to register your shop. Read the <Link href="/merchant-agreement/">Merchant Onboarding Agreement</Link>, or write to <a href={merchantEmailLink} target="_blank" rel="noreferrer noopener">merchants@dukaanseindia.com</a>.</p>
          </div>
        </div></section>

        <section className="story" aria-labelledby="s-title"><div className="wrap">
          <p className="kicker" id="s-title">Why we built <span className="ds">Dukaan<span className="se">Se</span></span>?</p>
          <blockquote className="story-q"><p>“We kept seeing people pay to have milk brought from a shop 300 metres away. The shop was right there. It just wasn’t on their phone.”</p></blockquote>
          <div className="story-body">
            <p>That stuck with us. Your neighbourhood kirana already knows your family’s usual atta and which biscuits the kids like. It didn’t need replacing. It just needed to be one tap away.</p>
            <p>So we built <span className="ds">Dukaan<span className="se">Se</span></span>. You order from the shop you already trust, pick it up on your way, and get rewarded every time you walk in. We’re starting in Mumbai and growing the way kiranas do: one neighbourhood at a time.</p>
          </div>
        </div></section>

        <section className="faq" id="faq" aria-labelledby="f-title"><div className="wrap">
          <div><h2 id="f-title">Questions, answered.</h2><p className="help">Still stuck? Write to <a href={supportEmailLink} target="_blank" rel="noreferrer noopener">support@dukaanseindia.com</a>.</p></div>
          <div>
            <details><summary><span>What is <span className="ds">Dukaan<span className="se">Se</span></span>?</span></summary><p>An app for ordering from the kiranas near you. You order on your phone, the shop packs it, and you pick it up when you pass by. Can't step out? Choose delivery instead.</p></details>
            <details><summary><span>Is <span className="ds">Dukaan<span className="se">Se</span></span> available near me?</span></summary><p>We're starting in Mumbai and adding kiranas every week. Open the app to see the ones near you. If your favourite kirana isn't there yet, add it from the app.</p></details>
            <details><summary><span>Is there a minimum order?</span></summary><p>No. Order a single packet of milk or a whole month's groceries.</p></details>
            <details><summary><span>How does pickup work?</span></summary><p>Choose Pickup at checkout and your kirana packs the order. When you get there, show the OTP in the app and take your bag. No queue, no waiting.</p></details>
            <details><summary><span>How do Gullak coins work?</span></summary><p>You get 50 coins when you sign up, 50 when a friend you refer places their first order, and 100 for every kirana you add once it goes live. You also earn coins back on every order. Use them on pickup orders for up to 25% off, up to 100 coins per order. 1 coin = ₹1, and coins are valid for 30 days.</p></details>
            <details><summary><span>Are there any fees?</span></summary><p>A small marketplace fee of ₹8 to ₹15 per order, depending on the value of your items. Pickup has no delivery fee. Delivery costs ₹25 and is free when your items are above ₹899.</p></details>
            <details><summary><span>How do I pay?</span></summary><p>All orders are paid in the app by UPI or other online methods. We don’t offer cash on delivery.</p></details>
            <details><summary><span>Can I cancel an order?</span></summary><p>Yes, within 5 minutes of placing it or before the store accepts it, whichever comes first.</p></details>
            <details><summary><span>What if I can't pick up my order?</span></summary><p>We'll remind you in the app. If it isn't collected by the time the store closes the next day, the order is cancelled: packaged items are refunded to your original payment method and any coins you used are returned. Uncollected perishables, like milk, bread, fruits and vegetables, aren't refunded, and the app tells you this before you pay.</p></details>
            <details><summary><span>Something was missing or damaged. What do I do?</span></summary><p>Report it in the app from your order page: within 24 hours for perishables and 48 hours for packaged items. Refunds go back to your original payment method. See our <Link href="/refunds/">Refund &amp; Cancellation Policy</Link> for details.</p></details>
            <details><summary><span>I own a kirana. How do I join?</span></summary><p>Download the DukaanSe Partner app from Google Play and register your shop, or write to <a href={merchantEmailLink} target="_blank" rel="noreferrer noopener">merchants@dukaanseindia.com</a> and our team will help you get set up. You can read the <Link href="/merchant-agreement/">Merchant Onboarding Agreement</Link> before you sign up.</p></details>
          </div>
        </div></section>

        <section className="final" aria-labelledby="fin-title"><div className="wrap">
          <h2 id="fin-title" className="tagline"><span className="ds">Dukaan<span className="se">Se</span></span> liya, toh sahi kiya.</h2>
          <p className="one-line">Your kirana is closer than you think.<br className="m-br" /> Now it's on your phone too.</p>
          <a className="gplay" href={CUSTOMER_APP} aria-label="Get DukaanSe on Google Play"><img src="/assets/img/google-play-badge.png" alt="Get it on Google Play" width="215" height="64" /></a>
          <p className="soon">iPhone app coming soon</p>
        </div></section>
      </main>
      <Footer home />
    </>
  );
}
