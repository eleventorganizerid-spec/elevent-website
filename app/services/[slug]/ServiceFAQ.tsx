'use client'

import { useState } from 'react'
import styles from './ServiceFAQ.module.css'

interface FAQ {
  question?: string
  questionId?: string
  answer?: string
  answerId?: string
}

interface Props {
  faqs: FAQ[]
  lang?: string
}

export default function ServiceFAQ({ faqs, lang }: Props) {
  const isEn = lang === 'en'
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.item}>
          <button
            className={styles.trigger}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className={styles.question}>{isEn ? (faq.question ?? faq.questionId) : (faq.questionId ?? faq.question)}</span>
            <span className={styles.icon}>{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <div className={styles.answer}>
              <p>{isEn ? (faq.answer ?? faq.answerId) : (faq.answerId ?? faq.answer)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
