'use client'

import { useState } from 'react'
import styles from './page.module.css'

const eventTypes = [
  'Corporate Event',
  'Corporate Gathering',
  'Product Launching',
  'Gala Dinner & Award Night',
  'Conference & Seminar',
  'Team Building',
  'MICE & Hospitality',
  'Hybrid & Virtual Event',
  'Incentive Trip',
  'Lainnya',
]

const audienceSizes = ['< 50', '50–100', '100–300', '300–500', '500–1.000', '> 1.000']

const cities = ['Jakarta', 'Bali', 'Surabaya', 'Bandung', 'Medan', 'Makassar', 'Kota lain']

const budgets = [
  '< Rp 50 juta',
  'Rp 50–100 juta',
  'Rp 100–300 juta',
  'Rp 300 juta – 1 miliar',
  '> Rp 1 miliar',
]

interface FormData {
  nama: string
  perusahaan: string
  jabatan: string
  email: string
  whatsapp: string
  jenisEvent: string
  jumlahPeserta: string
  tanggalEvent: string
  kota: string
  budget: string
  brief: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialData: FormData = {
  nama: '',
  perusahaan: '',
  jabatan: '',
  email: '',
  whatsapp: '',
  jenisEvent: '',
  jumlahPeserta: '',
  tanggalEvent: '',
  kota: '',
  budget: '',
  brief: '',
}

function validateEmail(email: string): boolean {
  return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')
}

function validateWhatsApp(number: string): boolean {
  const digits = number.replace(/[\s\-+]/g, '')
  return /^\d{9,}$/.test(digits)
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.nama.trim())
    errors.nama = 'Nama lengkap wajib diisi'

  if (!data.perusahaan.trim())
    errors.perusahaan = 'Nama perusahaan wajib diisi'

  if (!data.email.trim())
    errors.email = 'Email wajib diisi'
  else if (!validateEmail(data.email))
    errors.email = 'Format email tidak valid'

  if (!data.whatsapp.trim())
    errors.whatsapp = 'Nomor WhatsApp wajib diisi'
  else if (!validateWhatsApp(data.whatsapp))
    errors.whatsapp = 'Nomor WhatsApp tidak valid'

  if (!data.jenisEvent)
    errors.jenisEvent = 'Jenis event wajib dipilih'

  if (!data.brief.trim())
    errors.brief = 'Deskripsi brief wajib diisi'

  return errors
}

export default function ProposalForm() {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as soon as the user edits it
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Scroll to first errored field
      const firstKey = Object.keys(validationErrors)[0]
      document.getElementById(firstKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    const eventLabels: Record<string, string> = {
      'corporate-event': 'Corporate Event',
      'corporate-gathering': 'Corporate Gathering',
      'gala-dinner': 'Gala Dinner & Award Night',
      'conference-seminar': 'Conference & Seminar',
      'team-building': 'Team Building',
      'product-launching': 'Product Launching',
      'hybrid-virtual': 'Hybrid & Virtual Event',
      'incentive-trip': 'Incentive Trip',
      'mice-hospitality': 'MICE & Hospitality',
      'roadshow': 'Roadshow',
      'lainnya': 'Lainnya',
    }

    const budgetLabels: Record<string, string> = {
      'under-100': 'Di bawah Rp 100 juta',
      '100-300': 'Rp 100 juta - 300 juta',
      '300-500': 'Rp 300 juta - 500 juta',
      '500-1000': 'Rp 500 juta - 1 miliar',
      'above-1000': 'Di atas Rp 1 miliar',
    }

    const pesertaLabels: Record<string, string> = {
      'under-100': 'Di bawah 100 orang',
      '100-300': '100 - 300 orang',
      '300-500': '300 - 500 orang',
      '500-1000': '500 - 1.000 orang',
      '1000-3000': '1.000 - 3.000 orang',
      'above-3000': 'Di atas 3.000 orang',
    }

    const formatDate = (dateStr: string) => {
      if (!dateStr) return '-'
      const date = new Date(dateStr)
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    }

    const message = [
      'Halo Elevent, berikut detail kebutuhan event kami:',
      '',
      `*Nama:* ${formData.nama}`,
      `*Perusahaan:* ${formData.perusahaan}`,
      `*Jabatan:* ${formData.jabatan || '-'}`,
      `*Email:* ${formData.email}`,
      `*WhatsApp:* ${formData.whatsapp}`,
      `*Jenis Event:* ${eventLabels[formData.jenisEvent] || formData.jenisEvent || '-'}`,
      `*Jumlah Peserta:* ${pesertaLabels[formData.jumlahPeserta] || formData.jumlahPeserta || '-'}`,
      `*Tanggal Event:* ${formatDate(formData.tanggalEvent)}`,
      `*Kota:* ${formData.kota || '-'}`,
      `*Budget:* ${budgetLabels[formData.budget] || formData.budget || '-'}`,
      '',
      `*Brief:*`,
      formData.brief,
    ].join('\n')

    const waUrl = `https://wa.me/6285199333039?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
    setSubmitted(true)
  }

  function fieldClass(base: string, field: keyof FormData) {
    return `${base} ${errors[field] ? styles.fieldError : ''}`.trim()
  }

  if (submitted) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successHeadline}>Brief diterima.</h2>
        <p className={styles.successBody}>
          Brief Anda sudah kami terima. Tim kami akan menghubungi dalam 1 hari kerja.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="nama">NAMA LENGKAP</label>
          <input
            id="nama"
            name="nama"
            type="text"
            className={fieldClass(styles.fieldInput, 'nama')}
            value={formData.nama}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.nama && <span className={styles.fieldErrorMsg}>{errors.nama}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="perusahaan">PERUSAHAAN</label>
          <input
            id="perusahaan"
            name="perusahaan"
            type="text"
            className={fieldClass(styles.fieldInput, 'perusahaan')}
            value={formData.perusahaan}
            onChange={handleChange}
            autoComplete="organization"
          />
          {errors.perusahaan && <span className={styles.fieldErrorMsg}>{errors.perusahaan}</span>}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="jabatan">JABATAN</label>
          <input
            id="jabatan"
            name="jabatan"
            type="text"
            className={fieldClass(styles.fieldInput, 'jabatan')}
            value={formData.jabatan}
            onChange={handleChange}
            autoComplete="organization-title"
          />
          {errors.jabatan && <span className={styles.fieldErrorMsg}>{errors.jabatan}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="email">EMAIL BISNIS</label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass(styles.fieldInput, 'email')}
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className={styles.fieldErrorMsg}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="whatsapp">NOMOR WHATSAPP</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            className={fieldClass(styles.fieldInput, 'whatsapp')}
            value={formData.whatsapp}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+62"
          />
          {errors.whatsapp && <span className={styles.fieldErrorMsg}>{errors.whatsapp}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="jenisEvent">JENIS EVENT</label>
          <select
            id="jenisEvent"
            name="jenisEvent"
            className={fieldClass(styles.fieldSelect, 'jenisEvent')}
            value={formData.jenisEvent}
            onChange={handleChange}
          >
            <option value="" disabled>Pilih jenis event</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.jenisEvent && <span className={styles.fieldErrorMsg}>{errors.jenisEvent}</span>}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="jumlahPeserta">ESTIMASI JUMLAH PESERTA</label>
          <select
            id="jumlahPeserta"
            name="jumlahPeserta"
            className={fieldClass(styles.fieldSelect, 'jumlahPeserta')}
            value={formData.jumlahPeserta}
            onChange={handleChange}
          >
            <option value="" disabled>Pilih estimasi peserta</option>
            {audienceSizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.jumlahPeserta && <span className={styles.fieldErrorMsg}>{errors.jumlahPeserta}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="tanggalEvent">ESTIMASI TANGGAL EVENT</label>
          <input
            id="tanggalEvent"
            name="tanggalEvent"
            type="date"
            className={`${styles.fieldInput} ${styles.dateInput}`}
            value={formData.tanggalEvent}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="kota">KOTA PELAKSANAAN</label>
          <select
            id="kota"
            name="kota"
            className={fieldClass(styles.fieldSelect, 'kota')}
            value={formData.kota}
            onChange={handleChange}
          >
            <option value="" disabled>Pilih kota</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.kota && <span className={styles.fieldErrorMsg}>{errors.kota}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="budget">ESTIMASI BUDGET</label>
          <select
            id="budget"
            name="budget"
            className={fieldClass(styles.fieldSelect, 'budget')}
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="" disabled>Pilih range budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && <span className={styles.fieldErrorMsg}>{errors.budget}</span>}
        </div>
      </div>

      <div className={styles.fieldGroupFull}>
        <label className={styles.fieldLabel} htmlFor="brief">CERITAKAN BRIEF EVENT ANDA</label>
        <textarea
          id="brief"
          name="brief"
          className={fieldClass(styles.fieldTextarea, 'brief')}
          value={formData.brief}
          onChange={handleChange}
          rows={5}
          placeholder="Tujuan event, format yang diinginkan, kendala khusus, atau hal lain yang relevan..."
        />
        {errors.brief && <span className={styles.fieldErrorMsg}>{errors.brief}</span>}
      </div>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.submitBtn}>
          Kirim Brief →
        </button>
        <p className={styles.formDisclaimer}>
          Data Anda aman. Perjanjian kerahasiaan tersedia sebelum proposal jika diperlukan.
        </p>
      </div>
    </form>
  )
}
