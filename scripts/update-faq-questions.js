const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const patches = {
  'corporate-gathering': {
    1: { questionId: 'Bisakah Elevent menjalankan gathering untuk kelompok sangat besar (1.000+ karyawan)?' },
    2: { questionId: 'Apakah Elevent bisa menangani gathering yang melibatkan keluarga karyawan?' },
  },
  'product-launching': {
    0: { questionId: 'Bagaimana Elevent menangani undangan media dan pers?' },
    1: { questionId: 'Bagaimana Elevent memastikan kerahasiaan reveal produk sebelum peluncuran?' },
  },
  'gala-dinner-award-night': {
    0: { questionId: 'Berapa banyak kategori penghargaan yang bisa Elevent kelola dalam satu upacara?' },
    1: { questionId: 'Bisakah Elevent memasukkan hiburan live dalam upacara?' },
  },
  'conference-seminar': {
    1: { questionId: 'Bisakah Elevent menangani konferensi multi-hari di beberapa kota?' },
    2: { questionId: 'Apakah Elevent bisa membantu kurasi dan merekrut pembicara untuk konferensi kami?' },
  },
  'team-building': {
    0: { questionId: 'Bagaimana Elevent memastikan aktivitas terasa relevan, bukan dipaksakan?' },
    1: { questionId: 'Bisakah Elevent menjalankan program untuk tim yang sangat besar (200+ orang)?' },
  },
  'mice-hospitality': {
    0: { questionId: 'Apakah Elevent mengelola program MICE yang mencakup beberapa negara?' },
    1: { questionId: 'Bisakah Elevent menangani program insentif untuk ratusan delegasi secara bersamaan?' },
    2: { questionId: 'Bagaimana Elevent menjaga kualitas layanan yang konsisten di semua lokasi program MICE?' },
  },
  'hybrid-virtual-event': {
    0: { questionId: 'Platform streaming apa yang Elevent dukung?' },
  },
  'incentive-trip': {
    0: { questionId: 'Destinasi apa yang Elevent spesialisasikan untuk incentive trip?' },
    1: { questionId: 'Bisakah Elevent mengelola pengalaman insentif berjenjang dalam program yang sama?' },
  },
  'corporate-meeting': {
    0: { questionId: 'Apakah Elevent mengelola pencarian venue atau hanya operasional on-site?' },
    1: { questionId: 'Jenis venue rapat apa yang biasanya Elevent rekomendasikan?' },
    2: { questionId: 'Apakah Elevent bisa mendokumentasikan hasil dan keputusan dari rapat?' },
  },
  'corporate-anniversary': {
    0: { questionId: 'Bagaimana cara Elevent menjaga keseimbangan antara menghormati sejarah dan tetap relevan ke depan?' },
    2: { questionId: 'Apakah Elevent membantu produksi konten sejarah seperti buku atau film dokumenter?' },
  },
  'corporate-outing': {
    0: { questionId: 'Jenis aktivitas outing apa yang Elevent tawarkan?' },
    1: { questionId: 'Di mana saja Elevent menyelenggarakan outing korporat?' },
  },
  'brand-activation': {
    0: { questionId: 'Bagaimana Elevent mengukur keberhasilan aktivasi?' },
    1: { questionId: 'Apakah Elevent mendesain pembangunan fisik atau hanya konsepnya?' },
  },
  'exhibition-pameran': {
    0: { questionId: 'Ukuran booth apa yang biasanya Elevent tangani?' },
    1: { questionId: 'Apakah Elevent juga mengelola proses pendaftaran dan koordinasi dengan penyelenggara pameran?' },
    2: { questionId: 'Bisakah Elevent merancang booth yang bisa digunakan di beberapa pameran?' },
  },
  'roadshow': {
    1: { questionId: 'Bagaimana Elevent memastikan kualitas yang konsisten di setiap kota?' },
    2: { questionId: 'Apakah Elevent bisa mengelola roadshow yang menggabungkan acara publik dan privat di kota yang sama?' },
  },
}

async function run() {
  for (const [slug, faqPatches] of Object.entries(patches)) {
    try {
      const doc = await client.fetch(
        `*[_type == "service" && slug.current == $slug][0]{ _id, faqs }`,
        { slug }
      )
      if (!doc?._id) {
        console.warn(`⚠  [${slug}] not found`)
        continue
      }
      const faqs = (doc.faqs || []).map(f => ({ ...f }))
      for (const [idxStr, fields] of Object.entries(faqPatches)) {
        const i = parseInt(idxStr, 10)
        if (i >= faqs.length) {
          console.warn(`⚠  [${slug}] faqs[${i}] out of range (length ${faqs.length})`)
          continue
        }
        Object.assign(faqs[i], fields)
      }
      await client.patch(doc._id).set({ faqs }).commit()
      console.log(`✓ [${slug}] patched`)
    } catch (err) {
      console.error(`✗ [${slug}] failed:`, err.message)
    }
  }
  console.log('\nDone.')
}

run()
