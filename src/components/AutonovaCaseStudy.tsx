
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Maximize2,
  Monitor,
  ShieldCheck,
  X
} from 'lucide-react'
import './AutonovaCaseStudy.css'

type Props = {
  sr: boolean
}

type Slide = {
  id: string
  image: string
  titleEn: string
  titleSr: string
  subtitleEn: string
  subtitleSr: string
  descriptionEn: string
  descriptionSr: string
  pointsEn: string[]
  pointsSr: string[]
}

const siteUrl = 'https://autonova-technical.netlify.app'
const adminUrl = `${siteUrl}/admin.html`

const slides: Slide[] = [
  {
    id: 'homepage',
    image: '/images/autonova/homepage.png',
    titleEn: 'A strong first impression.',
    titleSr: 'Snažan prvi utisak.',
    subtitleEn: '01 / HOMEPAGE',
    subtitleSr: '01 / POČETNA STRANICA',
    descriptionEn:
      'A bold, service-oriented landing page that establishes the automotive identity and directs visitors toward the most important actions.',
    descriptionSr:
      'Upečatljiva početna stranica koja predstavlja automobilski brend i vodi posetioce ka najvažnijim uslugama.',
    pointsEn: [
      'Clear visual hierarchy',
      'Prominent booking and calculator actions',
      'Responsive navigation'
    ],
    pointsSr: [
      'Jasna vizuelna hijerarhija',
      'Istaknuto zakazivanje i kalkulator',
      'Responzivna navigacija'
    ]
  },
  {
    id: 'inspection',
    image: '/images/autonova/inspection.png',
    titleEn: 'Explore every detail.',
    titleSr: 'Istražite svaki detalj.',
    subtitleEn: '02 / INTERACTIVE INSPECTION',
    subtitleSr: '02 / INTERAKTIVNI PREGLED',
    descriptionEn:
      'An interactive vehicle inspection section uses visual markers and step-based navigation to explain the inspection process.',
    descriptionSr:
      'Interaktivna sekcija tehničkog pregleda koristi vizuelne oznake i navigaciju kroz korake kako bi objasnila proces kontrole vozila.',
    pointsEn: [
      'Interactive vehicle hotspots',
      'Step-by-step inspection content',
      'Contextual information'
    ],
    pointsSr: [
      'Interaktivne oznake na vozilu',
      'Prikaz pregleda kroz korake',
      'Kontekstualne informacije'
    ]
  },
  {
    id: 'services',
    image: '/images/autonova/services.png',
    titleEn: 'Services, clearly presented.',
    titleSr: 'Usluge na jednom mestu.',
    subtitleEn: '03 / SERVICE ARCHITECTURE',
    subtitleSr: '03 / STRUKTURA USLUGA',
    descriptionEn:
      'A structured overview of technical inspections, vehicle registration and insurance, with a consistent visual language.',
    descriptionSr:
      'Pregledno predstavljene usluge tehničkog pregleda, registracije i osiguranja, uz dosledan vizuelni identitet.',
    pointsEn: [
      'Service-based content structure',
      'Consistent card components',
      'Clear navigation paths'
    ],
    pointsSr: [
      'Organizacija sadržaja po uslugama',
      'Dosledan dizajn kartica',
      'Jednostavna navigacija'
    ]
  },
  {
    id: 'registration',
    image: '/images/autonova/registration.png',
    titleEn: 'Guidance without complexity.',
    titleSr: 'Informacije bez komplikacija.',
    subtitleEn: '04 / REGISTRATION GUIDE',
    subtitleSr: '04 / VODIČ ZA REGISTRACIJU',
    descriptionEn:
      'A dynamic guide that changes the displayed information based on the registration procedure selected by the visitor.',
    descriptionSr:
      'Dinamički vodič koji prikazuje odgovarajuće informacije u zavisnosti od postupka registracije koji korisnik izabere.',
    pointsEn: [
      'Selectable registration procedures',
      'Dynamic content updates',
      'Step-by-step information'
    ],
    pointsSr: [
      'Izbor postupka registracije',
      'Dinamička promena sadržaja',
      'Informacije organizovane po koracima'
    ]
  },
  {
    id: 'calculator',
    image: '/images/autonova/calculator.png',
    titleEn: 'An interactive cost estimate.',
    titleSr: 'Interaktivna procena troškova.',
    subtitleEn: '05 / REGISTRATION CALCULATOR',
    subtitleSr: '05 / KALKULATOR REGISTRACIJE',
    descriptionEn:
      'A JavaScript-powered demonstration calculator that takes vehicle details and displays an itemized, illustrative registration cost estimate.',
    descriptionSr:
      'Demonstracioni kalkulator napravljen u JavaScript-u koji na osnovu podataka o vozilu prikazuje informativnu procenu troškova registracije.',
    pointsEn: [
      'Vehicle input fields',
      'Calculated estimate',
      'Itemized cost breakdown'
    ],
    pointsSr: [
      'Unos podataka o vozilu',
      'Izračunavanje procene',
      'Prikaz pojedinačnih troškova'
    ]
  },
  {
    id: 'booking',
    image: '/images/autonova/booking.png',
    titleEn: 'Booking made intuitive.',
    titleSr: 'Jednostavno zakazivanje termina.',
    subtitleEn: '06 / BOOKING EXPERIENCE',
    subtitleSr: '06 / SISTEM ZAKAZIVANJA',
    descriptionEn:
      'An appointment booking interface with a calendar, time slots, service selection and a customer information form.',
    descriptionSr:
      'Interfejs za zakazivanje sa kalendarom, izborom vremena i usluge, kao i formularom za podatke korisnika.',
    pointsEn: [
      'Interactive calendar and time slots',
      'Service and appointment selection',
      'Client-side form handling'
    ],
    pointsSr: [
      'Interaktivni kalendar i termini',
      'Izbor usluge i vremena',
      'Obrada forme u browseru'
    ]
  },
  {
    id: 'contact',
    image: '/images/autonova/contact.png',
    titleEn: 'Communication, simplified.',
    titleSr: 'Jednostavna komunikacija.',
    subtitleEn: '07 / CONTACT SYSTEM',
    subtitleSr: '07 / KONTAKT SISTEM',
    descriptionEn:
      'A structured contact experience with service-related inquiries and browser-based demonstration message storage.',
    descriptionSr:
      'Kontakt sekcija sa izborom vrste usluge i demonstracionim čuvanjem poruka u browseru.',
    pointsEn: [
      'Structured inquiry form',
      'Service categorization',
      'Local demo message storage'
    ],
    pointsSr: [
      'Strukturisana kontakt forma',
      'Kategorije usluga',
      'Lokalno čuvanje demo poruka'
    ]
  },
  {
    id: 'dashboard',
    image: '/images/autonova/dashboard.png',
    titleEn: 'Behind the interface.',
    titleSr: 'Iza korisničkog interfejsa.',
    subtitleEn: '08 / ADMIN DASHBOARD',
    subtitleSr: '08 / ADMINISTRATORSKI PANEL',
    descriptionEn:
      'A separate demonstration dashboard for reviewing appointment requests and contact messages, with search, filtering and status management.',
    descriptionSr:
      'Zaseban demonstracioni administratorski panel za pregled rezervacija i kontakt poruka, sa pretragom, filterima i upravljanjem statusima.',
    pointsEn: [
      'Booking and message management',
      'Search, filters and status indicators',
      'Browser-local data persistence'
    ],
    pointsSr: [
      'Upravljanje rezervacijama i porukama',
      'Pretraga, filteri i statusi',
      'Čuvanje podataka u localStorage'
    ]
  }
]

export default function AutonovaCaseStudy({ sr }: Props) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const current = slides[active]

  const selectSlide = (index: number) => {
    setActive((index + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!lightbox) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false)
      if (event.key === 'ArrowRight') {
        setActive(value => (value + 1) % slides.length)
      }
      if (event.key === 'ArrowLeft') {
        setActive(value => (value - 1 + slides.length) % slides.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  useEffect(() => {
    if (!lightbox) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [lightbox])

  return (
    <section className="acs" aria-label="AUTONOVA Case Study">
      <div className="acs-topbar">
        <div className="acs-brand">
          <span className="acs-brand-icon">A</span>
          <div>
            <strong>AUTONOVA</strong>
            <small>PROJECT DOCUMENTATION / 2026</small>
          </div>
        </div>
        <span className="acs-topbar-right">
          <span className="acs-status-dot" />
          FRONTEND / INTERACTIVE DEMO
        </span>
      </div>

      <div className="acs-intro">
        <div>
          <span className="acs-eyebrow">
            02 / {sr ? 'DETALJNA ANALIZA PROJEKTA' : 'PROJECT CASE STUDY'}
          </span>
          <h2>
            BUILT FOR
            <br />
            <span>REAL INTERACTION.</span>
          </h2>
        </div>
        <div className="acs-intro-aside">
          <span>THE PROJECT / 001—008</span>
          <p>
            {sr
              ? 'Od prve interakcije do administratorskog panela. Prikaz dizajnerskih i tehničkih odluka iza AUTONOVA koncepta.'
              : 'From the first interaction to the admin dashboard. A closer look at the design and frontend development behind AUTONOVA.'}
          </p>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            {sr ? 'OTVORI SAJT' : 'VISIT LIVE WEBSITE'}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="acs-stats">
        <div><strong>08</strong><span>{sr ? 'SEKCIJA' : 'FEATURES'}</span></div>
        <div><strong>02</strong><span>{sr ? 'INTERFEJSA' : 'INTERFACES'}</span></div>
        <div><strong>04</strong><span>HTML / CSS / JS / STORAGE</span></div>
      </div>

      <div className="acs-workspace">
        <div className="acs-workspace-header">
          <div>
            <span className="acs-eyebrow">INTERACTIVE PROJECT EXPLORER</span>
            <h3>{sr ? 'Istraži projekat.' : 'Explore the build.'}</h3>
          </div>
          <span className="acs-counter">
            {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        <div className="acs-tabs" role="group" aria-label="Project features">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={active === index ? 'is-active' : ''}
              onClick={() => selectSlide(index)}
              aria-pressed={active === index}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {slide.id.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="acs-feature">
          <div className="acs-visual">
            <div className="acs-browser">
              <div className="acs-browser-toolbar">
                <div className="acs-dots"><i /><i /><i /></div>
                <span>
                  <Monitor size={13} />
                  autonova-technical.netlify.app
                </span>
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  aria-label={sr ? 'Uvećaj sliku' : 'Enlarge image'}
                  title={sr ? 'Uvećaj sliku' : 'Enlarge image'}
                >
                  <Maximize2 size={17} />
                </button>
              </div>
              <button
                type="button"
                className="acs-image-button"
                onClick={() => setLightbox(true)}
                aria-label={sr ? 'Uvećaj prikaz' : 'Expand preview'}
              >
                <img
                  key={current.image}
                  src={current.image}
                  alt={sr ? current.titleSr : current.titleEn}
                />
                <span className="acs-image-hint">
                  <Maximize2 size={15} />
                  {sr ? 'UVEĆAJ PRIKAZ' : 'EXPAND PREVIEW'}
                </span>
              </button>
            </div>
            <div className="acs-visual-footer">
              <span>SCREEN_CAPTURE / {current.id.toUpperCase()}</span>
              <div>
                <button type="button" onClick={() => selectSlide(active - 1)} aria-label="Previous">
                  <ArrowLeft size={19} />
                </button>
                <button type="button" onClick={() => selectSlide(active + 1)} aria-label="Next">
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>

          <div className="acs-feature-copy" key={current.id}>
            <span className="acs-eyebrow">
              {sr ? current.subtitleSr : current.subtitleEn}
            </span>
            <h4>{sr ? current.titleSr : current.titleEn}</h4>
            <p>{sr ? current.descriptionSr : current.descriptionEn}</p>
            <div className="acs-checklist">
              {(sr ? current.pointsSr : current.pointsEn).map(point => (
                <div key={point}>
                  <Check size={16} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="acs-feature-bottom">
              <span>DESIGN × DEVELOPMENT</span>
              <button type="button" onClick={() => selectSlide(active + 1)}>
                {sr ? 'SLEDEĆA FUNKCIJA' : 'NEXT FEATURE'}
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="acs-admin">
        <div className="acs-admin-head">
          <span className="acs-eyebrow">
            09 / {sr ? 'IZA SISTEMA' : 'BEHIND THE SYSTEM'}
          </span>
          <div className="acs-admin-grid">
            <div>
              <h3>
                THE ADMIN
                <br />
                <span>SIDE.</span>
              </h3>
            </div>
            <div>
              <p>
                {sr
                  ? 'AUTONOVA ne završava se na korisničkom sajtu. Razvijen je i zaseban demo panel za organizaciju rezervacija i kontakt poruka.'
                  : 'AUTONOVA extends beyond the public website with a separate demo dashboard for organizing appointment requests and contact messages.'}
              </p>
              <a href={adminUrl} target="_blank" rel="noopener noreferrer" className="acs-admin-link">
                {sr ? 'ISTRAŽI ADMIN DEMO' : 'EXPLORE ADMIN DEMO'}
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="acs-admin-preview">
          <div className="acs-browser">
            <div className="acs-browser-toolbar">
              <div className="acs-dots"><i /><i /><i /></div>
              <span><ShieldCheck size={14} /> /admin.html</span>
              <button type="button" onClick={() => {
                setActive(slides.findIndex(s => s.id === 'dashboard'))
                setLightbox(true)
              }} aria-label="Expand dashboard">
                <Maximize2 size={17} />
              </button>
            </div>
            <button
              type="button"
              className="acs-image-button"
              onClick={() => {
                setActive(slides.findIndex(s => s.id === 'dashboard'))
                setLightbox(true)
              }}
            >
              <img src="/images/autonova/dashboard.png" alt="AUTONOVA admin dashboard" />
            </button>
          </div>
        </div>

        <div className="acs-admin-notes">
          <div>
            <strong>01 / BOOKINGS</strong>
            <p>{sr ? 'Pregled i organizacija demonstracionih rezervacija.' : 'Review and organize demonstration bookings.'}</p>
          </div>
          <div>
            <strong>02 / MESSAGES</strong>
            <p>{sr ? 'Pretraga, filtriranje i obrada kontakt poruka.' : 'Search, filter and manage contact messages.'}</p>
          </div>
          <div>
            <strong>03 / LOCAL STORAGE</strong>
            <p>{sr ? 'Podaci ostaju lokalno u istom browseru.' : 'Data persists locally in the same browser.'}</p>
          </div>
        </div>
      </div>

      <div className="acs-technical">
        <div>
          <span className="acs-eyebrow">
            {sr ? 'TEHNIČKI PREGLED' : 'TECHNICAL BREAKDOWN'}
          </span>
          <h3>
            {sr ? 'Dizajn sa funkcijom.' : 'Designed to function.'}
          </h3>
          <p>
            {sr
              ? 'Projekat kombinuje semantički HTML, responzivni CSS i JavaScript za interaktivne komponente, kalkulacije, forme i lokalno upravljanje demonstracionim podacima.'
              : 'The project combines semantic HTML, responsive CSS and JavaScript for interactive components, calculations, forms and browser-local demonstration data management.'}
          </p>
        </div>
        <div className="acs-tech-stack">
          {['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'DOM APIs', 'localStorage'].map(tech => (
            <span key={tech}><Code2 size={14} /> {tech}</span>
          ))}
        </div>
      </div>

      <div className="acs-disclaimer">
        <ShieldCheck size={20} />
        <p>
          {sr
            ? 'AUTONOVA je demonstracioni portfolio projekat. Admin panel nema autentifikaciju ni centralnu bazu podataka. Rezervacije i poruke čuvaju se samo u localStorage browsera, a kalkulator daje informativnu demonstracionu procenu.'
            : 'AUTONOVA is a portfolio demonstration. The admin dashboard has no authentication or central database. Bookings and messages are stored only in browser localStorage, and calculator results are illustrative estimates.'}
        </p>
      </div>

      <div className="acs-end">
        <span>AUTONOVA © 2026 / PROJECT CASE STUDY</span>
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          {sr ? 'POGLEDAJ PROJEKAT' : 'VIEW LIVE PROJECT'}
          <ArrowUpRight size={18} />
        </a>
      </div>

      {lightbox && (
        <div className="acs-lightbox" role="dialog" aria-modal="true" aria-label="Screenshot preview">
          <div className="acs-lightbox-top">
            <span>{current.id.toUpperCase()} / {active + 1} OF {slides.length}</span>
            <button type="button" onClick={() => setLightbox(false)}>
              <X size={21} /> {sr ? 'ZATVORI' : 'CLOSE'}
            </button>
          </div>
          <div className="acs-lightbox-content">
            <button type="button" onClick={() => selectSlide(active - 1)} aria-label="Previous image">
              <ArrowLeft size={24} />
            </button>
            <img src={current.image} alt={sr ? current.titleSr : current.titleEn} />
            <button type="button" onClick={() => selectSlide(active + 1)} aria-label="Next image">
              <ArrowRight size={24} />
            </button>
          </div>
          <div className="acs-lightbox-bottom">
            <span>{sr ? current.titleSr : current.titleEn}</span>
            <span>ESC / ← →</span>
          </div>
        </div>
      )}
    </section>
  )
}
