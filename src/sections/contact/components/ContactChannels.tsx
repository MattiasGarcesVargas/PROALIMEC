import { Clock3, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { CITY, CONTACT } from '@/shared/config/contact'

import PendingNote from './PendingNote'

const ACTION_CLASS =
  'mt-5 inline-flex border-b border-navy/30 pb-1 text-xs/none font-semibold tracking-button text-navy uppercase transition-colors hover:border-navy'

interface Channel {
  id: string
  icon: LucideIcon
  title: string
  /** Nombre en la línea de pendientes ("teléfono, correo…") */
  pendingName?: string
  /** null mientras el dato no esté confirmado */
  body: ReactNode | null
}

function buildChannels(): Channel[] {
  const { phone, phoneDisplay, email, address, mapsUrl, hours } = CONTACT

  return [
    {
      id: 'phone',
      icon: Phone,
      title: 'Teléfono',
      pendingName: 'teléfono',
      body:
        phone && phoneDisplay ? (
          <>
            <p>{phoneDisplay}</p>
            <a href={`tel:${phone}`} className={ACTION_CLASS}>
              Llamar
            </a>
          </>
        ) : null,
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Correo',
      pendingName: 'correo',
      body: email ? (
        <>
          <p className="break-words">{email}</p>
          <a href={`mailto:${email}`} className={ACTION_CLASS}>
            Escribir un correo
          </a>
        </>
      ) : null,
    },
    {
      // La ciudad está aprobada: la ubicación siempre tiene algo real que mostrar
      id: 'location',
      icon: MapPin,
      title: 'Ubicación',
      body: (
        <>
          <address className="not-italic">
            {address && <p>{address}</p>}
            <p>{CITY}</p>
          </address>
          {mapsUrl && (
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={ACTION_CLASS}>
              Abrir en Google Maps
            </a>
          )}
        </>
      ),
    },
    {
      id: 'hours',
      icon: Clock3,
      title: 'Horarios',
      pendingName: 'horarios',
      body:
        hours.length > 0 ? (
          <dl className="space-y-1">
            {hours.map((hour) => (
              <div key={hour.label} className="flex justify-between gap-4">
                <dt>{hour.label}</dt>
                <dd className="text-muted">{hour.value}</dd>
              </div>
            ))}
          </dl>
        ) : null,
    },
  ]
}

// Lista "teléfono, correo y horarios"
function joinNames(names: string[]) {
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} y ${names.at(-1)}` : names[0]
}

// Canales secundarios: solo se dibuja el canal que tiene datos; lo pendiente se dice en una línea
function ContactChannels({ title }: { title: string }) {
  const channels = buildChannels()
  const available = channels.filter((channel) => channel.body !== null)
  const pending = [
    ...channels.flatMap((channel) =>
      channel.body === null && channel.pendingName ? [channel.pendingName] : [],
    ),
    ...(CONTACT.address ? [] : ['dirección exacta']),
  ]

  return (
    <section aria-labelledby="channels-title" className="bg-white py-[clamp(4rem,9vw,7rem)]">
      <div className="shell">
        <h2 id="channels-title" className="font-display text-subsection font-extrabold text-navy">
          {title}
        </h2>

        <div className="mt-10 grid grid-fit-56 gap-x-8 border-b border-navy/14">
          {available.map(({ id, icon: Icon, title: channelTitle, body }) => (
            <div key={id} className="border-t border-navy/14 pt-6 pb-10">
              <Icon aria-hidden="true" className="size-5 text-navy" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-[1.25rem] font-bold tracking-[-0.025em] text-navy">
                {channelTitle}
              </h3>
              <div className="mt-2 text-[15px] leading-[1.7] text-ink">{body}</div>
            </div>
          ))}
        </div>

        {pending.length > 0 && (
          <PendingNote className="mt-6 text-[15px]">
            {`${joinNames(pending).replace(/^./, (letter) => letter.toUpperCase())} por confirmar.`}
          </PendingNote>
        )}
      </div>
    </section>
  )
}

export default ContactChannels
