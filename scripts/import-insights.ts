/**
 * Import 8 Insight articles into Sanity.
 * Run with: npx tsx --env-file=.env.local scripts/import-insights.ts
 *
 * Requires SANITY_API_TOKEN in .env.local with write access.
 * Get yours at: https://www.sanity.io/manage/project/98jwav2j/api#tokens
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('\n✗ SANITY_API_TOKEN is not set in .env.local')
  console.error('  Get a write token at: https://www.sanity.io/manage/project/98jwav2j/api#tokens')
  console.error('  Then add it to .env.local as: SANITY_API_TOKEN=your_token_here\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '98jwav2j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

// ── Helpers ───────────────────────────────────────────────────────────────────

let keyCounter = 0
function k(prefix = 'b'): string {
  return `${prefix}${(++keyCounter).toString().padStart(4, '0')}`
}

function h2(text: string) {
  return {
    _type: 'block',
    _key: k(),
    style: 'h2',
    children: [{ _type: 'span', _key: k('s'), text }],
  }
}

function p(text: string) {
  return {
    _type: 'block',
    _key: k(),
    style: 'normal',
    children: [{ _type: 'span', _key: k('s'), text }],
  }
}

// ── Articles ──────────────────────────────────────────────────────────────────

const insights = [

  // ── ARTICLE 1 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-townhall-guide',
    _type: 'insight',
    title: 'Complete Guide to Organizing a Corporate Townhall in Indonesia 2025',
    titleId: 'Panduan Lengkap Menyelenggarakan Corporate Townhall di Indonesia 2025',
    slug: { _type: 'slug', current: 'panduan-corporate-townhall-indonesia-2025' },
    publishedAt: '2025-03-15T08:00:00Z',
    category: 'Planning & Preparation',
    excerpt:
      'Townhall korporat adalah salah satu event dengan taruhan tertinggi dalam kalender perusahaan. Panduan ini membahas semua yang perlu diketahui GA Manager dan CorpComm untuk menyelenggarakan townhall yang benar-benar berhasil — bukan sekadar terlaksana.',
    body: [
      h2('Mengapa Townhall Sering Gagal'),
      p('Sebagian besar townhall korporat gagal bukan karena logistik yang buruk, melainkan karena filosofi yang salah sejak awal. Ketika townhall diperlakukan sebagai sesi pengumuman — bukan percakapan — hasilnya adalah ruangan yang penuh secara fisik tetapi kosong secara keterlibatan.'),
      p('Pola yang berulang: manajemen senior berbicara selama 80% waktu, sesi tanya-jawab dibatasi atau disaring ketat, dan pertanyaan yang "aman" mendapat prioritas. Karyawan duduk, mengangguk, lalu kembali ke meja kerja tanpa membawa perubahan apapun. Townhall yang dirancang seperti ini tidak membangun kepercayaan — justru mengikisnya perlahan.'),
      p('Indikator kegagalan yang mudah dikenali: tingkat kehadiran yang menurun di setiap edisi, suasana yang kaku dan formal berlebihan, tidak ada pertanyaan kritis yang muncul, dan tidak ada tindakan nyata yang muncul setelah acara. Jika Anda mengenali pola ini, perubahan yang dibutuhkan bukan pada dekorasi — melainkan pada struktur dan niat.'),

      h2('Anatomi Townhall yang Berhasil'),
      p('Townhall yang berhasil dimulai dengan satu pertanyaan sederhana: apa yang ingin kita capai bersama setelah acara ini selesai? Bukan "apa yang ingin kita sampaikan" — tapi apa yang ingin kita capai bersama. Perbedaan framing ini menentukan segalanya: siapa yang berbicara, berapa lama, format apa yang digunakan, dan bagaimana kesuksesan diukur.'),
      p('Lima elemen townhall yang berhasil: tujuan yang jelas dan spesifik (bukan generik seperti "alignment"), venue yang proporsional dengan jumlah peserta, komunikasi pra-event yang memberi konteks dan membangun antusiasme, sesi dialog terstruktur yang memberi ruang suara autentik, dan tindak lanjut yang dikomunikasikan paling lambat 72 jam setelah acara.'),
      p('Soal venue: hindari aula yang terlalu besar untuk jumlah peserta. Ruangan yang setengah kosong membunuh energi. Sebaliknya, ruangan yang sedikit penuh menciptakan kehangatan dan urgensi. Untuk 200 peserta, venue berkapasitas 220-240 jauh lebih baik daripada ballroom 500 pax.'),

      h2('Format dan Durasi yang Tepat'),
      p('Half-day townhall (3-4 jam) cocok untuk update rutin kuartalan atau agenda spesifik dengan satu tema besar. Format ini mempertahankan fokus dan tidak menguras energi. Full-day townhall hanya masuk akal jika ada konten yang benar-benar membutuhkan waktu — workshop, breakout session, atau pengumuman besar yang membutuhkan pemrosesan mendalam.'),
      p('Untuk perusahaan dengan lebih dari 500 karyawan di satu lokasi, pertimbangkan format cascade: townhall utama untuk manajemen senior dan perwakilan, diikuti sesi divisi yang lebih kecil dalam 48 jam. Ini mempertahankan kedalaman diskusi yang tidak mungkin dicapai dalam format massal.'),
      p('Hybrid townhall — menggabungkan peserta fisik dan remote — membutuhkan investasi AV yang signifikan dan moderator khusus untuk audiens online. Tanpa keduanya, pengalaman remote menjadi sangat inferior dan justru menciptakan kesan eksklusif yang kontradiktif dengan tujuan townhall.'),

      h2('Checklist Persiapan 8 Minggu'),
      p('Minggu 8-7: Finalisasi brief internal. Tetapkan tujuan spesifik, anggaran, tanggal, dan daftar pemangku kepentingan kunci yang harus hadir. Dapatkan konfirmasi dari CEO atau C-suite yang akan hadir — ini adalah blokir kalender yang tidak bisa ditawar.'),
      p('Minggu 6-5: Survei venue dan konfirmasi pilihan. Brief EO atau tim internal tentang konsep dan rundown draft pertama. Mulai produksi konten presentasi — beri waktu yang cukup untuk iterasi, jangan menunggu sampai minggu terakhir.'),
      p('Minggu 4-3: Kirim undangan formal dengan agenda. Buka channel untuk pertanyaan pra-event — ini memberi manajemen gambaran isu yang paling dikhawatirkan karyawan dan memberi waktu untuk mempersiapkan jawaban yang substantif.'),
      p('Minggu 2-1: Gladi resik konten dan teknis. Latih semua pembicara, termasuk sesi Q&A simulasi. Konfirmasi RSVP dan logistik terakhir. Siapkan materi tindak lanjut — ringkasan, rekaman, action items — sebelum hari H, bukan sesudahnya.'),

      h2('Yang Sering Diabaikan'),
      p('Tindak lanjut pasca-townhall adalah satu-satunya hal yang paling sering diabaikan dan paling berdampak pada persepsi jangka panjang. Jika komitmen diucapkan di panggung tetapi tidak ada update dalam dua minggu, kepercayaan yang dibangun selama acara hancur lebih cepat dari yang dibangun.'),
      p('Kirim ringkasan 72 jam setelah acara. Bukan email panjang — satu halaman dengan keputusan utama, pertanyaan yang muncul beserta jawabannya, dan langkah nyata berikutnya dengan penanggungjawab dan tenggat waktu. Format ini sederhana tetapi menunjukkan bahwa townhall adalah awal dari tindakan, bukan sekadar ritual.'),
      p('Ukur juga: survei singkat 3-5 pertanyaan yang dikirim 24 jam setelah acara memberikan data yang jauh lebih akurat daripada kesan subjektif panitia. Gunakan data ini untuk iterasi — bukan untuk diarsipkan. Townhall yang membaik setiap edisi adalah tanda bahwa perusahaan benar-benar mendengar.'),
    ],
  },

  // ── ARTICLE 2 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-budget-guide',
    _type: 'insight',
    title: 'Realistic Corporate Event Budgets for Enterprise Companies in Jakarta',
    titleId: 'Berapa Budget yang Realistis untuk Corporate Event Enterprise di Jakarta?',
    slug: { _type: 'slug', current: 'budget-corporate-event-enterprise-jakarta' },
    publishedAt: '2025-04-01T08:00:00Z',
    category: 'Budget & Strategy',
    excerpt:
      'Pertanyaan paling sering dari GA Manager dan CorpComm: berapa yang harus kami anggarkan? Jawabannya tergantung pada banyak variabel — tapi ada angka-angka realistis yang bisa dijadikan acuan untuk perencanaan.',
    body: [
      h2('Mengapa Budget Event Sering Meleset'),
      p('Tiga penyebab utama budget event yang meleset: scope creep yang tidak terkendali, biaya tersembunyi yang tidak diantisipasi, dan perubahan last-minute yang selalu lebih mahal dari yang diperkirakan. Satu revisi venue dua minggu sebelum hari H bisa menghabiskan 20-30% buffer yang sudah disiapkan.'),
      p('Scope creep terjadi ketika tidak ada brief yang dikunci dari awal. Tim internal menambahkan "sedikit" permintaan — satu sesi tambahan di sini, satu dekorasi ekstra di sana — dan sebelum disadari, acara sudah 40% lebih besar dari rencana awal dengan budget yang sama. Solusinya bukan kontrol ketat, melainkan brief yang jelas dan proses change order yang formal.'),
      p('Perubahan pembicara atau pemimpin kunci yang hadir — terutama level C-suite — di bawah dua minggu adalah salah satu perubahan paling mahal. Bukan karena biaya langsung, tetapi karena implikasi cascade pada rundown, dekorasi branding, materi, dan logistik VIP yang sudah dikonfigurasi.'),

      h2('Komponen Biaya yang Sering Dilupakan'),
      p('Kontingensi 10-15% bukan kemewahan — ini adalah keharusan profesional. Vendor yang tidak menyertakan kontingensi dalam proposal mereka bukan tanda mereka lebih efisien, melainkan tanda mereka tidak berpengalaman atau tidak jujur. Kondisi Jakarta — kemacetan, cuaca, infrastruktur yang tidak selalu reliable — membuat kontingensi bukan pilihan.'),
      p('Biaya yang paling sering absen dari proposal awal: overtime kru (setiap jam kelebihan di luar durasi kontrak biasanya dihitung 1.5-2x), asuransi event (sangat direkomendasikan untuk acara di atas 500 pax atau dengan talent berbayar), transportasi dan akomodasi pembicara dari luar kota, biaya parkir valet atau shuttle untuk peserta, dan biaya izin venue atau keamanan tambahan untuk tamu VIP.'),
      p('Untuk event dengan live streaming atau dokumentasi video profesional, anggarkan terpisah dan realistis. Video "company in-house" yang kualitasnya buruk seringkali lebih merusak citra daripada tidak ada dokumentasi sama sekali.'),

      h2('Patokan Budget per Format di Jakarta 2025'),
      p('Townhall 500 peserta (half-day, hotel bintang 4, Jakarta Pusat/Selatan): Rp 350-550 juta. Range ini mencakup venue, AV standar, F&B coffee break dan makan siang, dekorasi fungsional, dan dokumentasi foto. Di luar range ini berarti ada komponen premium atau venue premium yang sengaja dipilih.'),
      p('Gala Dinner 300 peserta (5 jam, hotel bintang 5, dengan entertainment): Rp 500-900 juta. Range bawah untuk gala dinner standar tanpa live band atau artis. Range atas untuk gala dinner dengan entertainment performer, award ceremony setup, dan dekorasi tematik penuh.'),
      p('Konferensi 1.000 peserta (full-day, convention center): Rp 1,2-2,5 miliar. Range sangat bergantung pada jumlah breakout room, kualitas speaker (lokal vs internasional), dan kompleksitas AV. Konferensi yang mencoba menghemat di AV dan venue biasanya menghabiskan lebih banyak untuk "perbaikan darurat" hari H.'),
      p('Team building 100 peserta (full-day, venue luar kota hingga 2 jam dari Jakarta): Rp 120-250 juta. Termasuk transportasi, venue, F&B, fasilitator, dan perlengkapan aktivitas. Angka ini meningkat signifikan jika melibatkan menginap.'),

      h2('Cara Mengoptimalkan Budget'),
      p('Investasikan di tiga hal yang paling dirasakan peserta: sound system yang jernih, makanan yang enak dan cukup, dan pengalaman pertama saat memasuki venue. Peserta tidak akan mengingat branded backdrop yang mahal, tetapi mereka akan mengingat mikrofon yang feedback setiap 10 menit.'),
      p('Hemat di tempat yang tidak terlihat: backdrop di lorong yang jarang difoto, dekorasi meja yang terlalu elaborate untuk event yang berfokus pada konten, goodie bag yang mahal tapi tidak relevan. Alihkan anggaran ini ke kualitas AV atau F&B.'),
      p('Negosiasi venue yang efektif: tawarkan pembayaran lebih awal (30-45 hari vs standar 7-14 hari) untuk mendapat diskon 5-10%. Booking di bulan yang bukan peak season (hindari Desember, awal tahun, dan bulan sebelum lebaran) bisa menghemat 15-25% dari rate venue.'),

      h2('Tanda-tanda Proposal Budget yang Tidak Jujur'),
      p('Red flag pertama: tidak ada breakdown biaya yang detail. Proposal yang hanya mencantumkan total angka tanpa rincian per komponen menyembunyikan sesuatu — entah margin yang sangat tinggi atau spesifikasi yang jauh di bawah ekspektasi.'),
      p('Red flag kedua: tidak ada kontingensi atau disebut "sudah termasuk" tanpa angka spesifik. Red flag ketiga: harga yang terlalu jauh di bawah rata-rata pasar — biasanya berarti vendor akan menambahkan "variasi" atau upgrade berbayar setelah kontrak ditandatangani. Bandingkan minimal tiga proposal sebelum memutuskan, dan minta referensi dari event dengan skala serupa.'),
    ],
  },

  // ── ARTICLE 3 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-checklist-annual-gathering',
    _type: 'insight',
    title: '90-Day Checklist for Corporate Annual Gathering Preparation',
    titleId: 'Checklist 90 Hari Persiapan Annual Gathering Perusahaan',
    slug: { _type: 'slug', current: 'checklist-90-hari-annual-gathering' },
    publishedAt: '2025-04-15T08:00:00Z',
    category: 'Planning & Preparation',
    excerpt:
      'Annual gathering adalah event terbesar dalam kalender internal perusahaan. Dengan skala yang besar dan ekspektasi yang tinggi, persiapan yang terstruktur bukan pilihan — itu keharusan. Berikut checklist 90 hari yang bisa langsung digunakan.',
    body: [
      h2('H-90 sampai H-75: Fondasi'),
      p('Sembilan puluh hari mungkin terasa jauh, tetapi untuk annual gathering skala 300 peserta ke atas di Jakarta, ini adalah batas minimum yang masih aman. Mulai lebih awal berarti lebih banyak pilihan venue, lebih banyak waktu negosiasi, dan tidak ada keputusan yang dibuat karena terdesak.'),
      p('Di fase ini, prioritas utama adalah mengunci tiga hal: tanggal yang dikonfirmasi oleh pengambil keputusan tertinggi, range anggaran yang disetujui, dan tujuan spesifik acara. Bukan "team bonding" atau "alignment" — tujuan yang terukur. Contoh: meningkatkan engagement score internal 15% dalam satu kuartal setelah acara, atau memperkenalkan nilai perusahaan baru kepada seluruh karyawan dengan tingkat recall 70%.'),
      p('Shortlist venue minimal 5 opsi sebelum melakukan site visit. Kriteria awal: kapasitas sesuai estimasi peserta, ketersediaan tanggal, lokasi yang terjangkau mayoritas peserta, dan track record untuk event serupa. Eliminasi venue yang tidak memenuhi 3 dari 4 kriteria sebelum investasi waktu untuk site visit.'),

      h2('H-75 sampai H-60: Vendor & Konsep'),
      p('Dengan venue terkunci, masuk ke fase vendor dan konsep. Brief EO atau tim internal yang detail adalah investasi waktu yang menghemat banyak revisi di kemudian hari. Brief yang baik mencakup: tujuan acara, profil peserta, tone yang diinginkan, elemen yang wajib ada, anggaran per komponen, dan timeline keputusan.'),
      p('Proses seleksi EO: minta proposal dari 2-3 kandidat dengan brief yang identik, evaluasi berdasarkan pemahaman mereka terhadap brief (bukan kemewahan presentasi), referensi dari event dengan skala serupa, dan tim yang akan benar-benar handle acara Anda. Hati-hati dengan EO yang mengirim tim pitching berbeda dengan tim eksekusi.'),
      p('Paralel dengan seleksi EO, mulai proses shortlist entertainment dan program konten. Talent dengan jadwal padat — musisi, pembicara motivasi terkemuka, MC nasional — sering sudah dipesan 3-4 bulan sebelumnya. Menunggu hingga H-30 untuk konfirmasi entertainment berarti pilihan terbatas dan harga premium.'),

      h2('H-60 sampai H-30: Produksi'),
      p('Fase produksi dimulai dengan konfirmasi final semua vendor dan kontrak yang ditandatangani. Tidak ada yang boleh masih "dalam proses negosiasi" di H-60. Jika ada vendor kunci yang belum dikonfirmasi, prioritaskan resolusi ini sebelum melanjutkan ke tahap produksi.'),
      p('Sistem registrasi harus live paling lambat H-45. Ini memberikan waktu yang cukup untuk RSVP, pengumpulan data dietary restriction, ukuran jersey atau merchandise jika ada, dan estimasi yang akurat untuk catering dan logistik. Jangan underestimasi waktu yang dibutuhkan untuk proses ini — untuk 500 peserta, manajemen RSVP adalah pekerjaan paruh waktu tersendiri.'),
      p('Produksi konten presentasi — video perusahaan, infografis pencapaian, konten games atau kuis — harus dimulai di fase ini dengan deadline internal H-21. Konten yang dibuat tergesa-gesa di H-7 terlihat tergesa-gesa. Konten yang kuat adalah salah satu elemen yang paling diingat peserta.'),

      h2('H-30 sampai H-7: Finalisasi'),
      p('Semua keputusan kreatif dan logistik besar harus selesai di H-30. Setelah titik ini, hanya fine-tuning — bukan perubahan fundamental. Change request besar setelah H-30 hampir selalu menghasilkan kualitas yang lebih rendah dengan biaya yang lebih tinggi.'),
      p('Di H-14, lakukan consolidated briefing dengan semua vendor: rundown final, titik koordinasi, nomor kontak darurat, eskalasi path jika ada masalah. Setiap vendor harus tahu siapa yang harus dihubungi untuk hal apa, dan dalam berapa menit respons diharapkan.'),
      p('Contingency plan bukan "semoga tidak terjadi" — ini adalah dokumen nyata yang mencakup: apa yang dilakukan jika pembicara utama batal 48 jam sebelumnya, bagaimana prosedur evakuasi, apa alternatif jika cuaca ekstrem untuk outdoor elements, dan siapa yang berwenang mengambil keputusan cepat di hari H.'),

      h2('H-7 sampai Hari-H: Eksekusi'),
      p('Technical rehearsal (gladi bersih teknis) di H-2 atau H-1 bukan opsional untuk event besar. Ini adalah satu-satunya kesempatan untuk menemukan masalah AV, lighting, flow rundown, dan koordinasi stage sebelum ada 500 pasang mata yang menonton. Gunakan rehearsal ini dengan serius — jangan potong durasi karena semua orang sibuk.'),
      p('Briefing hari-H dimulai 90 menit sebelum peserta masuk. Semua crew, panitia internal, dan vendor representatif berkumpul untuk final alignment: update cuaca dan logistik, pembagian walkie-talkie atau channel komunikasi, konfirmasi posisi masing-masing, dan review contingency plan.'),
      p('Dokumentasi pasca-event dimulai saat acara masih berlangsung. Tentukan siapa yang bertanggung jawab mengumpulkan: foto berkualitas tinggi dari key moments, rekaman video segmen utama, verbatim dari pertanyaan dan jawaban di sesi Q&A, dan feedback informal dari peserta. Materi ini adalah bahan untuk laporan, komunikasi internal, dan perencanaan tahun depan.'),
    ],
  },

  // ── ARTICLE 4 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-hybrid-vs-virtual',
    _type: 'insight',
    title: 'Hybrid Event vs Virtual Event: Which Is Right for Your Company?',
    titleId: 'Hybrid Event vs Virtual Event: Mana yang Tepat untuk Perusahaan Anda?',
    slug: { _type: 'slug', current: 'hybrid-event-vs-virtual-event' },
    publishedAt: '2025-05-01T08:00:00Z',
    category: 'Format & Technology',
    excerpt:
      'Banyak perusahaan memilih hybrid atau virtual event tanpa benar-benar mempertimbangkan apakah format itu sesuai dengan tujuan mereka. Panduan ini membantu Anda membuat keputusan yang tepat berdasarkan konteks, bukan tren.',
    body: [
      h2('Perbedaan Mendasar yang Sering Disalahpahami'),
      p('Hybrid event bukan streaming acara fisik ke Zoom. Ini adalah kesalahpahaman yang paling umum dan paling mahal. Hybrid event yang sesungguhnya dirancang dari awal sebagai dua pengalaman paralel yang terintegrasi — satu untuk audiens fisik, satu untuk audiens online — dengan titik interaksi yang sengaja diciptakan antara keduanya.'),
      p('Virtual event juga bukan hybrid yang lebih murah. Virtual event yang dirancang dengan baik memanfaatkan keunggulan medium digital: interaksi asinkron, polling real-time lintas ratusan peserta sekaligus, breakout room yang bisa berubah konfigurasi dalam hitungan detik, dan aksesibilitas geografis tanpa batas. Ini bukan kompromi — ini format berbeda dengan kekuatan berbeda.'),
      p('Memperlakukan hybrid sebagai "live streaming yang agak lebih fancy" atau virtual sebagai "penghematan biaya venue" hampir selalu menghasilkan event yang tidak memuaskan kedua audiens. Keputusan format harus dimulai dari tujuan dan karakteristik audiens, bukan dari anggaran atau preferensi panitia.'),

      h2('Kapan Hybrid Event Masuk Akal'),
      p('Hybrid event justified secara strategis ketika: audiens tersebar di lebih dari dua kota dan tidak praktis untuk semua hadir secara fisik, ada pembicara internasional yang nilainya signifikan tetapi kehadiran fisik tidak mungkin, atau ketika ada subset audiens yang kehadirannya penting secara simbolis tetapi terkendala jarak.'),
      p('Untuk perusahaan multinasional dengan karyawan di Jakarta, Surabaya, Medan, dan Makassar — hybrid bisa menjadi solusi yang lebih inklusif daripada memilih satu kota sebagai pusat. Dengan catatan: investasi dalam infrastruktur streaming dan moderator online yang dedicated adalah non-negotiable.'),
      p('Anggaran minimal yang realistis untuk hybrid event yang setara kualitasnya: tambahkan 25-35% dari biaya event fisik untuk komponen online (platform, AV streaming, moderator, dan konten yang dikurasi khusus untuk audiens online). Di bawah angka ini, pengalaman online akan inferior dan menciptakan kesan diskriminatif.'),

      h2('Kapan Virtual Event Lebih Tepat'),
      p('Virtual event adalah pilihan yang cerdas — bukan pilihan kedua — ketika tujuan utamanya adalah transfer pengetahuan atau informasi tanpa membutuhkan pengalaman fisik bersama. Pelatihan, sesi briefing produk baru, konferensi internal lintas wilayah — semua ini bisa dilakukan secara virtual dengan kualitas yang equal atau bahkan lebih baik.'),
      p('Ketika audiens Anda sudah terbiasa dengan interaksi digital dan platform yang digunakan, virtual event bisa mencapai tingkat partisipasi yang lebih tinggi daripada fisik. Peserta bisa bergabung dari mana saja, hambatan kehadiran berkurang, dan fitur seperti anonymous Q&A seringkali menghasilkan pertanyaan yang lebih jujur daripada mikrofon di depan ratusan orang.'),
      p('Virtual juga pilihan tepat ketika timeline sangat singkat. Event fisik yang layak membutuhkan minimal 4-6 minggu persiapan. Virtual event berkualitas bisa disiapkan dalam 2-3 minggu dengan tim yang kompeten dan platform yang sudah tersedia.'),

      h2('Kesalahan Paling Umum dalam Hybrid Event'),
      p('Kesalahan paling fatal: memperlakukan audiens online sebagai second-class citizen. Ini terjadi ketika kamera hanya diarahkan ke pembicara dan tidak ada view ke audiens fisik, ketika pertanyaan online diabaikan atau selalu direspons belakangan, dan ketika tidak ada konten yang dirancang khusus untuk mereka.'),
      p('Setup AV yang tidak memadai adalah pembunuh hybrid event. Kamera tunggal yang statis, audio yang tidak jernih dari sisi online, dan delay yang signifikan menciptakan pengalaman yang frustrasi. Minimum yang dibutuhkan: dua kamera (pembicara dan wide shot ruangan), dedicated audio feed yang terpisah dari sistem room speaker, dan platform dengan kapasitas yang cukup.'),
      p('Tidak ada moderator khusus untuk audiens online adalah kesalahan ketiga yang paling sering terjadi. MC di panggung tidak bisa sekaligus memantau chat, mengelola Q&A online, dan mengintegrasikan partisipasi online ke dalam alur acara fisik. Ini adalah dua pekerjaan berbeda yang membutuhkan dua orang berbeda.'),

      h2('Checklist Keputusan Format'),
      p('Gunakan framework ini sebelum memutuskan format: (1) Di mana audiens Anda berada — satu kota, multi-kota, atau tersebar luas? (2) Apa tujuan utama — pengalaman bersama, transfer informasi, atau keduanya? (3) Berapa budget yang realistis untuk format yang dipilih dilakukan dengan benar? (4) Berapa lead time yang tersedia?'),
      p('Jika audiens mayoritas di satu kota dan tujuannya adalah pengalaman bersama: fisik adalah pilihan default yang sulit dikalahkan. Jika audiens tersebar dan tujuannya adalah informasi: virtual adalah pilihan yang efisien dan efektif. Jika audiens tersebar dan pengalaman bersama penting: hybrid dengan investasi yang memadai untuk komponen online.'),
      p('Yang tidak boleh dilakukan: memilih hybrid karena terdengar modern, atau virtual karena lebih murah, tanpa menjawab pertanyaan-pertanyaan di atas. Format terbaik adalah yang paling sesuai dengan tujuan — bukan yang paling populer atau paling hemat biaya.'),
    ],
  },

  // ── ARTICLE 5 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-kesalahan-fatal',
    _type: 'insight',
    title: '5 Fatal Mistakes in Corporate Events Made by Indonesian Companies',
    titleId: '5 Kesalahan Fatal dalam Corporate Event yang Sering Dilakukan Perusahaan Indonesia',
    slug: { _type: 'slug', current: '5-kesalahan-fatal-corporate-event' },
    publishedAt: '2025-05-15T08:00:00Z',
    category: 'Budget & Strategy',
    excerpt:
      'Setelah menangani ratusan corporate event, pola yang sama terus muncul. Lima kesalahan ini bukan hanya membuat event kurang optimal — mereka bisa menghancurkan tujuan bisnis yang ingin dicapai.',
    body: [
      h2('Kesalahan 1 — Memilih Vendor Berdasarkan Harga Terendah'),
      p('Memilih EO berdasarkan harga terendah adalah false economy yang paling mahal di industri ini. Perbedaan Rp 50 juta dalam proposal awal bisa berubah menjadi perbedaan Rp 200 juta dalam biaya perbaikan, pengulangan, atau reputasi yang rusak. Vendor murah seringkali berarti: kru yang kurang terlatih, peralatan yang tidak terawat, atau subkontraktor yang belum pernah bekerja bersama.'),
      p('Cara evaluasi yang lebih tepat: minta portofolio dengan skala event yang serupa, hubungi referensi secara langsung (bukan nama yang disediakan vendor, cari sendiri dari kontak industri), dan tanyakan spesifik tentang bagaimana mereka menangani masalah yang muncul di hari H. Vendor yang baik punya cerita tentang krisis yang berhasil dikelola — bukan vendor yang tidak pernah punya masalah.'),
      p('Kompetisi harga yang sehat terjadi ketika tiga vendor yang kualifikasinya setara bersaing untuk brief yang sama. Bukan ketika satu vendor premium dan dua vendor budget dibandingkan. Bandingkan apel dengan apel.'),

      h2('Kesalahan 2 — Brief yang Terlalu Umum'),
      p('Brief yang berbunyi "kami ingin team building yang seru dan berkesan untuk 150 orang" adalah instruksi untuk menghasilkan event generik. Vendor tidak bisa membaca pikiran Anda. Mereka akan mengusulkan apa yang paling mudah dijual dan paling menguntungkan mereka, bukan apa yang paling sesuai dengan kebutuhan spesifik perusahaan Anda.'),
      p('Brief yang baik menjawab: Apa yang kita rayakan atau selesaikan bersama? Siapa audiensnya — senioritas, divisi, apakah ini campuran lintas hierarki atau satu level? Apa yang TIDAK kita inginkan (sama pentingnya dengan apa yang kita inginkan)? Apa satu hal yang harus dirasakan setiap peserta saat pulang? Apa yang menjadi tanda bahwa acara ini berhasil?'),
      p('Investasikan satu hingga dua jam untuk menulis brief yang solid. Brief yang baik menghemat tiga hingga lima jam revisi proposal, dan seringkali menghemat puluhan juta dalam scope yang tidak tepat sasaran.'),

      h2('Kesalahan 3 — Tidak Ada KPI yang Jelas'),
      p('Event tanpa KPI adalah event tanpa akuntabilitas. Jika satu-satunya metrik sukses adalah "semua hadir" dan "makanannya enak", Anda tidak akan pernah tahu apakah event senilai Rp 500 juta itu menghasilkan sesuatu yang berarti bagi bisnis.'),
      p('KPI yang relevan untuk corporate event: attendance rate vs target (dan alasan di balik no-show), NPS atau satisfaction score dari survei pasca-event, persentase peserta yang menyebutkan minimal satu pesan kunci yang ingin disampaikan (message recall), perubahan perilaku yang terukur dalam 30-60 hari setelah event (relevan untuk townhall atau acara dengan agenda perubahan).'),
      p('KPI harus ditetapkan sebelum event, bukan setelah. Menetapkan KPI setelah acara selesai sama dengan menggambar target setelah panah dilepaskan. Data yang dikumpulkan tanpa tujuan ukur tidak bisa dipakai untuk perbaikan.'),

      h2('Kesalahan 4 — Persiapan Terlalu Mepet'),
      p('Persiapan yang dimulai 4 minggu sebelum annual gathering 500 peserta bukan persiapan — ini penanganan krisis yang dimulai terlalu dini. Hampir setiap keputusan yang diambil dalam tekanan menghasilkan hasil yang lebih mahal, lebih rendah kualitasnya, atau keduanya.'),
      p('Benchmark waktu persiapan yang realistis berdasarkan skala: event di bawah 100 peserta membutuhkan minimal 4-6 minggu, 100-500 peserta membutuhkan 8-12 minggu, di atas 500 peserta atau dengan komponen perjalanan (gathering luar kota) membutuhkan minimal 16 minggu. Ini bukan angka yang dibesar-besarkan — ini adalah pengalaman lapangan dari ratusan event.'),
      p('Mulai lebih awal bukan berarti bekerja lebih keras — ini berarti memiliki lebih banyak pilihan, lebih banyak waktu negosiasi, dan lebih sedikit keputusan yang dibuat karena tidak ada alternatif lain.'),

      h2('Kesalahan 5 — Mengabaikan Post-Event'),
      p('Event berakhir ketika tamu terakhir meninggalkan ruangan. Tapi dampak event — positif maupun negatif — dimulai justru setelah itu. Perusahaan yang mengabaikan fase post-event membuang sebagian besar nilai yang sudah diinvestasikan.'),
      p('Minimum yang harus dilakukan dalam 72 jam setelah event: kirim materi atau ringkasan kepada semua peserta dan mereka yang tidak bisa hadir, tindak lanjut atas komitmen atau janji yang diucapkan selama acara, dan survei kepuasan singkat untuk mengumpulkan data sebelum memori memudar.'),
      p('Dalam 30 hari: review semua data dan feedback, adakan debrief internal dengan semua pemangku kepentingan, dokumentasikan lessons learned, dan mulai planning untuk event berikutnya dengan input dari evaluasi ini. Perusahaan yang melakukan ini memiliki event yang makin baik setiap tahun. Yang tidak melakukannya mengulangi kesalahan yang sama dengan anggaran yang sama.'),
    ],
  },

  // ── ARTICLE 6 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-venue-guide-jakarta',
    _type: 'insight',
    title: 'Choosing a Corporate Event Venue in Jakarta: A Guide for GA and CorpComm Managers',
    titleId: 'Memilih Venue Corporate Event di Jakarta: Panduan untuk GA dan CorpComm Manager',
    slug: { _type: 'slug', current: 'memilih-venue-corporate-event-jakarta' },
    publishedAt: '2025-06-01T08:00:00Z',
    category: 'Venue & Execution',
    excerpt:
      'Jakarta punya ratusan pilihan venue corporate event — tapi memilih venue yang salah bisa menghancurkan event terbaik sekalipun. Panduan ini membantu Anda mengevaluasi dan memilih venue yang benar-benar sesuai dengan kebutuhan.',
    body: [
      h2('Venue Bukan Sekadar Ruangan'),
      p('Venue adalah keputusan strategis, bukan keputusan logistik. Venue menentukan tone pertama yang dirasakan peserta bahkan sebelum acara dimulai — lobi yang megah dan dingin versus warehouse industrial yang hangat versus rooftop dengan pemandangan kota masing-masing menciptakan ekspektasi yang berbeda, dan ekspektasi yang tepat adalah setengah dari pekerjaan event yang berhasil.'),
      p('Venue juga mempengaruhi logistik secara fundamental: aksesibilitas menentukan siapa yang hadir dan bagaimana kondisi mereka saat tiba, infrastruktur AV menentukan kualitas komunikasi, dan tata letak menentukan dinamika sosial. Ballroom yang terlalu besar membuat audiens 300 orang terasa seperti 100 orang yang tersesat.'),
      p('Kesalahan yang sering terjadi: memilih venue berdasarkan nama atau gengsi tanpa mengevaluasi kesesuaian dengan tujuan spesifik event. Hotel bintang lima yang paling bergengsi di Jakarta tidak selalu menjadi pilihan terbaik untuk townhall yang ingin menciptakan nuansa keterbukaan dan dialog.'),

      h2('Faktor yang Harus Dievaluasi'),
      p('Kapasitas yang tepat: pilih venue dengan kapasitas 110-120% dari jumlah peserta yang diharapkan. Terlalu longgar menciptakan kesan sepi; terlalu penuh menciptakan ketidaknyamanan. Untuk standing reception, angka berbeda — venue bisa menampung 30-40% lebih banyak peserta.'),
      p('Infrastruktur AV adalah faktor pembeda terbesar antara venue yang terlihat bagus di foto dan venue yang berfungsi baik di hari H. Pertanyaan spesifik: apakah sound system built-in atau harus menyewa? Berapa rigged point di ceiling untuk lighting? Apakah ada dedicated power supply untuk AV? Kecepatan dan keandalan koneksi internet, terutama jika ada elemen live streaming atau voting digital.'),
      p('Aspek yang sering terlupakan: waktu setup dan breakdown (beberapa venue memberikan akses 4 jam sebelum acara dan 2 jam setelah — tidak cukup untuk event kompleks), kebijakan eksklusivitas ruang (apakah ada event lain di lantai yang sama pada hari yang sama?), acoustics antar-ruang (apakah suara dari ballroom sebelah akan bocor?), dan akses loading dock untuk peralatan besar.'),

      h2('Zona Venue di Jakarta'),
      p('SCBD dan Sudirman adalah pilihan default untuk executive event, konferensi premium, dan gala dinner dengan tamu VIP. Kluster hotel bintang 5 di area ini memiliki infrastruktur yang matang, tim event berpengalaman, dan akses yang mudah bagi peserta dari bisnis utama Jakarta. Harga premium — tapi ekspektasi dapat dipenuhi secara konsisten.'),
      p('Kawasan hotel di Gatot Subroto, Kuningan, dan MT Haryono menawarkan nilai lebih baik dengan kualitas yang hampir setara. Untuk konferensi 500-1.000 peserta, banyak hotel bintang 4 di zona ini memiliki ballroom dan convention facility yang lebih fleksibel dari hotel bintang 5 di CBD.'),
      p('Unique venue — factory converted, rooftop, heritage building, atau venue outdoor — ideal untuk gathering yang ingin meninggalkan kesan berbeda. Pertimbangan khusus: pastikan infrastruktur teknis (listrik, AV, catering) bisa dipenuhi oleh vendor eksternal jika venue tidak memilikinya sendiri. Unique venue yang cantik tetapi tidak bisa mendukung kebutuhan teknis bisa menjadi nightmare.'),

      h2('Pertanyaan yang Harus Ditanyakan ke Venue'),
      p('Tanyakan secara eksplisit: apakah ada event lain di gedung yang sama pada tanggal yang sama, dan di mana? Apakah lift barang tersedia dan berapa kapasitasnya? Siapa kontak teknis yang akan on-site selama setup dan event? Apakah ada biaya tambahan untuk overtime setup di luar jam yang disepakati, dan berapa angkanya per jam?'),
      p('Untuk aspek F&B: apakah harus menggunakan katering venue atau boleh mendatangkan vendor eksternal? Jika harus katering venue, minta untuk melakukan food tasting dengan menu aktual yang akan disajikan — bukan menu yang "bisa dibuat". Kebijakan corkage fee jika ada wine atau minuman khusus yang dibawa dari luar.'),
      p('Aspek legal dan keamanan: apakah venue memiliki izin keramaian yang diperlukan untuk skala event Anda? Siapa yang bertanggung jawab jika terjadi insiden — venue atau penyelenggara? Minta salinan kebijakan asuransi venue dan pastikan cakupannya memadai.'),

      h2('Red Flags saat Site Visit'),
      p('Red flag pertama: staf yang tidak bisa menjawab pertanyaan teknis dengan spesifik dan harus selalu "konfirmasi dulu ke tim". Tim venue yang profesional tahu kapasitas, spesifikasi AV, dan kebijakan mereka sendiri dengan detail. Ketidakmampuan menjawab pertanyaan basic adalah sinyal tentang kualitas dukungan yang akan Anda terima di hari H.'),
      p('Red flag kedua: venue yang terlihat berbeda dari foto pemasaran. Jika foto di website menggunakan angle yang sangat spesifik untuk menyembunyikan elemen tertentu, kunjungan langsung akan mengungkapnya. Perhatikan kondisi karpet, pencahayaan default, kebersihan area servis, dan kondisi toilet — ini adalah indikator standar perawatan secara keseluruhan.'),
      p('Red flag ketiga: kontrak yang tidak fleksibel atau penuh dengan klausul yang menguntungkan venue secara berlebihan — seperti tidak ada pengembalian deposit dalam kondisi apapun, atau klausul perubahan menu sepihak. Venue yang confident dengan kualitasnya biasanya lebih fleksibel dalam negosiasi kontrak.'),
    ],
  },

  // ── ARTICLE 7 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-kpi-event',
    _type: 'insight',
    title: 'Why Your Corporate Events Need KPIs — Not Just Photos',
    titleId: 'Mengapa Corporate Event Anda Harus Punya KPI — Bukan Hanya Foto',
    slug: { _type: 'slug', current: 'kpi-corporate-event-bukan-hanya-foto' },
    publishedAt: '2025-06-15T08:00:00Z',
    category: 'Budget & Strategy',
    excerpt:
      'Foto bagus dan peserta yang hadir bukan bukti bahwa event Anda berhasil. Perusahaan yang serius tentang ROI event tahu persis apa yang mereka ukur — sebelum event dimulai, bukan sesudahnya.',
    body: [
      h2('Masalah dengan "Event Sukses" yang Tidak Terukur'),
      p('Hampir setiap post-mortem corporate event menggunakan bahasa yang sama: "acaranya sukses", "peserta senang", "feedback positif". Tapi ketika ditanya lebih dalam — apa yang berubah setelah event ini? Apa yang lebih baik atau berbeda? — jawabannya seringkali kosong. Bukan karena eventnya buruk, tetapi karena tidak ada yang pernah mendefinisikan seperti apa "sukses" sebelum acara dimulai.'),
      p('Dampak dari absennya KPI: anggaran event sulit dipertahankan di hadapan CFO yang skeptis, tidak ada dasar untuk memperbaiki event di tahun berikutnya, dan event organizer tidak punya insentif untuk inovasi karena standar minimalnya hanya "tidak ada komplain besar".'),
      p('Ironi terbesar: perusahaan yang paling ketat dalam mengukur ROI kampanye marketing atau proyek IT seringkali paling longgar dalam mengukur dampak event internal. Padahal event dengan 500 peserta dan anggaran Rp 600 juta adalah investasi yang sangat serius yang layak mendapat standar akuntabilitas yang sama.'),

      h2('Framework KPI untuk Corporate Event'),
      p('Lima kategori KPI yang relevan untuk mayoritas corporate event: (1) Attendance — bukan hanya jumlah, tetapi siapa yang hadir dan siapa yang tidak. Pola no-show yang konsisten dari divisi atau seniority tertentu adalah data yang penting. (2) Engagement — survei kepuasan yang mengukur relevansi konten, kualitas pembicara, dan pengalaman keseluruhan.'),
      p('(3) Message recall — seberapa baik peserta mengingat dan bisa mengartikulasikan pesan utama yang ingin disampaikan. Ini diukur melalui pertanyaan terbuka dalam survei pasca-event, bukan multiple choice yang bisa ditebak. (4) Net Promoter Score (NPS) — apakah peserta akan merekomendasikan event serupa kepada kolega? (5) Behavioral change — metrik jangka panjang yang paling sulit diukur tetapi paling bermakna.'),
      p('Tidak semua KPI relevan untuk semua event. Pilih 2-3 yang paling sesuai dengan tujuan spesifik, tetapkan target sebelum event, dan ukur secara konsisten. Data yang dikumpulkan selama tiga edisi berturut-turut jauh lebih berharga dari data satu event yang sangat detail.'),

      h2('KPI per Tipe Event'),
      p('Townhall: fokus pada message recall dan clarity of direction. Pertanyaan kunci: setelah townhall, apakah karyawan bisa menjelaskan 3 prioritas perusahaan untuk semester berikutnya? Apakah tingkat kepercayaan terhadap kepemimpinan meningkat, stagnan, atau menurun?'),
      p('Team building: fokus pada cross-functional connection dan aplikasi pasca-event. Seberapa banyak koneksi baru antar divisi yang terbentuk? Dalam 30 hari setelah event, apakah ada kolaborasi baru yang bisa diatribusikan ke acara tersebut? Ini membutuhkan follow-up proaktif, bukan pasif.'),
      p('Conference internal: fokus pada knowledge transfer dan action items. Berapa persen peserta yang mengimplementasikan setidaknya satu hal dari konferensi dalam 60 hari? Ini adalah KPI yang paling jarang diukur dan paling penting untuk menilai ROI konferensi.'),

      h2('Cara Mengukur yang Praktis'),
      p('Survei pasca-event adalah alat paling accessible. Kirim dalam 24-48 jam setelah acara — setelah itu, akurasi menurun drastis. Gunakan maksimal 7 pertanyaan: 5 skala Likert (1-5) dan 2 pertanyaan terbuka. Platform gratis seperti Google Form sudah cukup untuk keperluan ini.'),
      p('Untuk message recall, gunakan pertanyaan "Apa 2-3 hal terpenting yang Anda bawa pulang dari acara hari ini?" daripada "Apakah Anda memahami visi perusahaan?" yang jawabannya hampir selalu "Ya" karena tidak ada yang mau terlihat tidak paham.'),
      p('Observasi langsung selama acara juga merupakan data yang valid: level kebisingan selama sesi (indikator engagement), berapa banyak pertanyaan yang diajukan di sesi Q&A dan kualitasnya, apakah peserta menggunakan jeda untuk networking atau langsung ke handphone. Tugaskan satu orang dari tim untuk melakukan observasi sistematis — bukan hanya menikmati acara.'),

      h2('Menggunakan Data untuk Event Berikutnya'),
      p('Data dari satu event baru menjadi bermakna ketika dibandingkan dengan tren dari beberapa edisi. Buat repository sederhana — spreadsheet adalah cukup — yang menyimpan KPI dari setiap event: tanggal, format, skala, skor kepuasan, NPS, dan catatan kualitatif utama. Setelah tiga edisi, pola akan mulai terlihat.'),
      p('Pola yang paling sering ditemukan: sesi yang terlalu panjang selalu mendapat skor lebih rendah terlepas dari kualitas konten, pembicara internal mendapat skor lebih bervariasi dari pembicara eksternal, dan makan siang yang buruk secara konsisten menurunkan skor keseluruhan secara tidak proporsional.'),
      p('Presentasikan data ini kepada manajemen sebagai bagian dari proposal anggaran tahun berikutnya. Perusahaan yang bisa menunjukkan bahwa event satisfaction score naik dari 3.6 ke 4.2 dalam tiga tahun, dengan NPS dari -10 ke +25, punya argumen yang jauh lebih kuat untuk mempertahankan atau meningkatkan anggaran event dibanding yang hanya bisa menunjukkan foto.'),
    ],
  },

  // ── ARTICLE 8 ───────────────────────────────────────────────────────────────
  {
    _id: 'insight-mice-indonesia-2025',
    _type: 'insight',
    title: 'MICE in Indonesia 2025: Trends, Destinations, and What Companies Need to Know',
    titleId: 'MICE di Indonesia 2025: Tren, Destinasi, dan yang Perlu Diketahui Perusahaan',
    slug: { _type: 'slug', current: 'mice-indonesia-2025-tren-destinasi' },
    publishedAt: '2025-07-01T08:00:00Z',
    category: 'Format & Technology',
    excerpt:
      'Industri MICE Indonesia sedang bertransformasi. Destinasi baru bermunculan, ekspektasi peserta berubah, dan perusahaan yang tidak mengikuti perkembangan ini akan tertinggal dalam war for talent dan engagement.',
    body: [
      h2('Kondisi MICE Indonesia Pasca-Pandemi'),
      p('Industri MICE Indonesia telah pulih secara volume — angka event dan peserta sudah kembali mendekati level 2019 — tetapi yang berubah secara permanen adalah ekspektasi. Perusahaan yang mencoba menjalankan program MICE 2025 dengan pendekatan 2019 menemukan bahwa peserta tidak lagi mau datang sekadar hadir. Mereka ingin hadir dengan alasan yang jelas.'),
      p('Perubahan paling signifikan pasca-pandemi: peserta lebih selektif tentang waktu yang mereka investasikan untuk event kantor. Work-from-home yang diperpanjang membuat banyak karyawan sadar bahwa banyak event sebelumnya tidak sebanding dengan waktu yang dikeluarkan. Implikasinya: program MICE yang tidak bisa menjawab pertanyaan "mengapa saya harus hadir" akan menghadapi resistensi yang lebih tinggi.'),
      p('Di sisi positif, pandemi menciptakan kelaparan nyata untuk pengalaman bersama yang bermakna. MICE yang dirancang dengan baik — dengan tujuan yang jelas, pengalaman yang otentik, dan ruang untuk koneksi manusiawi yang genuine — mendapat respons antusiasme yang lebih tinggi dari sebelum pandemi. Standar lebih tinggi, tetapi potensi dampaknya juga lebih besar.'),

      h2('Destinasi MICE yang Sedang Naik Daun'),
      p('Bali tetap menjadi destinasi MICE nomor satu Indonesia untuk program internasional, tetapi untuk program domestik korporat, tren yang jelas adalah diversifikasi. Labuan Bajo naik signifikan dalam 2-3 tahun terakhir, didorong oleh pengembangan infrastruktur dan daya tarik visual yang sulit ditandingi. Untuk incentive trip ekseklusif atau leadership retreat, Labuan Bajo menawarkan setting yang memorable dengan biaya yang masih lebih terjangkau dari Bali untuk ukuran yang sama.'),
      p('Mandalika di Lombok adalah destinasi yang mulai menarik perhatian serius untuk MICE skala medium. Infrastruktur hotel dan convention yang berkembang pesat pasca-MotoGP, ditambah lanskap yang belum seramai Bali, menjadikannya pilihan menarik untuk perusahaan yang ingin menawarkan pengalaman berbeda. Pertimbangkan bahwa konektivitas penerbangan masih terbatas dibanding Bali — ini relevan untuk program dengan peserta dari banyak kota.'),
      p('Yogyakarta mengalami renaissance sebagai destinasi MICE untuk program yang ingin menggabungkan elemen budaya dan heritage dengan agenda bisnis. Biaya yang jauh lebih rendah dari Bali, aksesibilitas dari Jakarta dan Surabaya yang excellent, dan ekosistem vendor MICE yang sudah matang membuat Yogyakarta menjadi value proposition yang sangat kuat untuk program dengan anggaran efisien.'),

      h2('Tren yang Mendefinisikan MICE 2025'),
      p('Sustainability bukan lagi diferensiator — ini mulai menjadi hygiene factor untuk perusahaan besar. Peserta, terutama generasi muda dan karyawan dengan paparan internasional, memperhatikan apakah program MICE perusahaan memiliki kebijakan lingkungan yang nyata. Carbon offset, pengurangan plastik sekali pakai, dan pilihan menu yang mempertimbangkan dampak lingkungan bukan lagi "nice to have".'),
      p('Wellness integration adalah tren yang paling berkembang dalam dua tahun terakhir. Program MICE yang menyertakan elemen wellness — bukan sekadar gym di hotel, tetapi kegiatan yang dirancang untuk pemulihan dan refleksi seperti guided meditation, forest bathing, atau sesi breathwork — mendapat NPS yang secara konsisten lebih tinggi dari program konvensional.'),
      p('Experience over logistics adalah pergeseran filosofis yang paling fundamental. Dulu, program MICE dievaluasi berdasarkan kelancaran logistik: bus tepat waktu, makanan cukup, jadwal terpenuhi. Sekarang, evaluasi bergeser ke: apa yang akan mereka ceritakan setelah pulang? Momen yang tak terduga, akses eksklusif ke tempat atau pengalaman yang tidak bisa didapat sendiri, interaksi dengan narasumber yang inspiratif — ini yang mendefinisikan MICE berkualitas tinggi di 2025.'),

      h2('Apa yang Diinginkan Peserta Sekarang'),
      p('Personalisasi dalam program MICE bukan tentang nama di name tag atau kamar hotel yang didekorasi. Ini tentang program yang terasa dirancang untuk peserta spesifik, bukan template yang digunakan ulang. Breakout session yang mengakomodasi minat berbeda, pilihan aktivitas (bukan satu aktivitas wajib untuk semua), dan ritme program yang mempertimbangkan perbedaan energi dan preferensi — ini adalah personalisasi yang bermakna.'),
      p('Meaningful experience adalah kata kunci yang terus muncul dalam survei pasca-program MICE. Peserta ingin membawa pulang lebih dari sekadar kenangan foto yang bagus. Mereka ingin perspektif baru, koneksi yang genuine, atau kemampuan baru — sesuatu yang terasa relevan dengan kehidupan profesional dan personal mereka.'),
      p('Work-life integration dalam program MICE: ini bukan tentang membawa laptop ke resort. Ini tentang program yang mengakui bahwa peserta adalah manusia utuh — bukan hanya karyawan yang perlu di-charge ulang untuk bekerja lebih produktif. Program terbaik memberikan ruang untuk sesuatu yang bermakna secara personal, bukan hanya agenda yang padat dari pagi hingga malam.'),

      h2('Implikasi untuk Perencanaan Perusahaan'),
      p('Lead time untuk MICE berkualitas di destinasi populer semakin panjang. Untuk Bali di peak season (Juli-Agustus dan Desember), hotel dan venue terbaik sudah perlu dipesan 6-9 bulan sebelumnya. Untuk Labuan Bajo dengan kapasitas akomodasi yang lebih terbatas, 4-6 bulan adalah minimum yang aman untuk program di atas 50 peserta.'),
      p('Anggaran MICE per peserta di Indonesia 2025 (all-in, 2 malam 3 hari, Bali): Rp 8-15 juta per peserta tergantung standar akomodasi dan program. Angka ini naik 20-30% dibanding 2022 akibat kenaikan biaya operasional hotel dan inflasi vendor. Perusahaan yang menggunakan anggaran 2022 untuk program 2025 akan menemukan bahwa kualitas yang mereka harapkan tidak lagi bisa dicapai dengan angka yang sama.'),
      p('Pemilihan mitra MICE adalah keputusan strategis yang layak mendapat waktu dan riset yang setara dengan pemilihan vendor IT atau konsultan strategis. Minta proposal yang spesifik untuk tujuan dan konteks perusahaan Anda, bukan template. Mitra MICE yang baik akan mengajukan pertanyaan lebih banyak dari yang mereka jawab di tahap awal — karena mereka tahu bahwa solusi terbaik dimulai dari pemahaman yang dalam.'),
    ],
  },

]

// ── Import ────────────────────────────────────────────────────────────────────

async function importInsights() {
  console.log('\n─────────────────────────────────────────')
  console.log('  Elevent — Import Insights')
  console.log('─────────────────────────────────────────\n')

  let successCount = 0
  const results: { id: string; title: string; slug: string; ok: boolean; error?: string }[] = []

  for (const insight of insights) {
    try {
      await client.createOrReplace(insight)
      console.log(`  ✓  ${insight.titleId}`)
      results.push({ id: insight._id, title: insight.titleId, slug: insight.slug.current, ok: true })
      successCount++
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`  ✗  ${insight.titleId}`)
      console.error(`     ${msg}`)
      results.push({ id: insight._id, title: insight.titleId, slug: insight.slug.current, ok: false, error: msg })
    }
  }

  console.log('\n─────────────────────────────────────────')
  console.log(`  ${successCount}/${insights.length} articles imported successfully.\n`)

  for (const r of results) {
    const icon = r.ok ? '✓' : '✗'
    console.log(`  ${icon}  ${r.title}`)
    console.log(`      slug: ${r.slug}`)
  }

  console.log('\n─────────────────────────────────────────\n')

  if (successCount < insights.length) {
    process.exit(1)
  }
}

importInsights().catch((err) => {
  console.error('\n✗ Unexpected error:', err)
  process.exit(1)
})
