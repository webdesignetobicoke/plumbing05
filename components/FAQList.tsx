"use client";
import { useState } from "react";

interface FAQ { q: string; a: string; }

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
