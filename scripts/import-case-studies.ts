/**
 * Import all 9 Elevent case studies into Sanity.
 * Run with: npm run import-cases
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

// ── Case Studies ─────────────────────────────────────────────────────────────

const caseStudies = [
  {
    _id: 'case-study-shimizu-corporation-50th-anniversary',
    _type: 'caseStudy',
    title: 'Shimizu Corporation Jakarta 50th Anniversary',
    slug: { _type: 'slug', current: 'shimizu-corporation-50th-anniversary' },
    client: 'Shimizu Corporation Jakarta',
    format: 'Gala Dinner & Award Night',
    audience: '500 delegates — Tokyo directors, local partners, government representatives',
    cities: 'Jakarta — Hotel Kempinski',
    outcome:
      'Standing ovation spontan dari 500 tamu — momen yang tidak direncanakan, menjadi puncak emosional malam itu',
    outcomeNumber: '50 Years',
    year: 2025,
    featured: true,
    challenge:
      'Shimizu Corporation merayakan 50 tahun kehadirannya di Indonesia — sebuah milestone yang tidak hanya merayakan pencapaian bisnis, tetapi juga mendefinisikan ulang hubungan jangka panjang antara perusahaan Jepang dan ekosistem bisnis Indonesia. Brief-nya kompleks: bagaimana menciptakan satu malam yang terasa setara dengan prestige Shimizu di mata direksi dari Tokyo, mitra bisnis lokal kelas atas, dan perwakilan pemerintah — semuanya dalam satu ruangan, dengan ekspektasi yang berbeda-beda.',
    challengeEn:
      "Shimizu Corporation was celebrating 50 years in Indonesia — a milestone that went beyond business achievements to redefine the long-term relationship between a Japanese corporation and the Indonesian business ecosystem. The brief was complex: how to create one evening that felt equally prestigious to directors from Tokyo, high-level local business partners, and government representatives — all in one room, with vastly different expectations.",
    approach:
      'Kami memulai dari satu pertanyaan: apa yang membuat 50 tahun Shimizu di Indonesia berbeda dari sekadar angka? Jawabannya adalah kedalaman relasi — antara Jepang dan Indonesia, antara kontraktor dan komunitas, antara warisan dan masa depan. Dari sana, kami membangun konsep "Harmony in Legacy" — memadukan estetika Jepang yang presisi dengan kehangatan hospitalitas Indonesia. Setiap elemen dirancang dengan deliberate: dari dekorasi yang mengombinasikan motif origami dengan batik, hingga rundown yang memberikan ruang bagi momen reflektif di tengah perayaan.',
    approachEn:
      'We started with one question: what makes 50 years of Shimizu in Indonesia more than just a number? The answer was depth of relationship — between Japan and Indonesia, between contractor and community, between legacy and future. From there, we built the concept "Harmony in Legacy" — blending Japanese precision aesthetics with Indonesian warmth and hospitality. Every element was deliberately designed: from decorations combining origami motifs with batik, to a rundown that made space for reflective moments within the celebration.',
    execution: [
      'VIP Reception dengan cocktail hour yang dikurasi — mempertemukan direksi Tokyo dengan mitra lokal dalam atmosfer yang intim sebelum malam dimulai',
      'Gala Dinner di Grand Ballroom Hotel Kempinski dengan table setting eksekutif untuk 500 tamu',
      'Lifetime Achievement Awarding — momen seremonial untuk individu dan organisasi yang telah menjadi bagian dari perjalanan 50 tahun Shimizu di Indonesia',
      'Cultural Performance — penampilan seni yang mempertemukan elemen budaya Jepang dan Indonesia, dirancang sebagai pernyataan artistik tentang dua budaya yang saling menghormati',
      'VIP Protocol Management — tim khusus untuk memastikan setiap tamu VIP mendapat perhatian yang setara dengan standar protokol internasional',
    ],
    executionEn: [
      'VIP Reception with a curated cocktail hour — bringing Tokyo directors and local partners together in an intimate atmosphere before the evening began',
      'Gala Dinner at the Grand Ballroom of Hotel Kempinski with executive table settings for 500 guests',
      "Lifetime Achievement Awarding — a ceremonial moment honoring individuals and organizations that have been part of Shimizu's 50-year journey in Indonesia",
      'Cultural Performance — an artistic showcase bringing together Japanese and Indonesian cultural elements, designed as an artistic statement about two mutually respecting cultures',
      'VIP Protocol Management — a dedicated team ensuring every VIP guest received attention consistent with international protocol standards',
    ],
    result:
      'Malam berjalan tanpa satu pun kendala operasional. Seluruh 500 tamu hadir tepat waktu. Direksi dari Tokyo menyampaikan apresiasi langsung kepada tim kami setelah acara selesai. Yang paling berarti: momen standing ovation spontan dari seluruh tamu saat pemutaran video perjalanan 50 tahun Shimizu di Indonesia — sesuatu yang tidak direncanakan, tetapi menjadi puncak emosional malam itu.',
    resultEn:
      "The evening ran without a single operational issue. All 500 guests arrived on time. Directors from Tokyo personally expressed their appreciation to our team after the event. Most meaningfully: a spontaneous standing ovation from all guests during the screening of Shimizu's 50-year journey video — something unplanned, that became the emotional peak of the night.",
    clientQuote:
      'Elevent memahami bahwa ini bukan sekadar pesta ulang tahun perusahaan. Ini adalah pernyataan tentang siapa kami di Indonesia selama 50 tahun ke depan. Mereka menerjemahkan visi itu dengan sempurna.',
    clientQuoteAttribution: 'Senior Representative, Shimizu Corporation Jakarta',
  },

  {
    _id: 'case-study-vertiv-asia-channel-summit-2023',
    _type: 'caseStudy',
    title: 'Vertiv Asia Channel Summit 2023',
    slug: { _type: 'slug', current: 'vertiv-asia-channel-summit-2023' },
    client: 'Vertiv Singapore Pte Ltd',
    format: 'International Conference & Summit',
    audience:
      '350 delegates dari 12 negara — Malaysia, Singapore, Indonesia, Vietnam, Cambodia, India, Pakistan, Philippines, Korea, China, Australia',
    cities: 'Bali — Grand Hyatt Nusa Dua',
    outcome:
      'Multi-country summit delivered across 2 days with zero operational failures — Vertiv named it one of their best Asia Channel Summits ever held',
    outcomeNumber: '12 Countries',
    year: 2023,
    featured: false,
    challenge:
      'Vertiv membutuhkan summit yang mampu mempertemukan channel partners dari 12 negara Asia dalam satu forum strategis. Tantangannya bukan hanya logistik — mengkoordinasikan 350 orang dari 12 negara ke Bali dalam dua hari — tetapi juga memastikan setiap elemen program terasa relevan dan bernilai bagi delegasi dari latar belakang bisnis dan budaya yang sangat beragam.',
    challengeEn:
      'Vertiv needed a summit capable of bringing together channel partners from 12 Asian countries in one strategic forum. The challenge was not just logistics — coordinating 350 people from 12 countries to Bali in two days — but also ensuring every program element felt relevant and valuable to delegates from vastly different business and cultural backgrounds.',
    approach:
      'Kami mendekati ini sebagai experience architecture, bukan event logistics. Summit yang baik bukan hanya tentang konten yang disampaikan, tetapi tentang kondisi yang diciptakan agar koneksi bisnis yang bermakna bisa terjadi. Kami mendesain setiap segmen — dari seating arrangement di plenary hingga table mix di gala dinner — untuk memaksimalkan pertemuan lintas negara.',
    approachEn:
      'We approached this as experience architecture, not event logistics. A good summit is not just about the content delivered, but about the conditions created for meaningful business connections to happen. We designed every segment — from plenary seating arrangements to gala dinner table mixes — to maximize cross-country encounters.',
    execution: [
      'Plenary Sessions dengan AV setup broadcast-grade untuk 350 pax di Grand Ballroom Grand Hyatt',
      'Gala Dinner di venue outdoor Nusa Dua dengan sunset Bali sebagai backdrop — dirancang untuk networking organik antar delegasi',
      'CSR Activity: Book Donation & Education Program — membawa seluruh delegasi terlibat dalam program sosial sebagai shared experience',
      'Business Forum — sesi diskusi terstruktur yang mendorong pertukaran insight antar market',
      'Half Day Tour & Golf — program post-summit untuk koneksi informal di luar setting bisnis formal',
      'Multi-language coordination — tim ground operations yang menangani kebutuhan delegasi dari 12 negara secara simultan',
    ],
    executionEn: [
      'Plenary Sessions with broadcast-grade AV setup for 350 pax at the Grand Hyatt Grand Ballroom',
      'Gala Dinner at an outdoor Nusa Dua venue with the Bali sunset as backdrop — designed to facilitate organic networking between delegates',
      'CSR Activity: Book Donation & Education Program — engaging all delegates in a social program as a shared experience',
      'Business Forum — structured discussion sessions designed to encourage cross-market insight exchange',
      'Half Day Tour & Golf — post-summit program providing space for informal connections outside the formal business setting',
      'Multi-language coordination — ground operations team handling the needs of delegates from 12 countries simultaneously',
    ],
    result:
      'Summit berjalan penuh selama dua hari tanpa gangguan operasional. Semua 350 delegasi dari 12 negara hadir dan terlibat penuh. Vertiv Singapore menyatakan ini sebagai salah satu Asia Channel Summit terbaik yang pernah mereka selenggarakan.',
    resultEn:
      'The summit ran for two full days without operational disruption. All 350 delegates from 12 countries attended and were fully engaged. Vertiv Singapore declared this one of the best Asia Channel Summits they had ever held.',
    clientQuote:
      'Koordinasi lintas 12 negara dalam dua hari bukan hal yang mudah. Tim yang menangani kami memahami kompleksitas itu dan mengeksekusinya dengan tenang dan presisi.',
    clientQuoteAttribution: 'Regional Events Manager, Vertiv Singapore Pte Ltd',
  },

  {
    _id: 'case-study-mirae-asset-10th-anniversary',
    _type: 'caseStudy',
    title: '10th Anniversary Mirae Asset Sekuritas Indonesia',
    slug: { _type: 'slug', current: 'mirae-asset-10th-anniversary' },
    client: 'Mirae Asset Sekuritas Indonesia',
    format: 'Corporate Anniversary & Gala Dinner',
    audience: '500 persons — leadership, partners, VIP guests',
    cities: 'Jakarta — Aston Lake Hotel Sentul',
    outcome:
      'Full 2-day program delivered seamlessly — Korean executives personally commended execution quality beyond their expectations',
    outcomeNumber: '10 Years',
    year: 2023,
    featured: false,
    challenge:
      "Ulang tahun ke-10 adalah milestone di mana sebuah perusahaan Korea yang beroperasi di Indonesia perlu menegaskan identitasnya: sudah cukup Indonesia untuk dirayakan bersama, namun tetap mempertahankan standar dan nilai-nilai Korea yang menjadi fondasinya. Brief dari Mirae Asset: dua hari penuh yang terasa seperti perayaan keluarga besar, bukan sekadar acara korporat.",
    challengeEn:
      "The 10th anniversary was a milestone where a Korean company operating in Indonesia needed to affirm its identity: Indonesian enough to be celebrated together, yet maintaining the Korean standards and values that formed its foundation. Mirae Asset's brief: two full days that felt like a family celebration, not just a corporate event.",
    approach:
      'Kami membangun program dua hari dengan ritme yang sengaja dirancang — dari aktivitas yang membangun energi kolektif di hari pertama, menuju puncak perayaan di malam kedua. Team building dirancang agar setiap aktivitas mempertemukan karyawan dari departemen berbeda dalam tantangan yang membutuhkan kolaborasi nyata.',
    approachEn:
      'We built a two-day program with a deliberately designed rhythm — from activities that built collective energy on day one, leading to the celebratory peak on the second evening. Team building was designed so every activity brought together employees from different departments in challenges requiring genuine collaboration.',
    execution: [
      'Team Building & Gathering di hari pertama — aktivitas outdoor di area Sentul untuk cross-department bonding',
      'Motivation Class dengan pembicara yang relevan untuk konteks perusahaan sekuritas yang sedang tumbuh',
      'Gala Dinner dengan production full — stage, lighting, dan entertainment setara standar korporat Korea',
      'Guest Star: Wali Band sebagai entertainment utama',
      'Sand Artist Denny Darko untuk visual performance yang memorable',
      'Executive Keynotes dari Mr. RHEE JUNG HO (Vice Chairman) dan Mr. TAE YONG SHIM (CEO) — dikoordinasikan dengan penuh perhatian terhadap protokol Korea',
    ],
    executionEn: [
      'Team Building & Gathering on day one — outdoor activities in the Sentul area for cross-department bonding',
      'Motivation Class with speakers relevant to the context of a growing securities company',
      'Gala Dinner with full production — stage, lighting, and entertainment meeting Korean corporate standards',
      'Guest Star: Wali Band as headline entertainment',
      'Sand Artist Denny Darko for a memorable visual performance',
      'Executive Keynotes from Mr. RHEE JUNG HO (Vice Chairman) and Mr. TAE YONG SHIM (CEO) — coordinated with full attention to Korean protocol',
    ],
    result:
      'Program dua hari berjalan sesuai timeline dengan zero delay. 500 peserta terlibat penuh dari hari pertama hingga gala dinner. Manajemen Mirae Asset Korea secara khusus menyampaikan apresiasi atas kualitas eksekusi yang melampaui ekspektasi mereka.',
    resultEn:
      'The two-day program ran on timeline with zero delays. 500 participants were fully engaged from day one through the gala dinner. Mirae Asset Korea management specifically expressed appreciation for execution quality that exceeded their expectations.',
    clientQuote:
      'Kami datang dengan ekspektasi tinggi karena ini adalah ulang tahun ke-10. Mereka tidak hanya memenuhi ekspektasi itu — mereka melampaui apa yang kami bayangkan bisa dilakukan dalam dua hari.',
    clientQuoteAttribution: 'HR Director, Mirae Asset Sekuritas Indonesia',
  },

  {
    _id: 'case-study-hekrafnas-2023',
    _type: 'caseStudy',
    title: 'Perayaan Hari Ekonomi Kreatif Nasional 2023',
    slug: { _type: 'slug', current: 'hekrafnas-2023' },
    client: 'Kementerian Pariwisata & Ekonomi Kreatif RI',
    format: 'Government Ceremony & Conference',
    audience: '350 persons — ministry officials, creative economy stakeholders',
    cities: 'Jakarta — Gedung Sapta Pesona',
    outcome:
      'Format talkshow yang lebih conversational berhasil menghadirkan sisi personal dari tokoh-tokoh nasional — banyak dikutip media sebagai highlight',
    outcomeNumber: 'National Scale',
    year: 2023,
    featured: false,
    challenge:
      'Hekrafnas adalah event kenegaraan — setiap detail dilihat oleh publik, media, dan tokoh nasional. Brief dari Kemenparekraf membutuhkan event yang mampu merayakan ekonomi kreatif dengan cara yang itself kreatif: bukan seremoni kaku, tetapi perayaan yang mencerminkan semangat industri kreatif itu sendiri. Dengan narasumber sekaliber Sandiaga Uno, Titiek Puspa, Darwis Triadi, dan Putu Wijaya — standar produksi dan protokol harus sempurna.',
    challengeEn:
      'Hekrafnas was a state event — every detail observed by the public, media, and national figures. The Ministry brief needed an event capable of celebrating creative economy in a way that was itself creative: not a rigid ceremony, but a celebration reflecting the creative industry spirit. With speakers of the caliber of Sandiaga Uno, Titiek Puspa, Darwis Triadi, and Putu Wijaya — production and protocol standards had to be perfect.',
    approach:
      'Event pemerintah sering terjebak dalam formalitas yang bertentangan dengan spirit industri kreatif. Pendekatan kami: formal dalam struktur, kreatif dalam ekspresi. Rundown dirancang dengan rigiditas protokol kenegaraan, tetapi setiap segmen diberi ruang untuk ekspresi yang autentik.',
    approachEn:
      'Government events often get trapped in formality that contradicts the creative industry spirit. Our approach: formal in structure, creative in expression. The rundown was designed with state protocol rigidity, but every segment was given space for authentic expression.',
    execution: [
      'Inaugurasi dengan protokol kenegaraan penuh — koordinasi dengan tim protokol Kemenparekraf',
      'Lifetime Awarding untuk tokoh-tokoh yang telah berkontribusi pada ekonomi kreatif Indonesia',
      'Hybrid Zoom Online — streaming berkualitas stabil untuk stakeholder di seluruh Indonesia',
      'Talkshow dengan Sandiaga Uno, Titiek Puspa, Darwis Triadi, dan Putu Wijaya — staging yang membuat diskusi terasa natural',
      'Full protocol coordination untuk semua tamu VIP dan undangan kenegaraan',
    ],
    executionEn: [
      'Inauguration with full state protocol — coordination with the Ministry protocol team',
      'Lifetime Awarding for figures who have contributed to Indonesia creative economy',
      'Hybrid Zoom Online — stable quality streaming for stakeholders across Indonesia',
      'Talkshow with Sandiaga Uno, Titiek Puspa, Darwis Triadi, and Putu Wijaya — staging that made discussion feel natural',
      'Full protocol coordination for all VIP guests and state invitees',
    ],
    result:
      'Event berjalan tanpa insiden protokol. Hybrid streaming mencapai audiens yang jauh melampaui kapasitas venue fisik. Talkshow menjadi highlight yang banyak dikutip media — format conversational berhasil menghadirkan sisi personal dari para tokoh yang jarang terlihat di acara kenegaraan formal.',
    resultEn:
      'The event ran without protocol incidents. Hybrid streaming reached an audience far exceeding the physical venue capacity. The talkshow became a media-cited highlight — the conversational format successfully revealed personal sides of the figures rarely seen at formal state events.',
    clientQuote:
      'Tantangan terbesar kami adalah membuat acara kenegaraan yang tidak terasa kaku. Mereka berhasil menemukan keseimbangan itu dengan sangat baik.',
    clientQuoteAttribution: 'Kepala Biro Komunikasi, Kementerian Pariwisata & Ekonomi Kreatif RI',
  },

  {
    _id: 'case-study-rakortek-direktorat-bandar-udara',
    _type: 'caseStudy',
    title: 'Rapat Koordinasi Teknis Direktorat Bandar Udara',
    slug: { _type: 'slug', current: 'rakortek-direktorat-bandar-udara' },
    client: 'Kementerian Perhubungan RI — Direktorat Jenderal Perhubungan Udara',
    format: 'Government Conference & Gathering',
    audience: '500 persons — ministry officials and aviation stakeholders from across Indonesia',
    cities: 'Yogyakarta — The Alana Yogyakarta',
    outcome:
      'Tiga hari on-schedule, zero delays — Kemenhub mempertimbangkan kolaborasi untuk Rakortek tahun berikutnya',
    outcomeNumber: '500 Delegates',
    year: 2023,
    featured: false,
    challenge:
      'Rakortek untuk kementerian bukan sekadar rapat besar — ini adalah forum di mana kebijakan teknis penerbangan nasional dibahas. 500 peserta dari seluruh Indonesia datang ke Yogyakarta dengan agenda teknis yang padat. Di luar sesi formal, Kemenhub membutuhkan program yang membangun kebersamaan antar pegawai dari berbagai unit dan wilayah.',
    challengeEn:
      'A ministerial technical coordination meeting is not just a large meeting — it is a forum where national aviation technical policy is discussed. 500 participants from across Indonesia came to Yogyakarta with a packed technical agenda. Beyond the formal sessions, the Ministry needed a program that built camaraderie among employees from various units and regions.',
    approach:
      'Kami mendesain tiga hari dengan ritme yang mempertimbangkan energy curve peserta — sesi teknis di waktu prime, aktivitas fisik dan sosial untuk recovery dan bonding, serta gala dinner sebagai penutup yang celebratory. Yogyakarta bukan hanya venue — kami integrasikan elemen budaya dan wisata kota sebagai bagian dari program.',
    approachEn:
      'We designed three days with a rhythm that considered participant energy curves — technical sessions at prime time, physical and social activities for recovery and bonding, and a gala dinner as a celebratory close. Yogyakarta was not just a venue — we integrated cultural and tourism elements as part of the program, not merely as add-ons.',
    execution: [
      'Tour ke destinasi budaya Yogyakarta — ice-breaker yang mempertemukan peserta dari berbagai wilayah dalam setting informal',
      'Gathering & Team Building — aktivitas yang relevan untuk konteks organisasi pemerintah',
      'Plenary Sessions — setup teknis untuk sesi koordinasi dengan 500 peserta',
      'Awarding Ceremony — penghargaan untuk unit-unit terbaik dalam lingkungan Ditjen Perhubungan Udara',
      'Gala Dinner dengan guest star Ifan Seventeen',
      'Full logistics coordination untuk 500 peserta dari berbagai kota di Indonesia',
    ],
    executionEn: [
      'Tour to Yogyakarta cultural destinations — an ice-breaker bringing participants from various regions together in an informal setting',
      'Gathering & Team Building — activities relevant to a government organization context',
      'Plenary Sessions — technical setup for coordination sessions with 500 participants',
      'Awarding Ceremony — recognition for the best units within the Directorate General of Civil Aviation',
      'Gala Dinner with guest star Ifan Seventeen',
      'Full logistics coordination for 500 participants from various cities across Indonesia',
    ],
    result:
      'Tiga hari program berjalan on-schedule. Semua sesi teknis terlaksana dengan partisipasi penuh. Penampilan Ifan Seventeen di gala dinner menjadi momen yang membawa energy seluruh peserta ke puncak sebelum kembali ke kota masing-masing.',
    resultEn:
      "Three days of programming ran on schedule. All technical sessions were completed with full participation. Ifan Seventeen's performance at the gala dinner became the moment that brought all participants to a peak of energy before returning to their respective cities.",
    clientQuote:
      'Event skala ini dengan peserta dari seluruh Indonesia membutuhkan koordinasi yang sangat teliti. Semua berjalan tepat waktu dan sesuai standar yang kami harapkan.',
    clientQuoteAttribution: 'Kepala Bagian Umum, Ditjen Perhubungan Udara Kemenhub RI',
  },

  {
    _id: 'case-study-sosialisasi-tanda-tangan-digital-kominfo',
    _type: 'caseStudy',
    title: 'Sosialisasi Tanda Tangan Digital Kominfo',
    slug: { _type: 'slug', current: 'sosialisasi-tanda-tangan-digital-kominfo' },
    client: 'Kementerian Komunikasi & Informasi RI — BSRE',
    format: 'Government Roadshow',
    audience: '200 persons per province — NTB, Papua Barat Daya, Maluku Utara',
    cities: 'Lombok · Sorong · Ternate',
    outcome:
      '3 provinsi, 600+ peserta teredukasi — tidak ada satu sesi pun yang dibatalkan atau tertunda karena kendala logistik',
    outcomeNumber: '3 Provinces',
    year: 2023,
    featured: false,
    challenge:
      'Roadshow pemerintah ke daerah terpencil adalah ujian logistik yang sesungguhnya. BSRE Kominfo membutuhkan program sosialisasi yang konsisten di tiga provinsi dengan kondisi infrastruktur yang sangat berbeda — dari Lombok yang relatif accessible hingga Sorong dan Ternate yang membutuhkan koordinasi yang jauh lebih kompleks.',
    challengeEn:
      'A government roadshow to remote regions is a true logistics test. BSRE Kominfo needed a consistent socialization program across three provinces with vastly different infrastructure conditions — from relatively accessible Lombok to Sorong and Ternate requiring far more complex coordination.',
    approach:
      'Kami membangun program kit yang portable — semua materi, perlengkapan AV, dan protokol program dikemas sedemikian rupa sehingga bisa direplikasi di kondisi apapun. Tim advance kami melakukan scouting venue di setiap kota untuk mengidentifikasi gap antara kebutuhan program dan kondisi aktual, lalu menyiapkan contingency yang spesifik untuk setiap lokasi.',
    approachEn:
      'We built a portable program kit — all materials, AV equipment, and program protocols packaged to be replicable in any condition. Our advance team conducted venue scouting in each city to identify gaps between program requirements and actual conditions, then prepared location-specific contingencies.',
    execution: [
      'Lombok (12 Oktober 2023): Hotel Merumata — FGD, Talk Show, dan Plenary untuk 200 peserta dari instansi pemerintah NTB',
      'Sorong (29 November 2023): Hotel Aston Sorong — replikasi program dengan adaptasi untuk kondisi Papua Barat Daya',
      'Ternate (6 Desember 2023): Hotel Muara — program final dengan peserta dari instansi pemerintah Maluku Utara',
      'Konsistensi standar di ketiga lokasi — dari kualitas AV hingga materi sosialisasi',
      'Koordinasi logistik end-to-end termasuk transportasi tim dan perlengkapan ke tiga kota berbeda',
    ],
    executionEn: [
      'Lombok (12 October 2023): Hotel Merumata — FGD, Talk Show, and Plenary for 200 participants from NTB government agencies',
      'Sorong (29 November 2023): Hotel Aston Sorong — program replication with adaptations for Southwest Papua conditions',
      'Ternate (6 December 2023): Hotel Muara — final program with participants from North Maluku government agencies',
      'Consistent standards across all three locations — from AV quality to socialization materials',
      'End-to-end logistics coordination including team and equipment transport to three different cities',
    ],
    result:
      'Tiga roadshow terlaksana dalam tiga bulan dengan konsistensi kualitas yang dijaga ketat. Total 600+ peserta dari tiga provinsi teredukasi. Tidak ada satu pun sesi yang dibatalkan atau tertunda karena kendala logistik.',
    resultEn:
      'Three roadshows were completed in three months with rigorously maintained quality consistency. A total of 600+ participants from three provinces were educated. Not a single session was cancelled or delayed due to logistics issues.',
    clientQuote:
      'Roadshow ke Sorong dan Ternate bukan hal yang mudah bagi vendor manapun. Mereka membuktikan bahwa standar program tidak harus turun hanya karena lokasinya jauh dari Jakarta.',
    clientQuoteAttribution: 'Koordinator Program, BSRE Kementerian Komunikasi & Informasi RI',
  },

  {
    _id: 'case-study-milad-ke-11-askrindo-syariah',
    _type: 'caseStudy',
    title: 'Milad Ke-11 Askrindo Syariah',
    slug: { _type: 'slug', current: 'milad-ke-11-askrindo-syariah' },
    client: 'Askrindo Syariah',
    format: 'Corporate Anniversary & Gala Dinner',
    audience: '350 persons — company leadership and stakeholders',
    cities: 'Jakarta — Hotel Arya Duta Menteng',
    outcome:
      'UNGU Band performance menjadi momen paling memorable — banyak peserta yang pertama kali menyaksikan UNGU secara langsung',
    outcomeNumber: '11 Years',
    year: 2023,
    featured: false,
    challenge:
      'Ulang tahun perusahaan BUMN syariah memiliki dimensi yang berbeda — ada nilai-nilai dan nuansa keislaman yang harus hadir secara autentik, bukan sekadar formalitas. Askrindo Syariah ingin merayakan 11 tahunnya dengan cara yang mencerminkan identitas perusahaan: profesional, bermakna, dan menghibur — semuanya dalam satu malam.',
    challengeEn:
      'A BUMN syariah company anniversary has a different dimension — there are Islamic values and nuances that must be authentically present, not merely formal. Askrindo Syariah wanted to celebrate its 11th year in a way that reflected the company identity: professional, meaningful, and entertaining — all in one evening.',
    approach:
      'Kami membangun malam dengan tiga lapisan emosi yang mengalir secara natural: pembukaan yang resmi dan inspiratif (plenary + awarding), tengah yang entertaining (cabaret show), dan penutup yang celebratory (gala dinner). Pemilihan guest star juga mencerminkan pendekatan ini: UNGU Band untuk momen emosional, Dalang Kang Denny Chandra untuk segmen yang lebih playful.',
    approachEn:
      'We built the evening with three naturally flowing emotional layers: a formal and inspiring opening (plenary + awarding), an entertaining middle (cabaret show), and a celebratory close (gala dinner). Guest star selection also reflected this approach: UNGU Band for emotional moments, Dalang Kang Denny Chandra for a more playful segment.',
    execution: [
      'Plenary & Welcome Remarks dari Bapak Fankar Umran (Dirut PT Askrindo) dan Bapak Kokok Alun Akbar (Dirut Askrindo Syariah)',
      'Awarding Ceremony — penghargaan untuk karyawan dan mitra terbaik',
      'Cabaret Show — segmen entertainment yang memberikan energi baru di tengah malam',
      'Gala Dinner dengan food & beverage curation yang memperhatikan standar halal',
      'Penampilan UNGU Band sebagai headline entertainment',
      'Dalang Kang Denny Chandra untuk segmen comedy yang membawa tawa ke seluruh ruangan',
    ],
    executionEn: [
      'Plenary & Welcome Remarks from Bapak Fankar Umran (President Director, PT Askrindo) and Bapak Kokok Alun Akbar (President Director, Askrindo Syariah)',
      'Awarding Ceremony — recognition for the best employees and partners',
      'Cabaret Show — entertainment segment that brought new energy mid-evening',
      'Gala Dinner with food & beverage curation maintaining halal standards',
      'UNGU Band performance as headline entertainment',
      'Dalang Kang Denny Chandra for a comedy segment that brought laughter to the entire room',
    ],
    result:
      'Malam berjalan lancar dalam format yang padat namun tidak terasa terburu-buru. 350 peserta menikmati setiap segmen dengan antusias. Penampilan UNGU Band menjadi momen paling memorable. Manajemen Askrindo Syariah menyampaikan apresiasi khusus atas kepekaan tim dalam menjaga nuansa yang sesuai dengan identitas perusahaan.',
    resultEn:
      "The evening flowed smoothly in a packed yet unhurried format. 350 participants enthusiastically enjoyed every segment. The UNGU Band performance was the most memorable moment. Askrindo Syariah management expressed special appreciation for the team's sensitivity in maintaining nuances consistent with the company identity.",
    clientQuote:
      'Mereka memahami bahwa perusahaan kami bukan hanya soal bisnis, tapi juga soal nilai-nilai. Setiap elemen malam itu mencerminkan siapa kami — dan itu yang paling kami hargai.',
    clientQuoteAttribution: 'Direktur Utama, Askrindo Syariah',
  },

  {
    _id: 'case-study-future-leader-fest-2023',
    _type: 'caseStudy',
    title: 'Future Leader Fest 2023',
    slug: { _type: 'slug', current: 'future-leader-fest-2023' },
    client: 'ID Next Leader & Ikatan Alumni Kampus ITB',
    format: 'Youth Leadership Conference',
    audience: '1.000 persons — youth leaders and students',
    cities: 'Jakarta — Teater Tanah Airku, TMII',
    outcome:
      '1.000 pemuda hadir penuh — sesi mentoring menjadi yang paling banyak mendapat feedback positif karena berhasil menciptakan koneksi genuine di skala besar',
    outcomeNumber: '1,000 Leaders',
    year: 2023,
    featured: false,
    challenge:
      'Event kepemudaan dengan 1.000 peserta dan pembicara sekaliber pejabat negara membutuhkan dua hal yang seringkali bertentangan: skala yang impresif dan feel yang intimate dan inspiratif. Festival kepemimpinan bukan seminar — energinya harus berbeda, dan audiens muda memiliki ekspektasi yang tinggi terhadap kualitas pengalaman.',
    challengeEn:
      'A youth event with 1,000 participants and speakers of the caliber of state officials requires two often contradictory things: impressive scale and an intimate, inspirational feel. A leadership festival is not a seminar — the energy must be different, and a young audience has high expectations for experience quality.',
    approach:
      'Kami mendekati ini sebagai festival, bukan konferensi. Layout venue dirancang untuk memfasilitasi movement dan interaction, bukan hanya duduk dan mendengar. Sesi mentoring dirancang dalam format yang lebih personal — memecah 1.000 orang menjadi kelompok-kelompok lebih kecil yang memungkinkan interaksi nyata dengan mentor.',
    approachEn:
      'We approached this as a festival, not a conference. The venue layout was designed to facilitate movement and interaction, not just sitting and listening. Mentoring sessions were designed in a more personal format — breaking 1,000 people into smaller groups that enabled genuine interaction with mentors.',
    execution: [
      'Community Booth — puluhan booth dari komunitas kepemudaan, menciptakan festival atmosphere sejak peserta pertama datang',
      'Talk Show di main stage Teater Tanah Airku dengan kapasitas penuh 1.000 pax',
      'Future Leader Mentoring — sesi mentoring dengan format intimate yang dipecah dari skala besar',
      'Keynote dari Dr. H. Emil Elestianto Dardak (Wagub Jatim), Billy Mambrasar (Stafsus Presiden RI), Bahlil Lahadalia (Menteri Investasi RI), Damoza Nirwan (CEO Hyundai Gowa)',
      'Full protocol management untuk semua pembicara pejabat negara',
      'Crowd management untuk 1.000 peserta di Teater Tanah Airku TMII',
    ],
    executionEn: [
      'Community Booth — dozens of booths from youth communities, creating a festival atmosphere from the moment the first participant arrived',
      'Talk Show on the main stage of Teater Tanah Airku at full capacity of 1,000 pax',
      'Future Leader Mentoring — mentoring sessions in an intimate format broken out from the large scale',
      'Keynotes from Dr. H. Emil Elestianto Dardak (Deputy Governor of East Java), Billy Mambrasar (Presidential Staff), Bahlil Lahadalia (Minister of Investment), Damoza Nirwan (CEO Hyundai Gowa)',
      'Full protocol management for all state official speakers',
      'Crowd management for 1,000 participants at Teater Tanah Airku TMII',
    ],
    result:
      '1.000 pemuda hadir penuh dari pagi hingga sore. Semua keynote speaker hadir tanpa kendala protokol. Sesi mentoring menjadi yang paling banyak mendapat feedback positif — format intimate di tengah skala besar berhasil menciptakan koneksi yang genuine antara mentor dan peserta.',
    resultEn:
      '1,000 youth were present throughout from morning to afternoon. All keynote speakers attended without protocol issues. The mentoring sessions received the most positive feedback — an intimate format within a large scale successfully created genuine connections between mentors and participants.',
    clientQuote:
      'Mengelola 1.000 anak muda dengan ekspektasi tinggi bukan hal mudah. Mereka berhasil menciptakan energy yang tepat — antusias tapi terorganisir, besar tapi tetap personal.',
    clientQuoteAttribution: 'Co-Founder, ID Next Leader',
  },

  {
    _id: 'case-study-mitra-ninja-award-2020',
    _type: 'caseStudy',
    title: 'Mitra Ninja Award 2020 — Anda Tumbuh Kami Pun Tumbuh',
    slug: { _type: 'slug', current: 'mitra-ninja-award-2020' },
    client: 'Ninja Xpress',
    format: 'Awarding Gala Dinner',
    audience: '100 persons — top Mitra Ninja Xpress owners from across Indonesia',
    cities: 'Jakarta — Hotel Arya Duta Menteng',
    outcome:
      'Para Mitra meninggalkan malam itu dengan rasa bangga dan dihargai — feedback pasca-event menjadi yang terbaik sepanjang program Mitra Ninja',
    outcomeNumber: '100 Mitra',
    year: 2020,
    featured: false,
    challenge:
      'Ninja Xpress ingin memberikan penghargaan kepada para Mitra terbaik mereka dari seluruh Indonesia dalam sebuah malam yang terasa setara dengan kontribusi para Mitra tersebut. Tantangannya: audiens adalah para owner mitra dari berbagai daerah yang mungkin pertama kali datang ke acara formal level ini — event harus terasa prestige tanpa terasa eksklusif dan mengintimidasi.',
    challengeEn:
      "Ninja Xpress wanted to honor their best Mitra partners from across Indonesia in an evening that felt commensurate with those partners' contributions. The challenge: the audience was mitra owners from various regions who may be attending a formal event at this level for the first time — the event needed to feel prestigious without feeling exclusive or intimidating.",
    approach:
      'Kami membangun malam dengan tema yang sesuai tagline campaign: "Anda Tumbuh Kami Pun Tumbuh" — pernyataan tentang partnership yang setara. Seluruh elemen dirancang untuk membuat para Mitra merasa dihargai sebagai protagonis malam itu, bukan sekadar audiens. Dari welcome reception hingga awarding ceremony, fokus selalu pada mereka.',
    approachEn:
      'We built the evening around the campaign tagline: "Anda Tumbuh Kami Pun Tumbuh" (You Grow, We Grow) — a statement about equal partnership. Every element was designed to make Mitra partners feel valued as the protagonists of the evening, not merely the audience. From welcome reception to awarding ceremony, the focus was always on them.',
    execution: [
      'VIP Reception — penyambutan hangat untuk para Mitra dari berbagai daerah yang baru tiba di Jakarta',
      'Gala Dinner di Hotel Arya Duta Menteng dengan suasana warm dan celebratory',
      'Awarding Night — momen puncak penghargaan dengan ceremonial yang memastikan setiap penerima mendapat spotlight yang layak dikenang',
      'Company Update dari BOD Ninja Xpress — disampaikan dalam format yang accessible dan inspiring bagi para Mitra',
      'Penampilan Nassar sebagai guest star penutup malam',
    ],
    executionEn: [
      'VIP Reception — a warm welcome for Mitra partners from various regions arriving in Jakarta',
      'Gala Dinner at Hotel Arya Duta Menteng with a warm and celebratory atmosphere',
      'Awarding Night — the culminating recognition moment with ceremonial designed to ensure every recipient received a spotlight moment worth remembering',
      'Company Update from Ninja Xpress BOD — delivered in a format accessible and inspiring for Mitra partners',
      'Nassar performance as the closing guest star of the evening',
    ],
    result:
      '100 Mitra dari berbagai daerah meninggalkan malam itu dengan rasa bangga dan dihargai. Awarding ceremony berjalan dengan ceremonial yang tepat — tidak terburu-buru, memberikan spotlight yang layak untuk setiap penerima. BOD Ninja Xpress menyatakan feedback dari para Mitra pasca-event sangat positif.',
    resultEn:
      '100 Mitra partners from various regions left the evening feeling proud and valued. The awarding ceremony ran with the right ceremonial pace — unhurried, giving each recipient a deserving spotlight moment. Ninja Xpress BOD reported overwhelmingly positive post-event feedback from Mitra partners.',
    clientQuote:
      'Para Mitra kami adalah tulang punggung bisnis kami. Malam itu kami ingin mereka merasakan itu. Dan mereka merasakannya.',
    clientQuoteAttribution: 'Head of Partner Relations, Ninja Xpress',
  },
]

// ── Import runner ─────────────────────────────────────────────────────────────

async function importCaseStudies() {
  console.log(`\nImporting ${caseStudies.length} case studies to Sanity...\n`)

  let successCount = 0
  let failCount = 0

  for (const cs of caseStudies) {
    try {
      await client.createOrReplace(cs)
      console.log(`  ✓  ${cs.title}`)
      successCount++
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err)
      console.error(`  ✗  ${cs.title}`)
      console.error(`     ${message}`)
      failCount++
    }
  }

  console.log(`\n─────────────────────────────────────`)
  console.log(`  Imported:  ${successCount} / ${caseStudies.length}`)
  if (failCount > 0) {
    console.log(`  Failed:    ${failCount}`)
  }
  console.log(`─────────────────────────────────────\n`)
}

importCaseStudies()
