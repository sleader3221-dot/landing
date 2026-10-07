'use client';
import { useState } from 'react';

const OPTIONS = [
  { mode: 'Pickup', label: '"Waise bhi neeche ja raha hoon."', why: "You're stepping out anyway. Order before you leave, the shop packs it while you're on your way, and you just grab the bag. Your Gullak coins can take up to 25% off." },
  { mode: 'Pickup', label: '"Office se aate hue le lunga."', why: 'Order on the train, pick it up on the walk home. No queue at the counter, and the coins come off your bill.' },
  { mode: 'Delivery', label: '"Doodh khatam, abhi chahiye."', why: "Chai's on the stove and you can't step out? Let your kirana send it over. Delivery is ₹25, and free when your items are above ₹899." },
  { mode: 'Delivery', label: '"Mahine ka saaman lena hai."', why: "Atta, oil, a month's dal: that's a heavy bag to carry. Have it brought home instead, free when your items are above ₹899." },
];

/** Pickup or delivery picker (ported from site.js). */
export default function Picker() {
  const [sel, setSel] = useState(0);
  const cur = OPTIONS[sel];
  return (
    <>
      <div className="picker" role="group" aria-label="What's going on?">
        {OPTIONS.map((o, i) => (
          <button key={i} type="button" aria-pressed={i === sel} data-mode={o.mode} data-why={o.why} onClick={() => setSel(i)}>{o.label}</button>
        ))}
      </div>
      <div className="answer" aria-live="polite">
        <div className={cur.mode === 'Delivery' ? 'ans-mode del' : 'ans-mode'} id="ansMode">{cur.mode}</div>
        <p id="ansWhy">{cur.why}</p>
      </div>
    </>
  );
}
