'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/data'
import styles from './FAQ.module.css'

interface Props {
  lang?: string
}

export default function FAQ({ lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isEn = lang === 'en'

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>07 — QUESTIONS</p>
          <h2 className={styles.headline}>
            What enterprise buyers.<br className={styles.mobileBreak} />{' '}
            <em>Ask first.</em>
          </h2>
        </div>

        <div className={styles.accordion}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const question = isEn ? (item.questionEn ?? item.question) : item.question
            const answer = isEn ? (item.answerEn ?? item.answer) : item.answer
            return (
              <div key={item.number} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.triggerNumber}>{item.number}</span>
                  <span className={styles.triggerQuestion}>{question}</span>
                  <span className={`${styles.triggerToggle} ${isOpen ? styles.triggerToggleOpen : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={styles.answer}
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
                >
                  <div className={styles.answerInner}>
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
