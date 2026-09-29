import { Check } from 'lucide-react'
import { useState } from 'react'

import type { ContactContent } from '@/sections/contact/types/contact.types'
import MaskIcon from '@/shared/components/ui/MaskIcon'
import { CONTACT, WHATSAPP_GREETING } from '@/shared/config/contact'
import { cn } from '@/shared/utils/cn'
import { buildWhatsAppUrl } from '@/shared/utils/whatsapp'

const MEAT_LINES = [
  { id: 'cerdo', label: 'Cerdo' },
  { id: 'res', label: 'Res' },
  { id: 'ambas', label: 'Cerdo y res' },
] as const

type MeatLineId = (typeof MEAT_LINES)[number]['id']

const OPTION_BASE =
  'min-h-11 cursor-pointer border px-4 text-xs/none font-semibold tracking-button uppercase transition-colors duration-200'

// El comprador arma el mensaje de cotización: elige la línea, qué datos incluir y los escribe.
// No es un formulario con servidor: el texto se abre en WhatsApp listo para enviar
function QuoteBuilder({ content }: { content: ContactContent['quote'] }) {
  const [meatLine, setMeatLine] = useState<MeatLineId>('ambas')
  const [included, setIncluded] = useState(() => content.lines.map((line) => line.id))
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const selectedLines = content.lines.filter((line) => included.includes(line.id))
  const meatLineLabel = MEAT_LINES.find((option) => option.id === meatLine)?.label ?? ''
  const message = [
    WHATSAPP_GREETING,
    '',
    `Línea: ${meatLineLabel}`,
    ...selectedLines.map((line) => `${line.prompt} ${answers[line.id]?.trim() ?? ''}`.trim()),
  ].join('\n')
  // null mientras el número no esté confirmado: el botón se ve igual, pero aún no redirige
  const whatsappUrl = CONTACT.whatsappPhone
    ? buildWhatsAppUrl(CONTACT.whatsappPhone, message)
    : null

  function toggleLine(id: string) {
    setIncluded((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  function answer(id: string, value: string) {
    setAnswers((current) => ({ ...current, [id]: value }))
  }

  return (
    <section aria-labelledby="quote-title" className="bg-cold py-[clamp(4rem,9vw,7.5rem)]">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="quote-title" className="font-display text-section font-extrabold text-navy">
            {content.title}
          </h2>
          <p className="mt-5 max-w-120 text-[17px] leading-[1.75] text-pretty text-muted">
            {content.description}
          </p>

          <fieldset className="mt-10">
            <legend className="text-sm font-semibold text-navy">Línea de producto</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {MEAT_LINES.map((option) => {
                const isActive = option.id === meatLine

                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setMeatLine(option.id)}
                    className={cn(
                      OPTION_BASE,
                      isActive
                        ? 'border-navy bg-navy text-white'
                        : 'border-navy/20 bg-white text-navy hover:border-navy',
                    )}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="mt-9">
            <legend className="text-sm font-semibold text-navy">Qué incluir en el mensaje</legend>
            <ul className="mt-3 border-b border-navy/14">
              {content.lines.map((line) => (
                <li key={line.id} className="border-t border-navy/14">
                  <label className="flex min-h-15 cursor-pointer items-center gap-4 py-3">
                    <span className="relative grid size-5 shrink-0 place-items-center">
                      <input
                        type="checkbox"
                        checked={included.includes(line.id)}
                        onChange={() => toggleLine(line.id)}
                        className="peer size-5 cursor-pointer appearance-none border-2 border-navy/40 bg-white transition-colors checked:border-navy checked:bg-navy"
                      />
                      <Check
                        aria-hidden="true"
                        strokeWidth={3}
                        className="pointer-events-none absolute size-3.5 text-white opacity-0 peer-checked:opacity-100"
                      />
                    </span>
                    <span className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4">
                      <span className="font-semibold text-navy">{line.label}</span>
                      <span className="text-[13px] text-muted">{line.hint}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>

        {/* Vista previa editable: cada línea se escribe aquí y así llega a WhatsApp */}
        <div className="flex flex-col bg-ink p-[clamp(1.5rem,4vw,3rem)] text-white lg:col-span-7">
          <p className="flex items-center gap-3 text-[13px] font-medium text-muted-cold">
            <MaskIcon src="/assets/images/logos/whatsapp.svg" className="size-4 text-ice" />
            Tu mensaje
          </p>

          <div className="mt-8 flex-1 text-[17px] leading-[1.7]">
            <p className="text-pretty">{WHATSAPP_GREETING}</p>
            <ul className="mt-6 space-y-1">
              <li className="-mx-3 px-3 py-1.5">
                Línea: <span className="text-ice">{meatLineLabel}</span>
              </li>
              {selectedLines.map((line) => (
                <li
                  key={line.id}
                  className="-mx-3 flex animate-line-in flex-wrap items-baseline gap-x-3 px-3 py-1.5 motion-reduce:animate-none"
                >
                  <label htmlFor={`quote-${line.id}`} className="shrink-0">
                    {line.prompt}
                  </label>
                  <input
                    id={`quote-${line.id}`}
                    type="text"
                    value={answers[line.id] ?? ''}
                    onChange={(event) => answer(line.id, event.target.value)}
                    placeholder={line.hint}
                    autoComplete="off"
                    className="min-w-40 flex-1 border-b border-dashed border-ice/40 bg-transparent py-0.5 text-ice caret-ice outline-none placeholder:text-white/30 focus:border-solid focus:border-ice"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-end">
            {/* Único botón redondeado del sitio: blanco sobre el panel, con texto e ícono en cobalto */}
            <a
              href={whatsappUrl ?? undefined}
              target={whatsappUrl ? '_blank' : undefined}
              rel={whatsappUrl ? 'noopener noreferrer' : undefined}
              className="inline-flex min-h-14 cursor-pointer items-center gap-3 rounded-full bg-white px-8 text-[17px] font-semibold text-cobalt transition-colors duration-300 hover:bg-frost focus-visible:outline-ice"
            >
              <MaskIcon src="/assets/images/logos/whatsapp.svg" className="size-5" />
              Enviar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteBuilder
