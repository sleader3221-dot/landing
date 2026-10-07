'use client';
import Link from 'next/link';
import { useState } from 'react';

type Mode = 'pickup' | 'delivery';

const fee = (v: number) => (v < 200 ? 8 : v < 400 ? 10 : v < 600 ? 12 : 15);
const rs = (n: number) => '\u20B9' + n.toLocaleString('en-IN');

/** Gullak calculator. Rules: pickup discount is 25% of item value, capped at 100 coins (₹100) per order. */
export default function GullakCalculator() {
  const [mode, setMode] = useState<Mode>('pickup');
  const [cart, setCart] = useState(200);
  const [coins, setCoins] = useState(50);

  const c = cart, k = coins, f = fee(c);
  const pickupDiscountCap = Math.min(100, Math.max(0, Math.floor(c * 0.25)));
  const usable = Math.min(k, pickupDiscountCap);
  const del = c >= 899 ? 0 : 25;
  const pickup = mode === 'pickup';
  const used = pickup ? usable : 0;
  const dfee = pickup ? 0 : del;
  const payable = Math.max(c - used + f + dfee, 0);

  let saved: React.ReactNode;
  let tip: string;
  if (pickup) {
    const discountPercent = c > 0 ? Number(((used / c) * 100).toFixed(1)) : 0;
    saved = <>You save <b>{rs(used)}</b>{` (${discountPercent}%) on this pickup.`}</>;
    const gap = pickupDiscountCap - usable;
    tip = gap > 0
      ? gap + ' more coins would unlock the full 25% on this order. Add a kirana from the app to earn 100.'
      : 'You\u2019re getting the maximum discount on this order.';
  } else {
    const extra = usable + del;
    saved = extra ? <>Pick it up instead and save <b>{rs(extra)}</b> on this order.</> : 'Delivery is free on this order.';
    tip = 'Coins can\u2019t be used on delivery orders, but you still earn coins on them.';
  }

  return (
    <div className="calc" aria-labelledby="c-title">
      <h3 id="c-title">See what you&apos;d pay</h3>
      <p className="hint">Set to a new customer&apos;s first order. Switch between pickup and delivery, or move the sliders.</p>
      <div className="mode" role="group" aria-label="Order type"><button type="button" data-mode="pickup" aria-pressed={pickup} onClick={() => setMode('pickup')}>Pickup</button><button type="button" data-mode="delivery" aria-pressed={!pickup} onClick={() => setMode('delivery')}>Delivery</button></div>
      <div className="field"><label htmlFor="cart">Your items <output id="cartOut" htmlFor="cart">{rs(c)}</output></label><input type="range" id="cart" min="50" max="1500" step="10" value={cart} onChange={(e) => setCart(+e.target.value)} /></div>
      <div className="field"><label htmlFor="coins">Coins in your Gullak <output id="coinsOut" htmlFor="coins">{k}</output></label><input type="range" id="coins" min="0" max="300" step="1" value={coins} onChange={(e) => setCoins(+e.target.value)} /></div>
      <div className="bill" aria-live="polite">
        <div><span>Items</span><span id="bItems">{rs(c)}</span></div>
        <div id="rowCoins" hidden={!pickup}><span>Gullak coins</span><span id="bCoins">{used ? '\u2212' + rs(used) : rs(0)}</span></div>
        <div><span>Marketplace fee</span><span id="bFee">{rs(f)}</span></div>
        <div id="rowDel" hidden={pickup}><span>Delivery fee</span><span id="bDel">{dfee ? rs(dfee) : 'Free'}</span></div>
        <div className="pay"><span>You pay</span><span id="bPay">{rs(payable)}</span></div>
      </div>
      <div className="saved" id="saved">{saved}</div>
      <p className="tip" id="bTip">{tip}</p>
      <p className="fine">*On pickup orders: up to 25% of item value, maximum 100 coins per order, depending on your coin balance. <Link href="/terms/#coins" style={{ color: 'inherit' }}>T&amp;C apply</Link>.</p>
    </div>
  );
}
