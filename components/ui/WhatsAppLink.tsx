'use client'

import { sendGAEvent } from '@next/third-parties/google'

interface Props {
  href: string
  location: string
  className?: string
  children: React.ReactNode
}

export default function WhatsAppLink({ href, location, className, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => sendGAEvent('event', 'whatsapp_click', { location })}
    >
      {children}
    </a>
  )
}
