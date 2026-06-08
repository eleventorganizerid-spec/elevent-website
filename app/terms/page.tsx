import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import styles from './terms.module.css'

export const metadata = {
  title: 'Terms of Use — Elevent',
  description: 'Terms and conditions for using the Elevent website.',
}

export default function TermsPage() {
  return (
    <Suspense>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.label}>LEGAL</p>
          <h1 className={styles.headline}>Terms of Use</h1>
          <p className={styles.meta}>Last updated: January 2026</p>

          <div className={styles.body}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>

            <h2>2. Use of This Website</h2>
            <p>This website is intended for informational purposes and to facilitate contact with Elevent. You may not use this site for any unlawful purpose or in any way that could damage, disable, or impair the site.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, and design — is the property of Elevent and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.</p>

            <h2>4. No Guarantee of Service</h2>
            <p>Submitting a brief or inquiry through this website does not constitute a binding agreement or guarantee of services. All engagements are subject to a separate written agreement between you and Elevent.</p>

            <h2>5. Limitation of Liability</h2>
            <p>Elevent shall not be liable for any direct, indirect, or consequential damages arising from your use of this website or reliance on its content.</p>

            <h2>6. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.</p>

            <h2>7. Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of Indonesia.</p>

            <h2>8. Contact</h2>
            <p>For questions regarding these terms, contact us at <a href="mailto:brief@elevent.id">brief@elevent.id</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </Suspense>
  )
}
