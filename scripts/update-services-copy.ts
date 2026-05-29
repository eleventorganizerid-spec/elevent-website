/**
 * Patch service document copy in Sanity.
 * Run with:
 *   $env:SANITY_API_TOKEN="sk…"; npx ts-node --skip-project --compiler-options '{"module":"commonjs","esModuleInterop":true}' scripts/update-services-copy.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ── Types ────────────────────────────────────────────────────────────────────

interface FaqItem {
  _key: string
  questionId?: string
  answerId?: string
  [key: string]: unknown
}

interface FaqPatch {
  index: number
  questionId?: string
  answerId?: string
}

// ── Core helper ──────────────────────────────────────────────────────────────

async function patchService(
  slug: string,
  fields: Record<string, unknown>,
  faqPatches?: FaqPatch[]
): Promise<void> {
  try {
    const doc = await client.fetch<{ _id: string; faqs?: FaqItem[] } | null>(
      `*[_type == "service" && slug.current == $slug][0]{ _id, faqs }`,
      { slug }
    )

    if (!doc?._id) {
      console.warn(`⚠  [${slug}] not found in Sanity — skipping`)
      return
    }

    const patch: Record<string, unknown> = { ...fields }

    if (faqPatches && faqPatches.length > 0) {
      const faqs: FaqItem[] = doc.faqs ? doc.faqs.map((f) => ({ ...f })) : []

      for (const fp of faqPatches) {
        if (fp.index < 0 || fp.index >= faqs.length) {
          console.warn(`⚠  [${slug}] faqs[${fp.index}] out of range (length ${faqs.length}) — skipping faq patch`)
          continue
        }
        if (fp.questionId !== undefined) faqs[fp.index].questionId = fp.questionId
        if (fp.answerId !== undefined)   faqs[fp.index].answerId   = fp.answerId
      }

      patch.faqs = faqs
    }

    await client.patch(doc._id).set(patch).commit()
    console.log(`✓ [${slug}] patched`)
  } catch (err) {
    console.error(`✗ [${slug}] failed:`, err)
  }
}

// ── Patches ──────────────────────────────────────────────────────────────────

async function main() {

  // ── corporate-gathering ───────────────────────────────────────────────────
  await patchService(
    'corporate-gathering',
    {
      approach:
        'Kami merancang gathering sebagai momen penyelarasan manusia — bukan sekadar agenda yang dikemas dalam ruangan baru. Format, energi, dan ritme acara dirancang untuk membangun koneksi yang tidak mungkin terjadi dalam rapat mingguan.',
    },
    [
      {
        index: 1,
        answerId:
          'Ya. Kami telah memproduksi gathering untuk kelompok hingga 5.000 orang. Gathering besar memerlukan arsitektur program yang berbeda — kombinasi momen plenary bersama dan pengalaman yang lebih intim dalam subkelompok — sehingga setiap orang merasa benar-benar terlibat, bukan sekadar hadir.',
      },
    ]
  )

  // ── product-launching ─────────────────────────────────────────────────────
  await patchService(
    'product-launching',
    {
      approach:
        'Kami membangun peluncuran produk sebagai narasi brand. Produk memasuki konteks yang telah kami ciptakan — suasana, ruangan, urutan reveal — dirancang agar jurnalis, mitra, dan pembeli merasakan bobotnya sebelum memahami detailnya.',
    },
    [
      {
        index: 0,
        answerId:
          'Kami mengkoordinasikan proses undangan media dan akreditasi penuh, bekerja bersama tim komunikasi atau PR agency Anda. Kami mengelola check-in media, zona pers khusus, penjadwalan wawancara, dan serah terima aset konten — memastikan jurnalis memiliki semua yang dibutuhkan untuk meliput tepat waktu.',
      },
    ]
  )

  // ── gala-dinner-award-night ───────────────────────────────────────────────
  await patchService(
    'gala-dinner-award-night',
    {
      idealFor:
        'Organisasi yang mengadakan upacara penghargaan tahunan, pencapaian perusahaan, atau gala akhir tahun — di mana budaya, semangat tim, dan identitas organisasi dipertaruhkan.',
    },
    [
      {
        index: 0,
        answerId:
          'Kami telah memproduksi upacara dengan 4 hingga 40+ kategori penghargaan. Kuncinya adalah ritme — setiap kategori butuh waktu cukup untuk terasa bermakna tanpa kehilangan momentum malam. Kami menyusun skrip dan mengatur durasi setiap segmen terlebih dahulu dan melakukan rehearsal dengan semua presenter.',
      },
    ]
  )

  // ── conference-seminar ────────────────────────────────────────────────────
  await patchService('conference-seminar', {
    problem:
      'Sebagian besar konferensi dijadwalkan, bukan dirancang. Pembicara berbicara kepada deretan peserta yang pasif. Informasi disampaikan tetapi jarang diserap. Pada hari kedua, peserta sudah kehilangan fokus.',
    approach:
      'Kami merancang konferensi sebagai lingkungan pengambilan keputusan. Setiap sesi, transisi, dan tata letak ruangan dirancang untuk memajukan agenda — dari tempat duduk yang menciptakan dialog hingga sesi penutup yang menghasilkan kesepakatan, bukan sekadar tepuk tangan.',
  })

  // ── team-building ─────────────────────────────────────────────────────────
  await patchService('team-building', {
    problem:
      'Acara team building sering terasa dipaksakan karena memang dipaksakan. Pendekatan yang hanya fokus pada aktivitas menghasilkan acara yang ditoleransi, bukan diingat — dan jarang meningkatkan kohesi atau kinerja tim yang sebenarnya.',
  })

  // ── mice-hospitality ──────────────────────────────────────────────────────
  await patchService('mice-hospitality', {
    problem:
      'Program MICE enterprise sering gagal karena koordinasi yang tidak terpadu — antara meeting organizer, hotel, vendor, dan klien. Standar tidak konsisten, akuntabilitas tidak jelas, dan delegasi internasional yang paling cepat merasakannya.',
  })

  // ── hybrid-virtual-event ──────────────────────────────────────────────────
  await patchService('hybrid-virtual-event', {
    problem:
      'Acara hybrid biasanya tidak melayani audiens mana pun dengan baik. Ruangan fisik terganggu oleh logistik produksi; audiens jarak jauh hanya dipikirkan belakangan. Hasilnya adalah kompromi yang buruk untuk kedua tujuan.',
    approach:
      'Kami merancang acara hybrid sebagai dua pengalaman yang dirancang sendiri-sendiri, namun berbagi momen yang sama — bukan satu acara dengan kamera di belakang. Audiens jarak jauh dan di dalam ruangan memiliki perjalanan berbeda yang bertemu di puncak yang dikoreografikan.',
  })

  // ── incentive-trip ────────────────────────────────────────────────────────
  await patchService('incentive-trip', {
    problem:
      'Perjalanan insentif yang gagal adalah yang terasa seperti paket wisata biasa dengan rompi berlogo perusahaan. Peserta menikmati liburannya — tapi kembali tanpa semangat yang terbarukan atau loyalitas yang lebih kuat.',
    approach:
      'Kami merancang incentive trip sebagai narasi penghargaan yang imersif. Setiap elemen perjalanan — destinasi, aktivitas, momen-momennya — dirancang untuk menyampaikan satu pesan: pencapaian mereka diakui dan diingat.',
  })

  // ── corporate-meeting ─────────────────────────────────────────────────────
  await patchService('corporate-meeting', {
    problem:
      'Rapat korporat penting sering diadakan di ruang yang tidak mendukung tujuannya. Kursi yang salah, akustik yang buruk, teknologi yang tidak berfungsi — dan keputusan besar dicoba dibuat dalam kondisi yang salah.',
  })

  // ── corporate-anniversary ─────────────────────────────────────────────────
  await patchService(
    'corporate-anniversary',
    {
      approach:
        'Kami merancang peringatan korporat sebagai jembatan antara warisan dan visi. Malam ini dirancang untuk menghormati yang telah dicapai, menghidupkan kembali nilai-nilai yang masih relevan, dan membuka babak berikutnya dengan arah yang jelas.',
    },
    [
      {
        index: 0,
        questionId:
          'Bagaimana cara Anda menjaga keseimbangan antara menghormati sejarah dan tetap relevan ke depan?',
        answerId:
          'Kami merancang alur malam secara sengaja: penghormatan warisan di paruh pertama malam, kemudian beralih dengan jelas ke visi di paruh kedua. Momen peralihan itu — ketika suasana bergeser dari kenangan ke harapan — adalah bagian yang paling kami pikirkan matang-matang.',
      },
      {
        index: 1,
        answerId:
          'Untuk peringatan besar (25, 50, atau 100 tahun), kami merekomendasikan memulai perencanaan 6–12 bulan sebelumnya. Peringatan yang baik membutuhkan riset sejarah, kurasi konten, dan waktu untuk membangun narasi yang otentik. Peringatan yang direncanakan terburu-buru terasa terburu-buru — dan peringatan seperti ini layak mendapat lebih dari itu.',
      },
    ]
  )

  // ── corporate-outing ──────────────────────────────────────────────────────
  await patchService('corporate-outing', {
    idealFor:
      'Tim divisi, departemen, atau unit bisnis yang membutuhkan hari yang bermakna di luar rutinitas kantor — untuk mempererat tim, beristirahat dari rutinitas, atau sekadar menciptakan kenangan bersama.',
  })

  // ── brand-activation ──────────────────────────────────────────────────────
  await patchService('brand-activation', {
    problem:
      'Aktivasi brand gagal ketika memprioritaskan spektakel atas keterlibatan. Keramaian bukan berarti keterlibatan. Sebagian besar aktivasi difoto dan dilupakan dalam hitungan jam.',
    approach:
      'Kami merancang aktivasi sebagai pengalaman brand yang partisipatif. Pengunjung bukan penonton — mereka menjadi bagian dari pengalamannya. Setiap interaksi dirancang untuk menciptakan kenangan yang menjadi milik brand, bukan sekadar konten feed.',
  })

  // ── exhibition-pameran ────────────────────────────────────────────────────
  await patchService('exhibition-pameran', {
    problem:
      'Booth pameran yang gagal adalah yang dirancang seperti brosur tiga dimensi. Pengunjung melihat, membaca, dan berlalu. Tidak ada percakapan yang dimulai, tidak ada prospek yang tertarik, tidak ada kesan yang bertahan.',
  })

  // ── roadshow ──────────────────────────────────────────────────────────────
  await patchService('roadshow', {
    problem:
      'Roadshow gagal ketika setiap kota terasa seperti acara yang berbeda — kualitas yang tidak konsisten, pesan yang melemah di tengah jalan, dan audiens di kota ke-3 mendapat pengalaman yang lebih buruk dari kota ke-1.',
  })

  // ── corporate-event-organizer ─────────────────────────────────────────────
  await patchService(
    'corporate-event-organizer',
    {
      problem:
        'Banyak EO yang bisa mengeksekusi acara. Sedikit yang bisa memahami konteks bisnis di baliknya, memberikan perspektif yang berani mempertanyakan brief, dan bertanggung jawab penuh terhadap hasilnya — bukan hanya kehadiran dan dekorasi.',
    },
    [
      {
        index: 0,
        answerId:
          'Kami mengarahkan, bukan sekadar mengeksekusi. Setiap brief dicocokkan dengan tim spesialis yang sudah berkali-kali menjalankan format yang sama — satu kontak, akuntabilitas penuh dari awal hingga ruangan terakhir ditutup. Kami juga membawa perspektif yang berani mempertanyakan brief Anda, bukan sekadar menyetujuinya.',
      },
      {
        index: 2,
        answerId:
          'Kami memulai dengan sesi discovery untuk memahami kalender acara Anda, standar brand, pemangku kepentingan internal, dan ekspektasi. Dari situ, kami menyusun program kemitraan tahunan — termasuk struktur tim, cara komunikasi, dan proses persetujuan yang disesuaikan dengan cara kerja organisasi Anda. Kebanyakan kemitraan jangka panjang kami dimulai dengan satu acara percontohan terlebih dahulu.',
      },
    ]
  )

  console.log('\nAll Sanity patches complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
