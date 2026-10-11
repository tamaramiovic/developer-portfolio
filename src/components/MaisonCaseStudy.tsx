
import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Layers3,
  Maximize2,
  Monitor,
  MousePointer2,
  Smartphone,
  X
} from 'lucide-react'
import './MaisonCaseStudy.css'

type Props = {
  sr: boolean
}

type Shot = {
  id: string
  image: string
  labelEn: string
  labelSr: string
}

const images: Shot[] = [
  {
    id: 'hero',
    image: '/images/maison/hero.png',
    labelEn: 'Homepage / Visual storytelling',
    labelSr: 'Početna / Vizuelno pripovedanje'
  },
  {
    id: 'menu',
    image: '/images/maison/menu.png',
    labelEn: 'Menu / Interactive categories',
    labelSr: 'Meni / Interaktivne kategorije'
  },
  {
    id: 'date',
    image: '/images/maison/reservation-date.png',
    labelEn: 'Reservations / Date and time',
    labelSr: 'Rezervacije / Datum i vreme'
  },
  {
    id: 'table',
    image: '/images/maison/reservation-table.png',
    labelEn: 'Reservations / Table selection',
    labelSr: 'Rezervacije / Izbor stola'
  },
  {
    id: 'details',
    image: '/images/maison/reservation-details.png',
    labelEn: 'Reservations / Guest details',
    labelSr: 'Rezervacije / Podaci gosta'
  },
  {
    id: 'footer',
    image: '/images/maison/footer.png',
    labelEn: 'Footer / Brand consistency',
    labelSr: 'Footer / Doslednost brenda'
  }
]

const liveUrl = 'https://maison-fine-dining.netlify.app'

const sections = [
  { id: 'maison-overview', en: 'OVERVIEW', sr: 'PREGLED' },
  { id: 'maison-design', en: 'DESIGN SYSTEM', sr: 'DIZAJN SISTEM' },
  { id: 'maison-features', en: 'FEATURES', sr: 'FUNKCIONALNOSTI' },
  { id: 'maison-reservations', en: 'RESERVATIONS', sr: 'REZERVACIJE' },
  { id: 'maison-development', en: 'DEVELOPMENT', sr: 'RAZVOJ' }
]

function BrowserFrame({
  shot,
  onExpand,
  sr,
  compact = false
}: {
  shot: Shot
  onExpand: () => void
  sr: boolean
  compact?: boolean
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [shot.image])

  return (
    <div className={`mcs-browser ${compact ? 'mcs-browser--compact' : ''}`}>
      <div className="mcs-browser-top">
        <div className="mcs-browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        <span className="mcs-browser-address">
          <span className="mcs-browser-lock">⌁</span>
          maison-fine-dining.netlify.app
        </span>

        <button
          type="button"
          className="mcs-browser-expand"
          onClick={onExpand}
          aria-label={sr ? 'Uvećaj sliku' : 'Expand image'}
          title={sr ? 'Uvećaj sliku' : 'Expand image'}
        >
          <Maximize2 size={15} />
        </button>
      </div>

      <button
        type="button"
        className="mcs-browser-screen"
        onClick={onExpand}
        aria-label={
          sr
            ? `Uvećaj: ${shot.labelSr}`
            : `Expand: ${shot.labelEn}`
        }
      >
        {failed ? (
          <div className="mcs-image-error">
            <Monitor size={30} />
            <strong>
              {sr ? 'Slika nije pronađena' : 'Image not found'}
            </strong>
            <small>{shot.image}</small>
          </div>
        ) : (
          <img
            src={shot.image}
            alt={sr ? shot.labelSr : shot.labelEn}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}

        <span className="mcs-screen-zoom">
          <Maximize2 size={15} />
          {sr ? 'UVEĆAJ PRIKAZ' : 'VIEW FULL SIZE'}
        </span>
      </button>
    </div>
  )
}

function SectionTitle({
  index,
  eyebrow,
  title,
  description
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mcs-section-title">
      <div className="mcs-section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>

      <h3>{title}</h3>

      {description && <p>{description}</p>}
    </div>
  )
}

export default function MaisonCaseStudy({ sr }: Props) {
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)

  const t = (en: string, srText: string) => (sr ? srText : en)

  const closeLightbox = () => setActiveImage(null)

  const nextImage = () => {
    setActiveImage(current =>
      current === null ? 0 : (current + 1) % images.length
    )
  }

  const previousImage = () => {
    setActiveImage(current =>
      current === null
        ? 0
        : (current - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    if (activeImage === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
      if (event.key === 'ArrowRight') {
        setActiveImage(current =>
          current === null ? 0 : (current + 1) % images.length
        )
      }
      if (event.key === 'ArrowLeft') {
        setActiveImage(current =>
          current === null
            ? 0
            : (current - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImage])

  const features = [
    {
      number: '01',
      title: t('Editorial homepage', 'Editorial početna stranica'),
      description: t(
        'A cinematic first impression built around expressive typography, atmospheric photography and a clear reservation call to action.',
        'Upečatljiv prvi utisak kroz izražajnu tipografiju, atmosferičnu fotografiju i jasno istaknut poziv na rezervaciju.'
      ),
      tags: ['Visual hierarchy', 'Hero design', 'Responsive UI'],
      shot: 0
    },
    {
      number: '02',
      title: t('Interactive dining menu', 'Interaktivni meni'),
      description: t(
        'Visitors can browse starters, main courses, desserts and drinks. The menu also provides an allergen filter to help users explore relevant dishes.',
        'Posetioci mogu da pregledaju predjela, glavna jela, deserte i pića. Meni sadrži i filter alergena koji olakšava pronalaženje odgovarajućih jela.'
      ),
      tags: ['React state', 'Filtering', 'UI interactions'],
      shot: 1
    },
    {
      number: '03',
      title: t('Consistent brand experience', 'Dosledan identitet'),
      description: t(
        'The same visual language continues throughout the interface, from navigation and content sections to the final footer.',
        'Isti vizuelni jezik provlači se kroz ceo interfejs, od navigacije i sadržaja do završnog footera.'
      ),
      tags: ['Design system', 'Typography', 'Consistency'],
      shot: 5
    }
  ]

  const bookingSteps = [
    {
      number: '01',
      title: t('Choose your moment.', 'Izaberi termin.'),
      description: t(
        'The first step brings date, party size and preferred time together in a clear interface.',
        'Prvi korak objedinjuje izbor datuma, broja gostiju i željenog termina.'
      ),
      shot: 2
    },
    {
      number: '02',
      title: t('Find your place.', 'Pronađi svoje mesto.'),
      description: t(
        'An interactive floor plan allows users to select a table, with visual states distinguishing available, selected and unavailable options.',
        'Interaktivni plan sale omogućava izbor stola, uz vizuelno razlikovanje dostupnih, izabranih i nedostupnih mesta.'
      ),
      shot: 3
    },
    {
      number: '03',
      title: t('Make it yours.', 'Unesi svoje podatke.'),
      description: t(
        'The final step collects guest information and special requests while displaying a summary of the selected reservation.',
        'Završni korak prikuplja podatke gosta i posebne zahteve, uz pregled izabranog termina i stola.'
      ),
      shot: 4
    }
  ]

  const engineering = [
    {
      icon: <Code2 size={21} />,
      number: '01',
      title: 'React + TypeScript',
      text: t(
        'A component-based frontend structure with typed data and interactive UI states.',
        'Frontend zasnovan na komponentama, tipiziranim podacima i interaktivnim stanjima interfejsa.'
      )
    },
    {
      icon: <MousePointer2 size={21} />,
      number: '02',
      title: t('Interactive logic', 'Interaktivna logika'),
      text: t(
        'Category selection, allergen filtering and multi-step reservation interactions.',
        'Izbor kategorija, filtriranje alergena i interakcije u višekoračnoj rezervaciji.'
      )
    },
    {
      icon: <Smartphone size={21} />,
      number: '03',
      title: 'Responsive UI',
      text: t(
        'Layouts and controls adapted for desktop and smaller screens.',
        'Rasporedi i kontrole prilagođeni desktop i manjim ekranima.'
      )
    },
    {
      icon: <Layers3 size={21} />,
      number: '04',
      title: 'Visual system',
      text: t(
        'Reusable patterns for typography, spacing, colors, buttons and interface feedback.',
        'Dosledni obrasci za tipografiju, razmake, boje, dugmad i povratne informacije interfejsa.'
      )
    }
  ]

  return (
    <div className="mcs" id="maison-case-study">
      <div className="mcs-progress-header">
        <div className="mcs-progress-brand">
          <span className="mcs-progress-symbol">M.</span>
          <div>
            <strong>MAISON</strong>
            <small>FRONTEND CASE STUDY / 2026</small>
          </div>
        </div>

        <button
          type="button"
          className="mcs-mobile-nav-toggle"
          onClick={() => setMobileNav(value => !value)}
          aria-expanded={mobileNav}
        >
          {t('SECTIONS', 'SEKCIJE')}
          <ArrowDown size={14} />
        </button>

        <nav
          className={`mcs-progress-links ${mobileNav ? 'is-open' : ''}`}
          aria-label={t('Case study sections', 'Sekcije projekta')}
        >
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileNav(false)}
            >
              {sr ? section.sr : section.en}
            </a>
          ))}
        </nav>

        <a
          className="mcs-progress-live"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('LIVE SITE', 'OTVORI SAJT')}
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="mcs-cover">
        <div className="mcs-cover-top">
          <span>PROJECT 001 / SELECTED WORK</span>
          <span>REACT · TYPESCRIPT · CSS</span>
        </div>

        <div className="mcs-cover-content">
          <div className="mcs-cover-copy">
            <span className="mcs-overline">
              {t('THE DIGITAL EXPERIENCE', 'DIGITALNO ISKUSTVO')}
            </span>

            <h2>
              More than
              <br />
              <em>a table.</em>
            </h2>

            <p>
              {t(
                'A fictional fine-dining concept transformed into an immersive, interactive website.',
                'Koncept izmišljenog fine-dining restorana pretvoren u upečatljiv, interaktivan sajt.'
              )}
            </p>

            <a href="#maison-overview" className="mcs-cover-explore">
              {t('EXPLORE THE CASE STUDY', 'ISTRAŽI PROJEKAT')}
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="mcs-cover-visual">
            <BrowserFrame
              shot={images[0]}
              onExpand={() => setActiveImage(0)}
              sr={sr}
            />
            <span className="mcs-cover-visual-caption">
              FIG. 01 — MAISON / HOMEPAGE
            </span>
          </div>
        </div>

        <div className="mcs-cover-bottom">
          <span>DESIGN × DEVELOPMENT</span>
          <span>01 — 05</span>
        </div>
      </div>

      <section className="mcs-section mcs-overview" id="maison-overview">
        <SectionTitle
          index="01 / 05"
          eyebrow={t('PROJECT OVERVIEW', 'PREGLED PROJEKTA')}
          title={t(
            'An experience, not just a website.',
            'Iskustvo, ne samo web sajt.'
          )}
          description={t(
            'MAISON explores how editorial design and frontend functionality can work together to create a distinctive digital presence.',
            'MAISON istražuje kako editorial dizajn i frontend funkcionalnosti mogu zajedno da stvore prepoznatljivo digitalno iskustvo.'
          )}
        />

        <div className="mcs-overview-layout">
          <div className="mcs-overview-statement">
            <span className="mcs-overline">
              {t('THE OBJECTIVE', 'CILJ PROJEKTA')}
            </span>

            <p>
              {t(
                'Build a restaurant experience that feels refined and atmospheric, while keeping important actions—exploring the menu and making a reservation—simple to understand.',
                'Kreirati elegantno i atmosferično iskustvo restorana, uz jednostavno korišćenje najvažnijih funkcija: pregleda menija i rezervacije stola.'
              )}
            </p>
          </div>

          <div className="mcs-facts">
            <div>
              <span>{t('PROJECT TYPE', 'TIP PROJEKTA')}</span>
              <strong>Personal / Concept Project</strong>
            </div>
            <div>
              <span>{t('MY ROLE', 'MOJA ULOGA')}</span>
              <strong>Web Design & Frontend Development</strong>
            </div>
            <div>
              <span>{t('TECH STACK', 'TEHNOLOGIJE')}</span>
              <strong>React · TypeScript · CSS</strong>
            </div>
            <div>
              <span>{t('DELIVERABLE', 'REZULTAT')}</span>
              <strong>Responsive Interactive Website</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="mcs-section mcs-design" id="maison-design">
        <SectionTitle
          index="02 / 05"
          eyebrow={t('VISUAL DIRECTION', 'VIZUELNI PRAVAC')}
          title={t(
            'A distinct visual language.',
            'Prepoznatljiv vizuelni jezik.'
          )}
          description={t(
            'Deep wine tones, warm ivory, expressive serif typography and restrained interface details create the MAISON identity.',
            'Duboki bordo tonovi, topla ivory nijansa, izražajna serifna tipografija i suptilni detalji interfejsa grade identitet MAISON projekta.'
          )}
        />

        <div className="mcs-design-layout">
          <div className="mcs-palette">
            <div className="mcs-card-heading">
              <span>01 / COLOR SYSTEM</span>
              <span>04 COLORS</span>
            </div>

            <div className="mcs-swatches">
              {[
                { color: '#2A151C', name: 'DEEP PLUM' },
                { color: '#4B1C2B', name: 'WINE' },
                { color: '#F2E2D3', name: 'IVORY' },
                { color: '#C29A86', name: 'ROSE' }
              ].map(item => (
                <div key={item.name}>
                  <div
                    className="mcs-swatch"
                    style={{ background: item.color }}
                  />
                  <strong>{item.name}</strong>
                  <small>{item.color}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="mcs-type">
            <div className="mcs-card-heading">
              <span>02 / TYPOGRAPHY</span>
              <span>EDITORIAL</span>
            </div>

            <div className="mcs-type-display">
              Aa<span>.</span>
            </div>

            <p>
              {t(
                'Expressive serif headlines paired with clean, functional interface typography.',
                'Izražajni serifni naslovi u kombinaciji sa čistom, funkcionalnom tipografijom interfejsa.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="mcs-section mcs-features" id="maison-features">
        <SectionTitle
          index="03 / 05"
          eyebrow={t('INTERACTIVE EXPERIENCE', 'INTERAKTIVNO ISKUSTVO')}
          title={t(
            'Designed to be explored.',
            'Dizajniran za istraživanje.'
          )}
          description={t(
            'Choose a feature to explore the interface and the thinking behind it.',
            'Izaberi funkcionalnost i pogledaj kako izgleda i šta omogućava.'
          )}
        />

        <div className="mcs-feature-layout">
          <div className="mcs-feature-list">
            {features.map((feature, index) => (
              <button
                type="button"
                key={feature.number}
                className={`mcs-feature-item ${
                  activeFeature === index ? 'is-active' : ''
                }`}
                onClick={() => setActiveFeature(index)}
                aria-pressed={activeFeature === index}
              >
                <span className="mcs-feature-index">
                  {feature.number}
                </span>

                <span className="mcs-feature-info">
                  <strong>{feature.title}</strong>

                  {activeFeature === index && (
                    <>
                      <span className="mcs-feature-description">
                        {feature.description}
                      </span>

                      <span className="mcs-tag-row">
                        {feature.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </span>
                    </>
                  )}
                </span>

                <ArrowUpRight size={18} />
              </button>
            ))}
          </div>

          <div className="mcs-feature-preview">
            <div className="mcs-preview-meta">
              <span>
                FIG. 0{activeFeature + 1} / INTERFACE
              </span>
              <span>
                {t('CLICK TO EXPAND', 'KLIKNI ZA UVEĆANJE')}
              </span>
            </div>

            <BrowserFrame
              shot={images[features[activeFeature].shot]}
              onExpand={() =>
                setActiveImage(features[activeFeature].shot)
              }
              sr={sr}
            />

            <div className="mcs-preview-footer">
              <span>{features[activeFeature].title}</span>
              <span>
                {String(activeFeature + 1).padStart(2, '0')} / 03
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mcs-reservations"
        id="maison-reservations"
      >
        <div className="mcs-reservations-intro">
          <SectionTitle
            index="04 / 05"
            eyebrow={t('USER JOURNEY', 'KORISNIČKO PUTOVANJE')}
            title={t(
              'A reservation, in three steps.',
              'Rezervacija u tri koraka.'
            )}
            description={t(
              'A guided booking interface that breaks a complex task into manageable decisions.',
              'Vođen proces rezervacije koji složen zadatak deli na jednostavne korake.'
            )}
          />

          <div className="mcs-demo-indicator">
            <span className="mcs-demo-dot" />
            {t(
              'INTERACTIVE FRONTEND DEMONSTRATION',
              'INTERAKTIVNA FRONTEND DEMONSTRACIJA'
            )}
          </div>
        </div>

        <div className="mcs-booking-layout">
          <div className="mcs-booking-sidebar">
            <span className="mcs-overline">
              {t('THE BOOKING FLOW', 'TOK REZERVACIJE')}
            </span>

            <div className="mcs-booking-steps">
              {bookingSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.number}
                  className={`mcs-booking-step ${
                    activeStep === index ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={activeStep === index}
                >
                  <span className="mcs-booking-number">
                    {activeStep > index ? (
                      <Check size={16} />
                    ) : (
                      step.number
                    )}
                  </span>

                  <span>
                    <small>
                      STEP {step.number} / 03
                    </small>
                    <strong>{step.title}</strong>
                  </span>

                  <ChevronRight size={18} />
                </button>
              ))}
            </div>

            <p className="mcs-booking-description">
              {bookingSteps[activeStep].description}
            </p>

            <div className="mcs-booking-controls">
              <button
                type="button"
                onClick={() =>
                  setActiveStep(current => Math.max(0, current - 1))
                }
                disabled={activeStep === 0}
                aria-label={t('Previous step', 'Prethodni korak')}
              >
                <ArrowLeft size={18} />
              </button>

              <span>
                {String(activeStep + 1).padStart(2, '0')} / 03
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveStep(current => Math.min(2, current + 1))
                }
                disabled={activeStep === 2}
                aria-label={t('Next step', 'Sledeći korak')}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="mcs-booking-preview">
            <div className="mcs-preview-meta mcs-preview-meta--light">
              <span>
                RESERVATION FLOW / STEP {bookingSteps[activeStep].number}
              </span>
              <span>MAISON EXPERIENCE</span>
            </div>

            <BrowserFrame
              shot={images[bookingSteps[activeStep].shot]}
              onExpand={() =>
                setActiveImage(bookingSteps[activeStep].shot)
              }
              sr={sr}
            />

            <div className="mcs-booking-preview-bottom">
              <span>{bookingSteps[activeStep].title}</span>

              <button
                type="button"
                onClick={() =>
                  setActiveImage(bookingSteps[activeStep].shot)
                }
              >
                {t('EXPAND SCREEN', 'UVEĆAJ EKRAN')}
                <Maximize2 size={15} />
              </button>
            </div>
          </div>
        </div>

        <p className="mcs-reservation-disclaimer">
          {t(
            'MAISON is a fictional portfolio project. The reservation experience is for demonstration purposes and does not create real restaurant bookings.',
            'MAISON je izmišljeni portfolio projekat. Sistem rezervacija služi za demonstraciju i ne kreira stvarne rezervacije restorana.'
          )}
        </p>
      </section>

      <section
        className="mcs-section mcs-development"
        id="maison-development"
      >
        <SectionTitle
          index="05 / 05"
          eyebrow={t('FRONTEND DEVELOPMENT', 'FRONTEND RAZVOJ')}
          title={t(
            'The code behind the experience.',
            'Kod iza korisničkog iskustva.'
          )}
          description={t(
            'The project combines interface design with practical frontend implementation and interactive behavior.',
            'Projekat spaja dizajn interfejsa sa praktičnom frontend implementacijom i interaktivnim ponašanjem.'
          )}
        />

        <div className="mcs-engineering-grid">
          {engineering.map(item => (
            <div className="mcs-engineering-card" key={item.number}>
              <div className="mcs-engineering-top">
                {item.icon}
                <span>{item.number} / 04</span>
              </div>

              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mcs-tech-stack">
          <span>TECHNOLOGY STACK</span>

          <div>
            {['React', 'TypeScript', 'CSS', 'Responsive Design'].map(
              tech => <span key={tech}>{tech}</span>
            )}
          </div>
        </div>
      </section>

      <div className="mcs-outro">
        <div className="mcs-outro-top">
          <span>END OF CASE STUDY</span>
          <span>PROJECT 001 / 2026</span>
        </div>

        <span className="mcs-overline">
          {t('SEE IT IN ACTION', 'POGLEDAJ KAKO RADI')}
        </span>

        <h2>
          Explore
          <br />
          <em>MAISON.</em>
        </h2>

        <p>
          {t(
            'The full interactive experience is available on the live website.',
            'Kompletno interaktivno iskustvo dostupno je na objavljenom sajtu.'
          )}
        </p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mcs-outro-button"
        >
          {t('VISIT LIVE WEBSITE', 'OTVORI SAJT')}
          <ExternalLink size={19} />
        </a>

        <div className="mcs-outro-bottom">
          <span>MAISON / FRONTEND CASE STUDY</span>
          <span>DESIGNED & DEVELOPED BY TAMARA MIOVIĆ</span>
        </div>
      </div>

      {activeImage !== null && (
        <div
          className="mcs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t('Image viewer', 'Pregled slike')}
          onMouseDown={event => {
            if (event.target === event.currentTarget) {
              closeLightbox()
            }
          }}
        >
          <div className="mcs-lightbox-header">
            <div>
              <span>MAISON / IMAGE VIEWER</span>
              <strong>
                {sr
                  ? images[activeImage].labelSr
                  : images[activeImage].labelEn}
              </strong>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={t('Close image', 'Zatvori sliku')}
            >
              <X size={22} />
            </button>
          </div>

          <div className="mcs-lightbox-content">
            <button
              type="button"
              className="mcs-lightbox-arrow"
              onClick={previousImage}
              aria-label={t('Previous image', 'Prethodna slika')}
            >
              <ChevronLeft size={25} />
            </button>

            <img
              key={images[activeImage].image}
              src={images[activeImage].image}
              alt={
                sr
                  ? images[activeImage].labelSr
                  : images[activeImage].labelEn
              }
            />

            <button
              type="button"
              className="mcs-lightbox-arrow"
              onClick={nextImage}
              aria-label={t('Next image', 'Sledeća slika')}
            >
              <ChevronRight size={25} />
            </button>
          </div>

          <div className="mcs-lightbox-footer">
            <span>
              {String(activeImage + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>

            <span>
              {t(
                'USE ARROW KEYS TO NAVIGATE · ESC TO CLOSE',
                'KORISTI STRELICE ZA PREGLED · ESC ZA ZATVARANJE'
              )}
            </span>

            <a
              href={images[activeImage].image}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('OPEN ORIGINAL', 'OTVORI ORIGINAL')}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
