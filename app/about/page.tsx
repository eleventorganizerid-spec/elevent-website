import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import AnimateIn from '@/components/ui/AnimateIn'
import Footer from '@/components/layout/Footer'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { baseOpenGraph } from '@/lib/seo'
import CTASection from '@/components/home/CTASection'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About — Elevent',
  description: 'Elevent is a strategic event partner for enterprise companies in Indonesia. A curated platform model matching every brief with the right specialist team.',
  alternates: {
    canonical: 'https://elevent.id/about',
    languages: {
      'x-default': 'https://elevent.id/about',
      'id': 'https://elevent.id/about',
      'en': 'https://elevent.id/about?lang=en',
    },
  },
  openGraph: {
    ...baseOpenGraph,
    title: 'About — Elevent',
    description: 'Elevent is a strategic event partner for enterprise companies in Indonesia.',
    url: 'https://elevent.id/about',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'About Elevent — Strategic Corporate Event Partner in Indonesia' }],
  },
}

const beliefs = [
  {
    numeral: 'I',
    statement: 'Events are business tools, not celebrations.',
    body: 'Setiap event yang kami tangani punya tujuan bisnis yang spesifik. Kami tidak mulai bekerja sebelum tujuan itu jelas.',
    bodyEn: "Every event we handle has a specific business objective. We don't start work until that objective is clear.",
  },
  {
    numeral: 'II',
    statement: 'The best EO is the one you never have to manage.',
    body: 'Klien kami tidak punya waktu untuk mengawasi vendor satu per satu. Mereka butuh partner yang bisa dipercaya untuk mengambil keputusan yang tepat, bahkan ketika mereka tidak ada di ruangan.',
    bodyEn: "Our clients don't have time to manage vendors one by one. They need a partner they can trust to make the right decisions, even when they're not in the room.",
  },
  {
    numeral: 'III',
    statement: 'Execution without direction is just logistics.',
    body: 'Siapapun bisa menjalankan event. Yang sulit adalah memastikan setiap momen dalam event itu mengarah pada tujuan yang sama. Itulah yang kami lakukan.',
    bodyEn: "Anyone can run an event. What's difficult is ensuring every moment in that event points toward the same objective. That's what we do.",
  },
]

const standards = [
  {
    num: '01',
    statement: 'Brief consultation sebelum proposal.',
    statementEn: 'Brief consultation before proposal.',
    body: 'Kami tidak mengirim proposal tanpa memahami tujuan bisnis di balik event.',
    bodyEn: "We don't send a proposal without understanding the business objective behind the event.",
  },
  {
    num: '02',
    statement: 'Satu penanggung jawab sepanjang project.',
    statementEn: 'One point of accountability throughout the project.',
    body: 'Tidak ada penyerahan ke tim lain yang tidak tahu konteks. Kami yang pegang dari awal hingga akhir.',
    bodyEn: "No handoffs to another team that doesn't know the context. We hold it from start to finish.",
  },
  {
    num: '03',
    statement: 'Transparansi anggaran.',
    statementEn: 'Budget transparency.',
    body: 'Setiap pos pengeluaran ada alasannya. Tidak ada biaya tersembunyi, tidak ada markup yang tidak dijelaskan.',
    bodyEn: 'Every line item has a reason. No hidden costs, no unexplained markups.',
  },
  {
    num: '04',
    statement: 'Post-event measurement.',
    statementEn: 'Post-event measurement.',
    body: 'Kami tidak pergi setelah venue ditutup. Kami ingin tahu apakah event-nya bekerja.',
    bodyEn: "We don't leave after the venue closes. We want to know if the event worked.",
  },
]

const cities = [
  {
    name: 'Jakarta',
    role: 'Primary market · HQ operations',
    desc: 'Pasar utama kami, dari SCBD hingga Sudirman, kami mengenal setiap venue, setiap vendor, dan setiap nuansa protokol korporat di kota ini.',
    descEn: 'Our primary market. From SCBD to Sudirman, we know every venue, every vendor, and every nuance of corporate protocol in this city.',
  },
  {
    name: 'Bali',
    role: 'International MICE & incentive hub',
    desc: 'Destinasi pilihan untuk incentive trip, konferensi internasional, dan program MICE regional, dengan jaringan lokal yang telah kami bangun selama bertahun-tahun.',
    descEn: "The preferred destination for incentive trips, international conferences, and regional MICE programs — with a local network we've built over years.",
  },
  {
    name: 'Surabaya',
    role: 'East Java enterprise market',
    desc: 'Pusat ekonomi Jawa Timur dengan komunitas bisnis enterprise yang kuat, kami hadir dengan standar yang sama seperti di Jakarta.',
    descEn: "East Java's economic hub with a strong enterprise business community. We operate here with the same standard as Jakarta.",
  },
]

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  const isEn = lang === 'en'

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'About', url: 'https://elevent.id/about' },
      ]} />
      <Navigation forceDark />
      <main className={styles.main}>

        {/* ── 1. HERO — full-bleed background photo + overlay ────── */}
        <section className={styles.hero}>
          <Image
            src="/assets/about-hero.jpg"
            fill
            alt=""
            priority
            sizes="100vw"
            className={styles.heroImage}
            style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <AnimateIn delay={0} className={styles.heroLabel}>ABOUT ELEVENT</AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className={styles.heroHeadline}>
                <span>We built Elevent because</span>
                <span>most corporate events</span>
                <em>deserve better.</em>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2} className={styles.heroSub}>
              {isEn
                ? 'Not because the industry lacks players. But because too few actually care about the outcome.'
                : 'Bukan karena industrinya kekurangan pelaku. Tapi karena terlalu sedikit yang benar-benar peduli dengan hasilnya.'}
            </AnimateIn>
          </div>
        </section>

        {/* ── 2. THE ORIGIN — pull quote layout ────────────────── */}
        <section className={styles.originSection}>
          <div className={styles.inner}>
            <div className={styles.originLayout}>

              {/* Rotated side label */}
              <div className={styles.originSideCol}>
                <p className={styles.originSideLabel}>01 — THE ORIGIN</p>
              </div>

              {/* Body content */}
              <div className={styles.originContent}>
                {/* First paragraph — large lead serif */}
                <p className={styles.originLead}>
                  {isEn
                    ? "Elevent was built from a simple observation: most event organizers in Indonesia operate as vendors — they wait for a brief, execute it, then leave. No one actually asks: did this event achieve its business objective?"
                    : 'Elevent lahir dari satu pengamatan sederhana: sebagian besar event organizer di Indonesia beroperasi sebagai vendor — mereka menunggu brief, mengeksekusi, lalu pergi. Tidak ada yang benar-benar bertanya: apakah event ini mencapai tujuan bisnisnya?'}
                </p>

                {/* Second and third — narrower support column */}
                <div className={styles.originSupport}>
                  <p>
                    {isEn
                      ? "Elevent was built to be something rare: a partner that dares to disagree. One that starts from business objectives, not vendor lists. That will tell you plainly when an approach won't work — before the budget is spent."
                      : 'Elevent dibangun untuk menjadi sesuatu yang jarang ada: mitra yang berani tidak setuju. Yang memulai dari tujuan bisnis, bukan dari daftar vendor. Yang akan bilang terus terang ketika sebuah pendekatan tidak akan berhasil, sebelum anggaran dihabiskan.'}
                  </p>
                  <p>
                    {isEn
                      ? <>The name Elevent is no accident. Event lives inside our name as a reminder that we exist for one thing only: making events that actually work. And Eleven — because in the world of events, 10 out of 10 is the standard. We build for the eleventh:{' '}<em>one step beyond expectation, not merely meeting it.</em></>
                      : <>Nama Elevent bukan kebetulan. Event ada di dalam nama kami sebagai pengingat bahwa kami hanya ada untuk satu hal: membuat event yang benar-benar bekerja. Dan Eleven — sebelas — karena dalam dunia event, 10 dari 10 adalah standar. Kami membangun untuk yang kesebelas:{' '}<em>satu langkah di luar ekspektasi, bukan sekadar memenuhinya.</em></>}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. WHAT WE BELIEVE — 3-col horizontal, dark ─────── */}
        <section className={styles.beliefSection}>
          <div className={styles.inner}>

            <div className={styles.beliefHeader}>
              <p className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
                02 — WHAT WE BELIEVE
              </p>
              <h2 className={styles.beliefHeadline}>Our point of view.</h2>
            </div>

            <div className={styles.beliefCols}>
              {beliefs.map((b, i) => (
                <div
                  key={b.numeral}
                  className={`${styles.beliefCol} ${i < beliefs.length - 1 ? styles.beliefColBorder : ''}`}
                >
                  <div className={styles.beliefNumeral}>{b.numeral}</div>
                  <h3 className={styles.beliefStatement}>{b.statement}</h3>
                  <p className={styles.beliefBody}>{isEn ? (b.bodyEn ?? b.body) : b.body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. HOW WE WORK — split layout, chalk ─────────────── */}
        <section className={styles.modelSection}>
          <div className={styles.inner}>
            <div className={styles.modelSplit}>

              {/* Left 55%: label + headline + body */}
              <div className={styles.modelLeft}>
                <p className={styles.sectionLabel}>03 — HOW WE WORK</p>
                <h2 className={styles.modelHeadline}>The platform model.</h2>
                <div className={styles.modelBody}>
                  <p>
                    {isEn
                      ? 'Elevent operates on one simple principle: one contact, one accountability, from the first brief to post-event evaluation.'
                      : 'Elevent beroperasi dengan satu prinsip sederhana: satu kontak, satu tanggung jawab, dari brief pertama hingga evaluasi pasca-acara.'}
                  </p>
                  <p>
                    {isEn
                      ? "For every format, we bring a team that is genuinely expert in that field — selected on track record, not availability. Our clients don't need to know who's behind the scenes. What they know: Elevent is accountable for the outcome."
                      : 'Untuk setiap format, kami membawa tim yang memang ahli di bidangnya, dipilih berdasarkan rekam jejak, bukan ketersediaan. Klien kami tidak perlu tahu siapa yang ada di balik layar. Yang mereka tahu: Elevent yang bertanggung jawab atas hasilnya.'}
                  </p>
                  <p>
                    <em>
                      {isEn
                        ? 'One contact. One standard. Results that can be accounted for.'
                        : 'Satu kontak. Satu standar. Hasil yang bisa dipertanggungjawabkan.'}
                    </em>
                  </p>
                </div>
              </div>

              {/* Right 45%: editorial stats stacked */}
              <div className={styles.modelRight}>
                <div className={styles.modelStat}>
                  <p className={styles.modelStatNum}>16</p>
                  <p className={styles.modelStatLabel}>{isEn ? "Formats we've mastered" : 'Format yang kami kuasai'}</p>
                </div>
                <div className={styles.modelStat}>
                  <p className={styles.modelStatNum}>3</p>
                  <p className={styles.modelStatLabel}>{isEn ? 'Primary operating cities' : 'Kota utama operasi'}</p>
                </div>
                <div className={styles.modelStat}>
                  <p className={styles.modelStatCities}>Jakarta · Bali · Surabaya</p>
                  <p className={styles.modelStatLabel}>{isEn ? 'With national reach' : 'Dengan jangkauan nasional'}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. BEHIND THE WORK — crew media grid (dark) ────────── */}
        <section className={styles.crewSection}>
          <div className={styles.inner}>
            <div className={styles.crewHeader}>
              <p className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
                04 — THE TEAM
              </p>
              <h2 className={styles.crewHeadline}>Behind the work.</h2>
              <p className={styles.crewSub}>
                {isEn
                  ? 'Before the first guest arrives, our team is already in motion.'
                  : 'Sebelum tamu pertama tiba, tim kami sudah bergerak.'}
              </p>
            </div>

            <div className={styles.crewGrid}>
              <div className={styles.crewMedia}>
                <Image
                  src="/assets/about-crew-1.jpg"
                  fill
                  alt={isEn ? 'Elevent crew at work' : 'Tim Elevent sedang bekerja'}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
                />
              </div>
              <div className={styles.crewMedia}>
                <iframe
                  className={styles.crewVideo}
                  src="https://www.youtube-nocookie.com/embed/1LMPuaB6AuA?autoplay=1&mute=1&controls=0&loop=1&playlist=1LMPuaB6AuA&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1"
                  title={isEn ? 'Elevent crew highlight' : 'Highlight tim Elevent'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={styles.crewMedia}>
                <Image
                  src="/assets/about-crew-2.jpg"
                  fill
                  alt={isEn ? 'Elevent crew at work' : 'Tim Elevent sedang bekerja'}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. THE STANDARD — 2×2 bordered grid ──────────────── */}
        <section className={styles.standardSection}>
          <div className={styles.inner}>

            <div className={styles.standardHeader}>
              <p className={styles.sectionLabel}>05 — THE STANDARD</p>
              <h2 className={styles.sectionHeadline}>
                What we won&apos;t compromise on.
              </h2>
            </div>

            <div className={styles.standardGrid}>
              {standards.map((s) => (
                <div key={s.num} className={styles.standardCell}>
                  <span className={styles.standardNum}>{s.num}</span>
                  <p className={styles.standardStatement}>{isEn ? (s.statementEn ?? s.statement) : s.statement}</p>
                  <p className={styles.standardBody}>{isEn ? (s.bodyEn ?? s.body) : s.body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 6. WHERE WE WORK — photo strip + large city names ── */}
        <section className={styles.geoSection}>

          {/* Full-bleed panoramic photo strip — no overlay */}
          <div className={styles.geoPhotoStrip}>
            <Image
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=1920&q=80"
              fill
              alt="Elevent — Corporate Event Organizer Jakarta, Indonesia"
              sizes="100vw"
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
            />
          </div>

          <div className={styles.inner}>
            <div className={styles.geoBody}>
              <p className={styles.sectionLabel}>06 — WHERE WE WORK</p>
              <h2 className={styles.narrativeHeadline}>Jakarta. Bali. Surabaya.</h2>
              <p className={styles.geoSub}>
                {isEn ? 'And other cities across Indonesia.' : 'Dan kota-kota lain di seluruh Indonesia.'}
              </p>

              <div className={styles.cityGrid}>
                {cities.map((c, i) => (
                  <div
                    key={c.name}
                    className={`${styles.cityBlock} ${i < cities.length - 1 ? styles.cityBlockBorder : ''}`}
                  >
                    <p className={styles.cityLabel}>{c.role}</p>
                    <p className={styles.cityName}>{c.name}</p>
                    <p className={styles.cityDesc}>{isEn ? (c.descEn ?? c.desc) : c.desc}</p>
                  </div>
                ))}
              </div>

              <p className={styles.secondaryCities}>
                {isEn
                  ? 'Bandung · Yogyakarta · Medan · Makassar · and more'
                  : 'Bandung · Yogyakarta · Medan · Makassar · dan kota lainnya'}
              </p>
            </div>
          </div>

        </section>

        {/* ── 7. CTA ───────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
