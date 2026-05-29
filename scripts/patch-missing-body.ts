/**
 * patch-missing-body.ts
 *
 * Patches body content for 2 insight articles that were created
 * as stubs (no body field): annual-gathering-vs-team-building
 * and protokol-vip-corporate-event.
 *
 * Run: npx tsx --env-file=.env.local scripts/patch-missing-body.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n✗ SANITY_API_TOKEN is not set in .env.local\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

// ── Helpers ───────────────────────────────────────────────────────────────────

let seq = 0
function key(): string {
  return `k${Date.now()}${(++seq).toString().padStart(4, '0')}`
}

function blocks(items: { style: string; text: string }[]) {
  return items.map((item) => ({
    _type: 'block',
    _key: key(),
    style: item.style,
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: key(),
        text: item.text,
        marks: [],
      },
    ],
  }))
}

// ── Article 1 — annual-gathering-vs-team-building ─────────────────────────────

const annualGatheringBody = blocks([
  {
    style: 'h2',
    text: 'Dua Format yang Sering Disalahpahami',
  },
  {
    style: 'normal',
    text: 'Annual gathering dan team building adalah dua format yang paling sering disamakan — padahal keduanya punya tujuan, mekanisme, dan hasil yang fundamentally berbeda. Annual gathering adalah tentang penyelarasan organisasi: momen ketika seluruh perusahaan berkumpul untuk merayakan pencapaian, mendengar arah strategis, dan memperbarui koneksi antar manusia di berbagai level. Team building adalah tentang dinamika tim yang spesifik — membangun kepercayaan, memperbaiki kolaborasi, atau mengintegrasikan anggota baru ke dalam kelompok yang sudah ada.',
  },
  {
    style: 'normal',
    text: 'Keduanya penting. Tapi tidak bisa saling menggantikan. Perusahaan yang menyelenggarakan team building ketika yang dibutuhkan adalah gathering — atau sebaliknya — membuang budget dan melewatkan kebutuhan organisasi yang sebenarnya.',
  },
  {
    style: 'h2',
    text: 'Kapan Annual Gathering yang Dibutuhkan',
  },
  {
    style: 'normal',
    text: 'Gathering bekerja di level organisasi, bukan tim. Ada beberapa tanda yang mengindikasikan bahwa perusahaan Anda membutuhkan gathering: karyawan merasa disconnected dari visi perusahaan, ada pencapaian besar yang perlu dirayakan bersama, ada perubahan strategis yang perlu dikomunikasikan secara langsung, atau moral dan engagement sedang turun dan butuh momen reset.',
  },
  {
    style: 'normal',
    text: 'Gathering yang dirancang dengan baik bisa melakukan sesuatu yang tidak bisa dilakukan oleh email, presentasi slide, atau memo internal: menciptakan momen bersama yang menjadi referensi kolektif. "Ingat waktu pak CEO bilang itu di gathering tahun lalu?" — itulah yang dihasilkan gathering yang berhasil.',
  },
  {
    style: 'h2',
    text: 'Kapan Team Building yang Dibutuhkan',
  },
  {
    style: 'normal',
    text: 'Team building bekerja di level tim, bukan organisasi. Indikatornya: ada konflik atau friksi antar anggota tim yang tidak terselesaikan, tim baru terbentuk atau ada merger divisi, produktivitas tim stagnan meski individunya capable, atau ada kebutuhan spesifik membangun skill kolaborasi untuk proyek besar yang akan datang.',
  },
  {
    style: 'normal',
    text: 'Team building yang efektif selalu dimulai dari diagnosis yang jelas: apa masalah spesifik yang ingin diselesaikan? Tanpa jawaban yang jelas atas pertanyaan ini, program team building akan berakhir sebagai serangkaian aktivitas yang menyenangkan tapi tidak mengubah apapun.',
  },
  {
    style: 'h2',
    text: 'Bisa Keduanya dalam Satu Event?',
  },
  {
    style: 'normal',
    text: 'Jawabannya: bisa, tapi hanya jika dirancang dengan sangat hati-hati dan dengan waktu yang cukup. Event yang mencoba menjadi gathering sekaligus team building dalam satu hari sering tidak berhasil di keduanya. Formatnya berbeda — gathering membutuhkan plenary dan momen bersama, team building membutuhkan kelompok kecil dan aktivitas terstruktur. Energinya berbeda. Dan waktu yang dibutuhkan masing-masing tidak bisa dikompromikan.',
  },
  {
    style: 'normal',
    text: 'Kalau budget dan waktu terbatas, pilih satu tujuan utama dan rancang seluruh event untuk tujuan itu saja. Setengah-setengah di keduanya berarti tidak maksimal di salah satunya.',
  },
  {
    style: 'h2',
    text: 'Framework Keputusan',
  },
  {
    style: 'normal',
    text: 'Tiga pertanyaan untuk menentukan mana yang dibutuhkan organisasi Anda sekarang: Pertama, apakah masalahnya ada di level organisasi atau tim? Kalau karyawan tidak tahu ke mana perusahaan akan pergi, itu masalah organisasi — butuh gathering. Kalau dua departemen tidak bisa bekerja sama, itu masalah tim — butuh team building.',
  },
  {
    style: 'normal',
    text: 'Kedua, apakah tujuannya komunikasi dan perayaan, atau capability building? Gathering lebih baik untuk yang pertama. Team building untuk yang kedua. Ketiga, siapa audiensnya — seluruh perusahaan atau unit tertentu? Jawaban ketiga pertanyaan ini hampir selalu mengarahkan ke format yang tepat. Kalau masih ragu, konsultasikan dengan EO Anda sebelum brief ditulis — bukan sesudahnya.',
  },
])

// ── Article 2 — protokol-vip-corporate-event ──────────────────────────────────

const protokolVIPBody = blocks([
  {
    style: 'h2',
    text: 'Mengapa Protokol VIP Sering Diabaikan Sampai Terlambat',
  },
  {
    style: 'normal',
    text: 'Banyak GA Manager baru mulai memikirkan protokol VIP di H-3 atau bahkan H-1. Pada titik itu, banyak keputusan sudah terlambat untuk diubah — venue sudah dikonfigurasi, rundown sudah dicetak, crew sudah di-brief tanpa informasi yang relevan. Protokol VIP yang baik dimulai dari brief awal, jauh sebelum venue dipilih.',
  },
  {
    style: 'normal',
    text: 'Konsekuensi dari protokol yang buruk bukan hanya ketidaknyamanan. Tamu VIP — terutama eksekutif senior dan pejabat — memiliki ekspektasi yang sudah terbentuk dari pengalaman sebelumnya. Satu kesalahan yang terasa tidak profesional bisa merusak persepsi tentang seluruh organisasi yang menyelenggarakan event.',
  },
  {
    style: 'h2',
    text: 'Tingkatan Tamu VIP dan Implikasinya',
  },
  {
    style: 'normal',
    text: 'Tidak semua VIP diperlakukan sama, dan memahami perbedaan ini penting untuk alokasi sumber daya yang tepat. Tier 1 adalah pejabat negara — menteri, gubernur, atau pejabat setingkat. Untuk tier ini, protokol resmi pemerintah berlaku dan koordinasi dengan tim pengamanan mungkin diperlukan. Fleksibilitas jadwal harus dibangun ke dalam rundown karena kedatangan mereka sering tidak bisa diprediksi.',
  },
  {
    style: 'normal',
    text: 'Tier 2 adalah eksekutif C-Suite dari perusahaan mitra atau klien strategis. Mereka membutuhkan dedicated host, jalur masuk yang terpisah dari peserta umum, dan tempat duduk prioritas yang sudah dikonfirmasi jauh sebelum hari-H. Tier 3 adalah speaker dan narasumber utama — mereka membutuhkan green room, technical rehearsal yang memadai, dan briefing konten yang jelas sebelum tampil.',
  },
  {
    style: 'h2',
    text: 'Checklist Protokol yang Sering Terlewat',
  },
  {
    style: 'normal',
    text: 'Beberapa elemen yang hampir selalu tidak ada di rundown standar tapi selalu dibutuhkan ketika ada VIP: designated VIP entrance dan parking yang terpisah dari peserta umum, dedicated host atau liaison per tamu VIP yang tahu detail tentang tamu tersebut, briefing seluruh crew tentang siapa VIP-nya dan bagaimana cara mengidentifikasi mereka.',
  },
  {
    style: 'normal',
    text: 'Yang sering dilupakan: contingency plan yang jelas jika VIP terlambat atau harus meninggalkan acara lebih awal, koordinasi dengan tim keamanan venue tentang akses dan pembatasan area, dan dokumentasi khusus berupa fotografer yang dedicated untuk momen-momen yang melibatkan VIP — bukan hanya mengandalkan fotografer utama yang sedang mengcover seluruh event.',
  },
  {
    style: 'h2',
    text: 'Rundown Khusus VIP',
  },
  {
    style: 'normal',
    text: 'Event dengan banyak tamu VIP membutuhkan dua rundown yang terpisah. Master rundown untuk seluruh tim produksi berisi gambaran keseluruhan program. VIP rundown yang lebih detail dan confidential berisi informasi spesifik tentang pergerakan setiap VIP — waktu tiba yang diharapkan, jalur masuk, posisi duduk, momen-momen kritis yang melibatkan mereka, dan siapa yang bertanggung jawab mendampingi mereka di setiap titik.',
  },
  {
    style: 'normal',
    text: 'Jangan gabungkan informasi ini dalam satu dokumen. Informasi tentang tamu VIP tidak perlu diketahui oleh semua orang di tim produksi — hanya oleh mereka yang berinteraksi langsung.',
  },
  {
    style: 'h2',
    text: 'Briefing Tim yang Benar',
  },
  {
    style: 'normal',
    text: 'Semua orang yang berinteraksi dengan VIP harus di-brief secara khusus, bukan hanya melalui rundown umum. Briefing ini mencakup: nama lengkap dan jabatan tamu VIP, cara menyapa yang benar termasuk titel dan honorifik yang tepat, hal-hal yang boleh dan tidak boleh dilakukan atau dibicarakan, dan siapa yang menjadi point of contact jika ada kebutuhan mendadak.',
  },
  {
    style: 'normal',
    text: 'Ini bukan hanya untuk MC dan host utama. Registration staff di pintu masuk, ushers yang memandu ke tempat duduk, bahkan security di entrance perlu tahu siapa VIP-nya dan bagaimana memperlakukan mereka dengan benar. Satu interaksi canggung dari crew yang tidak di-brief dengan baik bisa merusak kesan keseluruhan yang sudah dibangun dengan susah payah.',
  },
])

// ── Patch ─────────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    slug: 'annual-gathering-vs-team-building',
    titleId: 'Annual Gathering vs Team Building: Apa Bedanya dan Kapan Memilih Yang Mana?',
    body: annualGatheringBody,
  },
  {
    slug: 'protokol-vip-corporate-event',
    titleId: 'Protokol VIP dalam Corporate Event: Panduan Lengkap untuk Tamu Prioritas',
    body: protokolVIPBody,
  },
]

async function run() {
  console.log('\n─────────────────────────────────────────')
  console.log('  Patching body content — 2 insight articles')
  console.log('─────────────────────────────────────────\n')

  let success = 0

  for (const article of ARTICLES) {
    console.log(`  ✎  ${article.titleId}`)

    try {
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "insight" && slug.current == $slug][0]{ _id }`,
        { slug: article.slug }
      )

      if (!doc) throw new Error(`Document not found: ${article.slug}`)

      await client
        .patch(doc._id)
        .set({ body: article.body })
        .commit()

      console.log(`       ✓  Patched ${article.body.length} blocks  (_id: ${doc._id})\n`)
      success++
    } catch (err) {
      console.error(`       ✗  Failed:`, err instanceof Error ? err.message : err, '\n')
    }
  }

  console.log('─────────────────────────────────────────')
  console.log(`  ${success}/${ARTICLES.length} articles patched successfully.\n`)

  if (success < ARTICLES.length) process.exit(1)
}

run().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
