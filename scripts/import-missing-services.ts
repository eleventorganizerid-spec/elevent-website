/**
 * import-missing-services.ts
 *
 * Targeted import for 4 services not yet in Sanity:
 *   - brand-activation
 *   - exhibition-pameran
 *   - roadshow
 *   - corporate-event-organizer
 *
 * Uses createOrReplace — does NOT delete existing services.
 * Run: npx tsx --env-file=.env.local scripts/import-missing-services.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/import-missing-services.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '98jwav2j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

const missing = [
  // ── 1. Brand Activation ──────────────────────────────────────────────
  {
    _id: 'service-brand-activation',
    _type: 'service',
    title: 'Brand Activation',
    titleId: 'Aktivasi Brand',
    slug: { _type: 'slug', current: 'brand-activation' },
    number: '13/16',
    tier: 'tier2',
    descriptor: 'Aktivasi yang mengubah kehadiran menjadi keterlibatan nyata dan ingatan yang bertahan.',
    descriptorEn: 'Activations that convert presence into genuine engagement and lasting memory.',
    tagline: 'Aktivasi yang mengkonversi kehadiran menjadi keterlibatan nyata.',
    problem:
      'Aktivasi brand gagal ketika memprioritaskan spektakel atas keterlibatan. Keramaian bukan berarti koneksi. Sebagian besar aktivasi difoto dan dilupakan dalam hitungan jam.',
    approach:
      'Kami merancang aktivasi sebagai pengalaman brand yang partisipatif. Pengunjung bukan penonton — mereka berperan. Setiap interaksi dirancang untuk menciptakan kenangan yang milik brand, bukan feed Instagram.',
    included: [
      'Desain konsep dan pengalaman',
      'Desain ruang dan instalasi',
      'Integrasi narasi dan pesan brand',
      'Briefing kru dan talent',
      'Manajemen perjalanan dan alur pengunjung',
      'Setup pengambilan konten',
      'Laporan pasca-aktivasi dan analisis jangkauan',
    ],
    idealFor:
      'Brand dengan kehadiran di acara publik, expo, mal, atau pengalaman yang dimiliki — di mana tujuannya adalah waktu tinggal, koneksi emosional, dan earned media.',
    faqs: [
      {
        _key: 'faq-ba-1',
        question: 'How do you measure activation success?',
        questionId: 'Bagaimana Anda mengukur keberhasilan aktivasi?',
        answer: 'We define success metrics with the client before design begins.',
        answerId:
          'Kami mendefinisikan metrik keberhasilan bersama klien sebelum desain dimulai — biasanya kombinasi waktu tinggal, tingkat interaksi, volume pengambilan konten, dan konversi lead. Kami membangun mekanisme pengukuran ke dalam aktivasi sejak awal.',
      },
      {
        _key: 'faq-ba-2',
        question: 'Do you design the physical build or just the concept?',
        questionId: 'Apakah Anda mendesain pembangunan fisik atau hanya konsepnya?',
        answer: 'Both — concept through construction, with ELEVENT as the single point of accountability.',
        answerId:
          'Keduanya — dari konsep hingga konstruksi, dengan ELEVENT sebagai satu titik akuntabilitas. Kami merancang pengalaman pengunjung, menentukan spesifikasi pembangunan fisik, dan mengelola fabrikasi dan instalasi dengan mitra produksi kami.',
      },
      {
        _key: 'faq-ba-3',
        question: 'How much lead time does a brand activation require?',
        questionId: 'Seberapa jauh sebelumnya aktivasi harus direncanakan?',
        answer: 'For activations with complex physical builds, 8–10 weeks is our recommended lead time.',
        answerId:
          'Untuk aktivasi dengan pembangunan fisik yang kompleks, kami merekomendasikan minimal 8–10 minggu. Ini mencakup desain, persetujuan klien, fabrikasi, dan instalasi. Aktivasi yang lebih sederhana bisa dilaksanakan dalam 4–6 minggu. Keterlibatan awal juga membuka pilihan venue dan talent premium yang sering habis jauh sebelum tanggal pelaksanaan.',
      },
    ],
  },

  // ── 2. Exhibition & Pameran ──────────────────────────────────────────
  {
    _id: 'service-exhibition-pameran',
    _type: 'service',
    title: 'Exhibition & Pameran',
    titleId: 'Exhibition & Pameran',
    slug: { _type: 'slug', current: 'exhibition-pameran' },
    number: '14/16',
    tier: 'tier2',
    descriptor: 'Kehadiran pameran yang dirancang untuk menarik dan mengkonversi, bukan sekadar memajang.',
    descriptorEn: 'Exhibition presence designed to attract and convert, not merely display.',
    tagline: 'Kehadiran pameran yang dirancang untuk menarik dan mengkonversi, bukan sekadar ditampilkan.',
    problem:
      'Booth pameran yang gagal adalah yang dirancang seperti brosur tiga dimensi. Pengunjung melihat, membaca, dan berlalu. Tidak ada percakapan yang dimulai, tidak ada lead yang tertangkap, tidak ada kesan yang bertahan.',
    approach:
      'Kami merancang kehadiran exhibition sebagai pengalaman — bukan display. Dari konsep booth, alur pengunjung, hingga aktivasi di dalam booth, setiap elemen dirancang untuk memulai percakapan yang tepat dengan orang yang tepat.',
    included: [
      'Desain konsep dan visual booth',
      'Konstruksi dan instalasi booth',
      'Desain alur dan pengalaman pengunjung',
      'Materi dan kolateral promosi',
      'Briefing dan manajemen tim booth',
      'Sistem penangkapan lead',
      'Dokumentasi dan laporan pasca-pameran',
    ],
    idealFor:
      'Perusahaan yang berpartisipasi dalam trade show, pameran industri, atau expo — di mana tujuannya adalah menghasilkan lead, membangun awareness, atau memperkuat posisi pasar.',
    faqs: [
      {
        _key: 'faq-ep-1',
        question: 'What booth sizes do you typically work with?',
        questionId: 'Ukuran booth apa yang biasanya Anda tangani?',
        answer: 'We work with booths from 9m² to 300m² custom builds.',
        answerId:
          'Kami bekerja dengan booth dari 9m² hingga custom build 300m² dan lebih. Ukuran bukanlah variabel terpenting — desain pengalaman pengunjung di dalam ruang yang tersedia adalah yang menentukan apakah booth Anda menghasilkan percakapan atau tidak.',
      },
      {
        _key: 'faq-ep-2',
        question: 'Do you manage registration and coordination with exhibition organisers?',
        questionId: 'Apakah Anda juga mengelola proses pendaftaran dan koordinasi dengan penyelenggara pameran?',
        answer: 'Yes. We handle the full coordination with exhibition organisers from registration through teardown.',
        answerId:
          'Ya. Kami mengelola seluruh proses koordinasi dengan penyelenggara pameran — pendaftaran booth, pengajuan gambar teknis, koordinasi listrik dan IT, serta compliance dengan regulasi venue. Ini adalah pekerjaan yang memakan waktu dan sering diabaikan sampai terlambat; kami mengurusnya sejak awal.',
      },
      {
        _key: 'faq-ep-3',
        question: 'Can you design a booth system that works across multiple exhibitions?',
        questionId: 'Bisakah Anda merancang booth yang bisa digunakan di beberapa pameran?',
        answer: 'Yes. We design modular booth systems that reconfigure for different footprints and layouts.',
        answerId:
          'Ya. Kami merancang sistem booth modular yang bisa dikonfigurasi ulang untuk ukuran dan tata letak yang berbeda di pameran yang berbeda. Ini memaksimalkan nilai investasi pembangunan dan memastikan tampilan brand yang konsisten di semua kehadiran pameran Anda sepanjang tahun.',
      },
    ],
  },

  // ── 3. Roadshow ─────────────────────────────────────────────────────
  {
    _id: 'service-roadshow',
    _type: 'service',
    title: 'Roadshow',
    titleId: 'Roadshow',
    slug: { _type: 'slug', current: 'roadshow' },
    number: '15/16',
    tier: 'tier2',
    descriptor: 'Program multi-kota dengan standar yang konsisten di setiap titik.',
    descriptorEn: 'Multi-city programmes with consistent standards at every stop.',
    tagline: 'Program multi-kota dengan standar yang konsisten di setiap titik.',
    problem:
      'Roadshow gagal ketika setiap kota terasa seperti acara yang berbeda — kualitas yang tidak konsisten, pesan yang terdilusi, dan audiens di kota ke-3 mendapat pengalaman yang lebih buruk dari kota ke-1.',
    approach:
      'Kami mengelola roadshow sebagai satu program yang diekspresikan di banyak lokasi — dengan standar produksi, pesan, dan pengalaman yang identik dari kota pertama hingga kota terakhir. Adaptasi lokal dibuat tanpa mengorbankan konsistensi.',
    included: [
      'Perencanaan rute dan jadwal multi-kota',
      'Manajemen venue di setiap kota',
      'Logistik pergerakan tim dan peralatan',
      'Produksi standar di setiap lokasi',
      'Manajemen peserta lokal dan registrasi',
      'Koordinasi media lokal',
      'Pelaporan komprehensif per kota',
    ],
    idealFor:
      'Brand dan perusahaan yang ingin menjangkau audiens di beberapa kota dalam satu program terkoordinasi — untuk peluncuran produk, sosialisasi kebijakan, atau kampanye engagement regional.',
    faqs: [
      {
        _key: 'faq-rs-1',
        question: 'How many cities can a roadshow cover?',
        questionId: 'Berapa banyak kota yang bisa dicakup oleh roadshow?',
        answer: 'We have run roadshows covering 3 to 15 cities across Indonesia and Southeast Asia.',
        answerId:
          'Kami telah menjalankan roadshow yang mencakup 3 hingga 15 kota di Indonesia dan Asia Tenggara. Kunci keberhasilan roadshow multi-kota adalah standarisasi produksi yang ketat dan sistem logistik yang handal — kami membangun keduanya sejak tahap perencanaan.',
      },
      {
        _key: 'faq-rs-2',
        question: 'How do you ensure consistent quality at every city stop?',
        questionId: 'Bagaimana Anda memastikan kualitas yang konsisten di setiap kota?',
        answer: 'We develop a standardised production playbook and travel our core team with every programme.',
        answerId:
          'Kami mengembangkan playbook produksi standar untuk setiap roadshow — mencakup setup teknis, skrip, panduan briefing tim, dan checklist kualitas. Tim inti kami melakukan perjalanan dengan program; tim lokal di setiap kota di-onboarding menggunakan standar yang sama. Setiap kota mendapat rehearsal teknis sebelum hari-H, bukan perbaikan dadakan.',
      },
      {
        _key: 'faq-rs-3',
        question: 'Can you manage a roadshow that mixes public and private events in the same city?',
        questionId: 'Apakah Anda bisa mengelola roadshow yang menggabungkan acara publik dan privat di kota yang sama?',
        answer: 'Yes. Many of our enterprise roadshows combine formats within a single city.',
        answerId:
          'Ya. Banyak roadshow enterprise kami menggabungkan format — misalnya, workshop dealer di pagi hari di satu venue, dilanjutkan peluncuran publik di sore hari di venue berbeda, di kota yang sama. Kami mengelola transisi logistik antar format dan memastikan tim dan materi ada di tempat yang tepat pada waktu yang tepat.',
      },
    ],
  },

  // ── 4. Corporate Event Organizer ────────────────────────────────────
  {
    _id: 'service-corporate-event-organizer',
    _type: 'service',
    title: 'Corporate Event Organizer',
    titleId: 'Event Organizer Korporat',
    slug: { _type: 'slug', current: 'corporate-event-organizer' },
    number: '16/16',
    tier: 'tier2',
    descriptor: 'Mitra EO strategis — satu titik akuntabilitas untuk seluruh kalender event Anda.',
    descriptorEn: 'Strategic EO partner — one point of accountability for your entire events calendar.',
    tagline: 'Satu kontak. Satu standar. Untuk semua format event korporat Anda.',
    problem:
      'Banyak EO yang bisa mengeksekusi acara. Sedikit yang bisa memahami konteks bisnis di baliknya, memberikan perspektif yang menantang brief, dan bertanggung jawab penuh terhadap hasilnya — bukan hanya kehadiran dan dekorasi.',
    approach:
      'ELEVENT beroperasi sebagai mitra event organizer strategis — bukan sekadar vendor. Kami membawa perspektif, pengalaman lintas industri, dan jaringan vendor terverifikasi ke setiap engagement, dengan satu titik akuntabilitas dari brief hingga evaluasi pasca-acara.',
    included: [
      'Konsultasi brief dan perencanaan strategis',
      'Manajemen proyek penuh end-to-end',
      'Koordinasi vendor dan subkontraktor',
      'Manajemen anggaran dan pelaporan keuangan',
      'Eksekusi on-site dan manajemen hari-H',
      'Evaluasi dan pelaporan pasca-acara',
      'Akses ke jaringan venue dan vendor terverifikasi ELEVENT',
    ],
    idealFor:
      'Perusahaan yang membutuhkan mitra EO jangka panjang yang memahami standar korporat, mampu mengelola kompleksitas enterprise, dan bisa dipercaya untuk merepresentasikan brand mereka di setiap acara.',
    faqs: [
      {
        _key: 'faq-ceo-1',
        question: 'What makes ELEVENT different from other event organizers?',
        questionId: 'Apa yang membedakan ELEVENT dari event organizer lainnya?',
        answer: 'We direct, not just execute. Every brief gets a dedicated specialist team that has run the same format before.',
        answerId:
          'Kami mengarahkan, bukan sekadar mengeksekusi. Setiap brief dipasangkan dengan tim spesialis yang sudah berkali-kali menjalankan format yang sama — satu kontak, akuntabilitas penuh dari awal hingga ruangan terakhir ditutup. Kami juga membawa perspektif yang menantang brief Anda, bukan sekadar menyetujuinya.',
      },
      {
        _key: 'faq-ceo-2',
        question: 'Can ELEVENT manage our entire annual events calendar?',
        questionId: 'Bisakah ELEVENT mengelola seluruh kalender acara tahunan kami?',
        answer: 'Yes. We work with several clients as their dedicated annual events partner.',
        answerId:
          'Ya. Kami bekerja dengan beberapa klien sebagai mitra acara tahunan khusus mereka — mengelola seluruh portofolio acara dari konferensi besar hingga gathering internal, dengan konsistensi standar dan pengetahuan mendalam tentang brand dan budaya perusahaan yang terakumulasi dari waktu ke waktu.',
      },
      {
        _key: 'faq-ceo-3',
        question: 'What does the onboarding process look like for a long-term EO partnership?',
        questionId: 'Bagaimana proses onboarding jika kami ingin menjadikan Elevent sebagai mitra EO jangka panjang?',
        answer: 'We start with a discovery session to understand your events calendar, brand standards, and internal stakeholders.',
        answerId:
          'Kami memulai dengan sesi discovery untuk memahami kalender acara Anda, standar brand, pemangku kepentingan internal, dan ekspektasi. Dari situ, kami menyusun program kemitraan tahunan — termasuk struktur tim, protokol komunikasi, dan proses persetujuan yang disesuaikan dengan cara kerja organisasi Anda. Kebanyakan kemitraan jangka panjang kami dimulai dengan satu acara percontohan terlebih dahulu.',
      },
    ],
  },
]

async function run() {
  console.log(`\n📦  Importing ${missing.length} missing services to Sanity...\n`)
  let success = 0
  let failed = 0

  for (const service of missing) {
    try {
      await client.createOrReplace(service)
      console.log(`  ✅  ${service.number}  ${service.title}  (${service.slug.current})`)
      success++
    } catch (err) {
      console.error(`  ❌  ${service.title}:`, err)
      failed++
    }
  }

  console.log(`\n✨  Done. ${success} imported, ${failed} failed.\n`)
}

run()
