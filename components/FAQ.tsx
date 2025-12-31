import React from "react";
import styles from "./FAQ.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items?: FAQItem[] }) {
  const DEFAULT: FAQItem[] = [
    { question: "Platzhalter Frage 1", answer: "Platzhalter Antwort 1." },
    { question: "Platzhalter Frage 2", answer: "Platzhalter Antwort 2." },
    { question: "Platzhalter Frage 3", answer: "Platzhalter Antwort 3." },
    { question: "Platzhalter Frage 4", answer: "Platzhalter Antwort 4." },
    { question: "Platzhalter Frage 5", answer: "Platzhalter Antwort 5." },
  ];

  const list = items ?? DEFAULT;

  return (
    <section className={styles.faq} id="faq" aria-label="FAQ">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        <ul className={styles.list}>
          {list.map((it, idx) => (
            <li key={idx} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                aria-expanded="false"
                onClick={(e) => {
                  const btn = e.currentTarget;
                  const expanded = btn.getAttribute("aria-expanded") === "true";
                  btn.setAttribute("aria-expanded", String(!expanded));
                  const panel = btn.nextElementSibling as HTMLElement | null;
                  if (panel) {
                    panel.style.maxHeight = !expanded ? panel.scrollHeight + "px" : "0px";
                  }
                }}
              >
                {it.question}
              </button>
              <div className={styles.answer} style={{ maxHeight: 0 }}>
                <p>{it.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
