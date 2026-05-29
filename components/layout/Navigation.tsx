'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './Navigation.module.css'

const navLinks = [
  { label: 'Services',  href: '/services'  },
  { label: 'Work',      href: '/work'       },
  { label: 'Insights',  href: '/insights'   },
  { label: 'About',     href: '/about'      },
  { label: 'Contact',   href: '/contact'    },
]

interface NavigationProps {
  forceDark?: boolean
}

export default function Navigation({ forceDark = false }: NavigationProps) {
  const [scrolled, setScrolled]       = useState(false)
  const [isMenuOpen, setIsMenuOpen]   = useState(false)
  const searchParams = useSearchParams()
  const pathname     = usePathname()
  const currentLang  = searchParams.get('lang') ?? 'id'

  const langParam = currentLang === 'en' ? '?lang=en' : ''
  const enUrl = `${pathname}?lang=en`
  const idUrl = pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={[
          styles.header,
          forceDark ? styles.heroMode : '',
          scrolled    ? styles.scrolled  : '',
        ].filter(Boolean).join(' ')}
      >
        <div className={styles.inner}>

          <Link href={`/${langParam}`} className={styles.logo} onClick={closeMenu}>
            ELE<span className={styles.logoV}>V</span>ENT
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={`${link.href}${langParam}`} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <span className={styles.langSwitcher}>
              <Link href={enUrl} className={currentLang === 'en' ? styles.langActive : styles.langInactive}>EN</Link>
              <span className={styles.langSep}>/</span>
              <Link href={idUrl} className={currentLang === 'id' ? styles.langActive : styles.langInactive}>ID</Link>
            </span>
            <Link href={`/get-a-proposal${langParam}`} className={styles.ctaBtn}>
              Get a Proposal
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line1Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line2Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line3Open : ''}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`} aria-hidden={!isMenuOpen}>
        <button className={styles.mobileClose} onClick={closeMenu} aria-label="Close menu">
          ×
        </button>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`${link.href}${langParam}`}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileDivider} />

        <div className={styles.mobileLang}>
          <Link href={enUrl} className={currentLang === 'en' ? styles.langActive : styles.langInactive} onClick={closeMenu}>EN</Link>
          <span className={styles.langSep}>/</span>
          <Link href={idUrl} className={currentLang === 'id' ? styles.langActive : styles.langInactive} onClick={closeMenu}>ID</Link>
        </div>

        <Link href={`/get-a-proposal${langParam}`} className={styles.mobileCtaBtn} onClick={closeMenu}>
          Get a Proposal →
        </Link>
      </div>
    </>
  )
}
