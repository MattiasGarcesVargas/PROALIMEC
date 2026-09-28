import CatalogClosing from './components/CatalogClosing'
import ContactChannels from './components/ContactChannels'
import ContactHero from './components/ContactHero'
import QuoteBuilder from './components/QuoteBuilder'
import { useContactData } from './hooks/use-contact-data'

function ContactPage() {
  const content = useContactData()

  return (
    <main id="main-content">
      <ContactHero content={content.hero} />
      <QuoteBuilder content={content.quote} />
      <ContactChannels title={content.channels.title} />
      <CatalogClosing content={content.closing} />
    </main>
  )
}

export default ContactPage
