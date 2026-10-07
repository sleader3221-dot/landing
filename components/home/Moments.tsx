'use client';
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';

const MOMENTS = [
  { id: 'morning-chai', tab: 'Morning chai', alt: 'A woman ordering groceries on her phone in her kitchen while chai boils on the stove', chip: 'Pickup', title: 'Order before the chai boils.', text: 'Milk ran out? Order from the kitchen, and pick it up on your morning walk.' },
  { id: 'society-lift', tab: 'In the lift', alt: 'A man ordering on his phone in a society lift, with a kirana visible beyond the gate', chip: 'Pickup', title: 'Order in the lift. Collect at the gate.', text: 'Place your order on the way down, and collect it from the kirana at the gate on your way out.' },
  { id: 'station-walk', tab: 'Walk from the station', alt: 'A young man walking home from the station in the evening, carrying a DukaanSe bag', chip: 'Pickup', title: 'Order on the train. Pick up on the walk home.', text: 'Your commute just became grocery time.' },
  { id: 'guests', tab: 'Guests coming', alt: 'A woman heading to answer the door, with snacks and a DukaanSe bag on the dining table', chip: 'Pickup or delivery', title: 'Guests on the way?', text: 'Pick up the snacks round the corner, or let your kirana bring them over.' },
  { id: 'innings-break', tab: 'Innings break', alt: 'A father and son watching cricket at home while ordering snacks on DukaanSe', chip: 'Pickup or delivery', title: 'Order at the toss. Snacks by the break.', text: 'Chips and namkeen from your kirana: grab them in the break, or have them brought over.' },
  { id: 'dog-walk', tab: 'Dog walk', alt: 'A woman walking her dog past a neighbourhood kirana, carrying a DukaanSe bag', chip: 'Pickup', title: 'Dog walk. Grocery run. Same route.', text: "You're going out anyway. Your kirana is on the way." },
];

/** Everyday moments: accessible tabs (ported from site.js). */
export default function Moments() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus: boolean) => {
    i = (i + MOMENTS.length) % MOMENTS.length;
    setActive(i);
    if (focus) {
      const t = tabRefs.current[i];
      if (t) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        t.focus();
        t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Everyday moments">
        {MOMENTS.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`tab-${m.id}`}
            aria-controls={`m-${m.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i, false)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') { e.preventDefault(); select(i + 1, true); }
              if (e.key === 'ArrowLeft') { e.preventDefault(); select(i - 1, true); }
            }}
          >{m.tab}</button>
        ))}
      </div>
      {MOMENTS.map((m, i) => (
        <div key={m.id} className="moment" role="tabpanel" id={`m-${m.id}`} aria-labelledby={`tab-${m.id}`} hidden={i !== active}>
          <img src={`/assets/img/moment-${m.id}.webp`} alt={m.alt} width="1200" height="900" loading={i === 0 ? 'eager' : 'lazy'} />
          <div className="copy"><span className="chip">{m.chip}</span><h3>{m.title}</h3><p>{m.text}</p>
            <div className="nav"><button type="button" data-step="-1" aria-label="Previous moment" onClick={() => select(active - 1, true)}>←</button><button type="button" data-step="1" aria-label="Next moment" onClick={() => select(active + 1, true)}>→</button></div>
          </div>
        </div>
      ))}
    </>
  );
}
