const fallbackFaqs = [
  {
    _id: "faq-1",
    question: "What is DukaanSe?",
    answer:
      "DukaanSe is a local grocery shopping app that connects you directly to your nearby kirana stores. You can place your order, pick it up from the store, and save more than you would anywhere else.",
  },
  {
    _id: "faq-2",
    question: "What are Gullak Coins and how do they work?",
    answer:
      "Gullak Coins are DukaanSe's loyalty rewards that offer instant savings on pickup orders and can be used within a limited time period.",
  },
  {
    _id: "faq-3",
    question: "How can I earn Gullak Coins?",
    answer:
      "You can earn Gullak Coins by placing orders, referring friends, and taking part in app promotions and campaigns.",
  },
  {
    _id: "faq-4",
    question: "What is the delivery fee and how can I get free delivery?",
    answer:
      "DukaanSe offers a flat delivery fee for delivery orders, while pickup orders give you the best savings and may avoid delivery fees completely.",
  },
  {
    _id: "faq-5",
    question: "How do I cancel my order and get a refund?",
    answer:
      "Orders can be cancelled within a short period before the store starts preparing them. Refunds for prepaid orders are usually processed quickly.",
  },
  {
    _id: "faq-6",
    question: "Why should I choose pickup instead of delivery?",
    answer:
      "Pickup lets you save more, avoid delivery fees, support local stores, and get your order faster and with less hassle.",
  },
];

export const getAllFaqWithAnswer = async () => {
  try {
    const response = await fetch("/api/faqs", { signal: AbortSignal.timeout(5000) });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const payload = await response.json();

    if (Array.isArray(payload)) return payload;
    if (payload && Array.isArray(payload.faqs)) return payload.faqs;
    if (payload && Array.isArray(payload.data)) return payload.data;
    return fallbackFaqs;
  } catch {
    return fallbackFaqs;
  }
};
