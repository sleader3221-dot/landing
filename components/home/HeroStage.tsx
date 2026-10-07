'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

/**
 * Hero: one orchestrated moment on load (ported from site.js).
 * step 0: "Order placed" · 1 (1.1s): "Bhaiya is packing" · 2 (2.3s): "Ready for pickup" + OTP · 3 (2.9s): toast.
 * With prefers-reduced-motion, everything is shown immediately.
 */
export default function HeroStage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(3);
      return;
    }
    const timers = [
      setTimeout(() => setStep((s) => Math.max(s, 1)), 1100),
      setTimeout(() => setStep((s) => Math.max(s, 2)), 2300),
      setTimeout(() => setStep((s) => Math.max(s, 3)), 2900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const on = (n: number) => (step >= n ? 'on' : undefined);

  return (
    <div className="stage" aria-label="An order being packed at a neighbourhood kirana">
      <div className="block"></div>
      <img className="photo" src="/assets/img/customer.webp" alt="A customer showing his DukaanSe order to the kirana owner at the counter" width="940" height="513" />
      <div className="phone" aria-hidden="true"><div className="screen">
        <div><div className="sub">Pickup from</div><div className="store">Sharma Kirana</div><div className="sub">4 items, ₹273</div></div>
        <ol className="track" id="track"><li className="on"><span className="dot"></span>Order placed</li><li className={on(1)}><span className="dot"></span>Bhaiya is packing</li><li className={on(2)}><span className="dot"></span>Ready for pickup</li></ol>
        <div className={step >= 2 ? 'otp on' : 'otp'} id="otp"><span>Show at counter</span><b>4 8 2 1</b></div>
      </div></div>
      <div className={step >= 3 ? 'toast on' : 'toast'} id="toast" role="status"><img src="/assets/img/icon.svg" alt="" /><div><strong>Aapka order ready hai!</strong><span>Sharma Kirana, 2 min walk</span></div></div>
    </div>
  );
}
