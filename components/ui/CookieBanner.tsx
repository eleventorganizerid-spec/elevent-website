'use client'

import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('elevent-cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('elevent-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('elevent-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        This site uses cookies to understand how visitors engage with our work.{' '}
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
      </p>
      <div className={styles.actions}>
        <button onClick={decline} className={styles.btnDecline}>Decline</button>
        <button onClick={accept} className={styles.btnAccept}>Accept</button>
      </div>
    </div>
  )
}
