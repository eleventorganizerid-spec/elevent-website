import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import styles from './privacy.module.css'

export const metadata = {
  title: 'Privacy Policy — Elevent',
  description: 'How Elevent collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.label}>LEGAL</p>
          <h1 className={styles.headline}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: January 2026</p>

          <div className={styles.body}>
            <h2>1. Information We Collect</h2>
            <p>When you submit a brief or contact form on this website, we collect your name, company name, email address, phone number, and event details you choose to share.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide solely to respond to your inquiry, prepare a proposal, and communicate with you about your event. We do not sell or share your data with third parties for marketing purposes.</p>

            <h2>3. Data Storage</h2>
            <p>Your data is stored securely and retained only as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law.</p>

            <h2>4. Cookies</h2>
            <p>This website uses cookies for analytics purposes (Google Analytics) to help us understand how visitors use our site. You may disable cookies in your browser settings.</p>

            <h2>5. Your Rights</h2>
            <p>Under Indonesia&apos;s Personal Data Protection Law (UU PDP), you have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at halo@elevent.id.</p>

            <h2>6. Contact</h2>
            <p>For any privacy-related questions, please contact us at <a href="mailto:halo@elevent.id">halo@elevent.id</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
