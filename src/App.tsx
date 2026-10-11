import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Mail, Code2, Monitor, Terminal, ChevronUp, ShieldAlert, Check, GitBranch, Palette } from 'lucide-react'

import Header from './components/Header'

import MaisonCaseStudy from './components/MaisonCaseStudy'

import AutonovaCaseStudy from './components/AutonovaCaseStudy'

import IntimaCaseStudy from './components/IntimaCaseStudy'

import WeddingCaseStudy from './components/WeddingCaseStudy'

import './App.css'

type Project = {

  id: string

  number: string

  name: string

  typeEn: string

  typeSr: string

  descriptionEn: string

  descriptionSr: string

  overviewEn: string

  overviewSr: string

  featuresEn: string[]

  featuresSr: string[]

  technologies: string[]

  url: string

  mobileScreenshot?: string

  roleEn: string

  roleSr: string

  challengeEn: string

  challengeSr: string

  solutionEn: string

  solutionSr: string

  category: 'frontend' | 'web' | 'commerce' | 'experience'

}

const projects: Project[] = [

  {

    id: 'maison',

    number: '01',

    name: 'MAISON',

    typeEn: 'Fine dining · Frontend development',

    typeSr: 'Restoran · Frontend razvoj',

    descriptionEn:

      'An immersive fine-dining website built with React and TypeScript, combining editorial design with responsive frontend development.',

    descriptionSr:

      'Interaktivni sajt fine-dining restorana izrađen uz React i TypeScript, sa fokusom na editorial dizajn i responzivan frontend.',

    overviewEn:

      'MAISON is a fictional fine-dining concept created as a frontend portfolio project. The website explores how typography, imagery, layout and interactive components can create a cohesive digital brand experience.',

    overviewSr:

      'MAISON je koncept izmišljenog fine-dining restorana koji sam razvila kao frontend portfolio projekat. Sajt prikazuje kako tipografija, fotografije, raspored i interaktivne komponente mogu da izgrade celovito digitalno iskustvo.',

    featuresEn: [

      'React component-based interface',

      'Responsive desktop and mobile layouts',

      'Editorial visual design and typography',

      'Interactive navigation and transitions',

      'Demonstration reservation interface'

    ],

    featuresSr: [

      'Interfejs zasnovan na React komponentama',

      'Responzivan desktop i mobilni prikaz',

      'Editorial vizuelni dizajn i tipografija',

      'Interaktivna navigacija i prelazi',

      'Demonstracioni interfejs za rezervacije'

    ],

    technologies: ['React', 'TypeScript', 'CSS', 'HTML'],

    url: 'https://maison-fine-dining.netlify.app',

    roleEn: 'Concept, UI design and frontend development',

    roleSr: 'Koncept, UI dizajn i frontend razvoj',

    challengeEn:

      'Creating a distinctive restaurant identity while keeping the interface clear and usable across screen sizes.',

    challengeSr:

      'Kreiranje prepoznatljivog identiteta restorana uz pregledan interfejs na različitim veličinama ekrana.',

    solutionEn:

      'A component-based interface with a consistent visual system, responsive layouts and carefully selected interactive details.',

    solutionSr:

      'Interfejs zasnovan na komponentama, doslednom vizuelnom sistemu, responzivnom rasporedu i pažljivo odabranim interakcijama.',

    category: 'frontend'

  },

  {

    id: 'autonova',

    number: '02',

    name: 'AUTONOVA',

    typeEn: 'Automotive · Web development',

    typeSr: 'Automobilska industrija · Web razvoj',

    descriptionEn:

      'A contemporary automotive service website developed with HTML, CSS and JavaScript, focused on practical functionality and clear navigation.',

    descriptionSr:

      'Savremen sajt za usluge tehničkog pregleda izrađen uz HTML, CSS i JavaScript, sa fokusom na funkcionalnost i preglednu navigaciju.',

    overviewEn:

      'AUTONOVA is a technical inspection website concept developed with core web technologies. It combines service presentation, practical user journeys and demonstration functionality.',

    overviewSr:

      'AUTONOVA je koncept sajta za tehnički pregled vozila izrađen korišćenjem osnovnih web tehnologija. Objedinjuje predstavljanje usluga, korisničke tokove i demonstracione funkcionalnosti.',

    featuresEn: [

      'Semantic HTML and responsive CSS',

      'JavaScript-driven interactions',

      'Service and registration information',

      'Demonstration administration interface',

      'LocalStorage-based demo data'

    ],

    featuresSr: [

      'Semantički HTML i responzivni CSS',

      'Interakcije razvijene u JavaScriptu',

      'Informacije o uslugama i registraciji',

      'Demonstracioni administratorski interfejs',

      'Demo podaci sačuvani u LocalStorage-u'

    ],

    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],

    url: 'https://autonova-technical.netlify.app',

    roleEn: 'Web design, frontend development and demo functionality',

    roleSr: 'Web dizajn, frontend razvoj i demo funkcionalnosti',

    challengeEn:

      'Presenting several automotive services without making the website feel complicated or difficult to navigate.',

    challengeSr:

      'Prikaz više automobilskih usluga bez komplikovanog interfejsa i otežane navigacije.',

    solutionEn:

      'Clear content hierarchy, prominent user actions and JavaScript interactions that support the demonstration workflow.',

    solutionSr:

      'Jasna hijerarhija sadržaja, istaknute korisničke akcije i JavaScript interakcije koje podržavaju demonstracioni rad sajta.',

    category: 'web'

  },

  {

    id: 'intima',

    number: '03',

    name: 'INTIMA BELLISSIMA',

    typeEn: 'E-commerce · Real business',

    typeSr: 'Online prodavnica · Stvaran biznis',

    descriptionEn:

      'A real lingerie e-commerce website built with WordPress, Elementor and WooCommerce, designed around product discovery and online shopping.',

    descriptionSr:

      'Stvarna online prodavnica donjeg veša izrađena uz WordPress, Elementor i WooCommerce, sa fokusom na pregled proizvoda i online kupovinu.',

    overviewEn:

      'INTIMA BELLISSIMA is an online store for an existing lingerie boutique. The project covers visual presentation, product organization, variations and the customer shopping experience.',

    overviewSr:

      'INTIMA BELLISSIMA je online prodavnica postojeće radnje donjeg veša. Projekat obuhvata vizuelnu prezentaciju, organizaciju proizvoda, varijacije artikala i korisničko iskustvo kupovine.',

    featuresEn: [

      'WooCommerce product catalogue',

      'Product categories and filtering',

      'Sizes, colors and product variations',

      'Cart and checkout experience',

      'Responsive e-commerce interface'

    ],

    featuresSr: [

      'WooCommerce katalog proizvoda',

      'Kategorije i filtriranje proizvoda',

      'Veličine, boje i varijacije artikala',

      'Korpa i proces poručivanja',

      'Responzivan interfejs online prodavnice'

    ],

    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'CSS'],

    url: 'https://intimabellissima.com',

    mobileScreenshot: '/images/intima-mobile.png',

    roleEn: 'Web design, website setup and e-commerce implementation',

    roleSr: 'Web dizajn, postavljanje sajta i e-commerce implementacija',

    challengeEn:

      'Making a growing product catalogue easy to browse while keeping the boutique visual identity consistent.',

    challengeSr:

      'Organizacija rastućeg kataloga proizvoda uz jednostavnu kupovinu i dosledan vizuelni identitet.',

    solutionEn:

      'Structured product categories, product variations and a mobile-friendly shopping flow built with WooCommerce.',

    solutionSr:

      'Organizovane kategorije, varijacije proizvoda i proces kupovine prilagođen telefonu uz WooCommerce.',

    category: 'commerce'

  },

  {

    id: 'wedding',

    number: '04',

    name: 'VLADIMIR & VEDRANA',

    typeEn: 'Interactive invitation · Real client',

    typeSr: 'Digitalna pozivnica · Stvaran klijent',

    descriptionEn:

      'An interactive wedding invitation featuring an animated envelope, music, event details, location and RSVP functionality.',

    descriptionSr:

      'Interaktivna pozivnica za venčanje sa animiranom kovertom, muzikom, informacijama o događaju, mapom i RSVP formom.',

    overviewEn:

      'A personalized mobile-first wedding invitation developed in WordPress for a real celebration. The experience transforms a traditional invitation into an interactive website.',

    overviewSr:

      'Personalizovana digitalna pozivnica izrađena u WordPressu za stvarno venčanje. Mobilno iskustvo pretvara klasičnu pozivnicu u interaktivan sajt.',

    featuresEn: [

      'Interactive envelope and wax seal',

      'Animated content and music',

      'Wedding schedule and location',

      'Map integration',

      'RSVP form with email notifications'

    ],

    featuresSr: [

      'Interaktivna koverta i pečat',

      'Animirani sadržaj i muzika',

      'Raspored venčanja i lokacija',

      'Integracija mape',

      'RSVP forma sa mejl obaveštenjima'

    ],

    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],

    url: 'https://vladimir-vedrana.com',

    roleEn: 'Concept, interactive design and WordPress implementation',

    roleSr: 'Koncept, interaktivni dizajn i WordPress implementacija',

    challengeEn:

      'Creating an elegant invitation that feels personal while keeping event information and guest responses easy to access.',

    challengeSr:

      'Kreiranje elegantne, personalizovane pozivnice uz jednostavan pristup informacijama i potvrdi dolaska.',

    solutionEn:

      'A mobile-first invitation with an animated opening, structured event sections, map access and integrated RSVP.',

    solutionSr:

      'Mobilna pozivnica sa animiranim otvaranjem, preglednim informacijama, mapom i integrisanom RSVP formom.',

    category: 'experience'

  }

]

const email = 'miovictamara123@gmail.com'

function TechIcon({ name, size = 'normal' }: { name: string; size?: 'normal' | 'large' }) {
  const logos: Record<string, string> = {
    HTML: 'html5/html5-original.svg',
    CSS: 'css3/css3-original.svg',
    JavaScript: 'javascript/javascript-original.svg',
    TypeScript: 'typescript/typescript-original.svg',
    React: 'react/react-original.svg',
    WordPress: 'wordpress/wordpress-original.svg',
    WooCommerce: 'woocommerce/woocommerce-original.svg',
    Git: 'git/git-original.svg',
    Figma: 'figma/figma-original.svg',
    Photoshop: 'photoshop/photoshop-original.svg',
    Illustrator: 'illustrator/illustrator-original.svg',
    'VS Code': 'vscode/vscode-original.svg'
  }

  const [imageFailed, setImageFailed] = useState(false)
  const logo = logos[name]

  return (
    <span
      className={`tm-tech-icon tm-tech-icon--${size} tm-tech-icon--${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      aria-label={`${name} logo`}
      role="img"
    >
      <span className="tm-tech-icon__glow" aria-hidden="true" />
      {name === 'Elementor' ? (
        <svg className="tm-tech-icon__brand" viewBox="0 0 48 48" aria-hidden="true">
          <rect width="48" height="48" rx="12" fill="#92003B" />
          <rect x="12" y="12" width="5" height="24" rx="1" fill="#fff" />
          <rect x="22" y="12" width="14" height="4.5" rx="1" fill="#fff" />
          <rect x="22" y="21.75" width="14" height="4.5" rx="1" fill="#fff" />
          <rect x="22" y="31.5" width="14" height="4.5" rx="1" fill="#fff" />
        </svg>
      ) : logo && !imageFailed ? (
        <img
          className="tm-tech-icon__brand"
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}`}
          alt=""
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : name === 'LocalStorage' ? (
        <svg className="tm-tech-icon__brand" viewBox="0 0 48 48" aria-hidden="true">
          <rect x="8" y="9" width="32" height="30" rx="6" fill="#668575" />
          <rect x="14" y="15" width="20" height="4" rx="2" fill="#fff" />
          <rect x="14" y="23" width="20" height="4" rx="2" fill="#fff" />
          <rect x="14" y="31" width="12" height="3" rx="1.5" fill="#fff" />
        </svg>
      ) : (
        <span className="tm-tech-icon__fallback" aria-hidden="true">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  )
}

function useElementWidth(initialWidth: number) {

  const ref = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(initialWidth)

  useEffect(() => {

    const element = ref.current

    if (!element) return

    const update = () => setWidth(element.clientWidth)

    update()

    const observer = new ResizeObserver(update)

    observer.observe(element)

    return () => observer.disconnect()

  }, [])

  return { ref, width }

}

function LivePhone({ project }: { project: Project }) {

  const { ref, width } = useElementWidth(170)

  const scale = width / 390

  return (

    <div className="preview-phone">

      <div className="preview-phone-frame">

        <div className="preview-phone-screen" ref={ref}>

          {project.mobileScreenshot ? (

            <img

              src={project.mobileScreenshot}

              alt={`${project.name} mobile preview`}

              loading="lazy"

            />

          ) : (

            <iframe

              title={`${project.name} mobile preview`}

              src={project.url}

              loading="lazy"

              tabIndex={-1}

              scrolling="no"

              style={{

                position: 'absolute',

                top: 0,

                left: 0,

                width: 390,

                height: 844,

                border: 0,

                display: 'block',

                transform: `scale(${scale})`,

                transformOrigin: 'top left',

                pointerEvents: 'none'

              }}

            />

          )}

        </div>

      </div>

    </div>

  )

}

function ProjectPreview({ project }: { project: Project }) {

  const { ref, width } = useElementWidth(1100)

  const scale = width / 1280

  return (

    <div className={`project-stage project-stage--${project.id}`}>

      <span className="stage-corner">TM / PROJECT PREVIEW</span>

      <div className="preview-desktop">

        <div className="preview-desktop-bar">

          <span className="preview-dots">

            <i />

            <i />

            <i />

          </span>

          <span className="preview-address">

            {project.url.replace('https://', '')}

          </span>

          <ExternalLink size={14} />

        </div>

        <div className="preview-desktop-screen" ref={ref}>

          <iframe

            title={`${project.name} desktop preview`}

            src={project.url}

            loading="lazy"

            scrolling="no"

            tabIndex={-1}

            style={{

              width: 1280,

              height: 720,

              transform: `scale(${scale})`,

              transformOrigin: 'top left'

            }}

          />

        </div>

      </div>

      <LivePhone project={project} />

      <div className="preview-stage-label">

        <span>DESKTOP / MOBILE PREVIEW</span>

        <span>TM. DIGITAL PRACTICE</span>

      </div>

    </div>

  )

}

function ProjectSection({

  project,

  sr,

  nextProject

}: {

  project: Project

  sr: boolean

  nextProject?: Project

}) {

  const [expanded, setExpanded] = useState(false)

  const detailsId = `details-${project.id}`

  const toggle = () => setExpanded(value => !value)

  const openNext = () => {

    if (!nextProject) return

    document

      .getElementById(`project-${nextProject.id}`)

      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  }

  return (

    <article

      id={`project-${project.id}`}

      className={`project-section project-section--${project.id}`}

    >

      <div className="project-topline">

        <span>{project.number} / 04</span>

        <span>{sr ? project.typeSr : project.typeEn}</span>

        <span>{project.technologies.slice(0, 3).join(' · ')}</span>

      </div>

      <ProjectPreview project={project} />

      <div className="project-description reveal-on-scroll">

        <div className="project-description-copy">

          <span className="eyebrow">

            {sr ? 'IZDVOJENI PROJEKAT' : 'FEATURED PROJECT'}

            {' / '}

            {project.number}

          </span>

          <h3>{project.name}</h3>

          <p>

            {sr ? project.descriptionSr : project.descriptionEn}

          </p>

          <div className="tm-project-tech">

            {project.technologies.map(tech => (

              <span key={tech}>

                <TechIcon name={tech} />

                {tech}

              </span>

            ))}

          </div>

        </div>

        <div className="project-actions">

          <button

            type="button"

            className="text-action"

            onClick={toggle}

            aria-expanded={expanded}

            aria-controls={detailsId}

          >

            {expanded

              ? sr ? 'ZATVORI DETALJE' : 'CLOSE DETAILS'

              : sr ? 'ISTRAŽI PROJEKAT' : 'EXPLORE PROJECT'}

            {expanded

              ? <ChevronUp size={19} />

              : <ArrowUpRight size={19} />}

          </button>

          <a

            href={project.url}

            target="_blank"

            rel="noopener noreferrer"

            className="text-action text-action--secondary"

          >

            {sr ? 'OTVORI SAJT' : 'OPEN LIVE SITE'}

            <ExternalLink size={17} />

          </a>

        </div>

      </div>

      {project.id === 'wedding' && (

        <div className="tm-rsvp-alert">

          <ShieldAlert size={22} strokeWidth={1.6} />

          <div>

            <strong>

              {sr

                ? 'PRIVATNA POZIVNICA — VAŽNA NAPOMENA'

                : 'PRIVATE INVITATION — IMPORTANT NOTICE'}

            </strong>

            <p>

              {sr

                ? 'Ovaj projekat prikazuje stvarnu pozivnicu. Možete istražiti dizajn i animacije, ali nemojte popunjavati RSVP formu jer potvrde direktno stižu mladencima.'

                : 'This is a real wedding invitation. Feel free to explore the design and animations, but please do not submit the RSVP form — responses go directly to the couple.'}

            </p>

          </div>

        </div>

      )}

      {expanded && (

        <div id={detailsId} className="tm-expanded-project">

          <div className="tm-case-summary">

            <div>

              <span className="tm-mini-label">

                01 / PROJECT OVERVIEW

              </span>

              <h4>

                {sr ? 'Od ideje do realizacije.' : 'From idea to execution.'}

              </h4>

              <p>

                {sr ? project.overviewSr : project.overviewEn}

              </p>

            </div>

            <div className="tm-role-panel">

              <span className="tm-mini-label">

                {sr ? 'MOJA ULOGA' : 'MY ROLE'}

              </span>

              <strong>

                {sr ? project.roleSr : project.roleEn}

              </strong>

              <span className="tm-mini-label">

                {sr ? 'TIP PROJEKTA' : 'PROJECT TYPE'}

              </span>

              <strong>

                {sr ? project.typeSr : project.typeEn}

              </strong>

            </div>

          </div>

          <div className="tm-case-tech">

            <div className="tm-case-section-head">

              <span className="tm-mini-label">02 / TECH STACK</span>

              <h4>

                {sr

                  ? 'Tehnologije i alati.'

                  : 'Technologies & tools.'}

              </h4>

            </div>

            <div className="tm-case-tech-grid">

              {project.technologies.map(tech => (

                <div className="tm-case-tech-item" key={tech}>

                  <TechIcon name={tech} size="large" />

                  <strong>{tech}</strong>

                </div>

              ))}

            </div>

          </div>

          <div className="tm-case-process">

            <div className="tm-case-process-card">

              <span className="tm-mini-label">03 / THE CHALLENGE</span>

              <h4>

                {sr ? 'Izazov.' : 'The challenge.'}

              </h4>

              <p>

                {sr ? project.challengeSr : project.challengeEn}

              </p>

            </div>

            <div className="tm-case-process-card">

              <span className="tm-mini-label">04 / THE APPROACH</span>

              <h4>

                {sr ? 'Rešenje.' : 'The approach.'}

              </h4>

              <p>

                {sr ? project.solutionSr : project.solutionEn}

              </p>

            </div>

          </div>

          <div className="tm-case-features">

            <div className="tm-case-section-head">

              <span className="tm-mini-label">05 / KEY FEATURES</span>

              <h4>

                {sr

                  ? 'Šta sam implementirala.'

                  : 'What I implemented.'}

              </h4>

            </div>

            <div className="tm-features-list">

              {(sr ? project.featuresSr : project.featuresEn)

                .map((feature, index) => (

                  <div key={feature}>

                    <span>

                      {String(index + 1).padStart(2, '0')}

                    </span>

                    <strong>{feature}</strong>

                    <Check size={18} />

                  </div>

                ))}

            </div>

          </div>

          <div className="tm-case-original">

            <div className="tm-case-section-head">

              <span className="tm-mini-label">

                06 / PROJECT EXPERIENCE

              </span>

              <h4>

                {sr

                  ? 'Istraži kompletan projekat.'

                  : 'Explore the complete project.'}

              </h4>

            </div>

            {project.id === 'maison' ? (

              <MaisonCaseStudy sr={sr} />

            ) : project.id === 'autonova' ? (

              <AutonovaCaseStudy sr={sr} />

            ) : project.id === 'intima' ? (

              <IntimaCaseStudy sr={sr} />

            ) : (

              <WeddingCaseStudy sr={sr} />

            )}

          </div>

          <div className="tm-project-bottom">

            <button

              type="button"

              onClick={toggle}

              className="tm-bottom-button"

            >

              <ChevronUp size={17} />

              {sr ? 'ZATVORI PROJEKAT' : 'CLOSE PROJECT'}

            </button>

            {nextProject ? (

              <button

                type="button"

                className="tm-next-project"

                onClick={openNext}

              >

                <span>

                  {sr ? 'SLEDEĆI PROJEKAT' : 'NEXT PROJECT'}

                  <strong>{nextProject.name}</strong>

                </span>

                <ArrowUpRight size={24} />

              </button>

            ) : (

              <a className="tm-next-project" href="#contact">

                <span>

                  {sr ? 'IMAŠ PROJEKAT?' : 'HAVE A PROJECT?'}

                  <strong>

                    {sr ? 'HAJDE DA SARAĐUJEMO' : "LET'S WORK TOGETHER"}

                  </strong>

                </span>

                <ArrowUpRight size={24} />

              </a>

            )}

          </div>

        </div>

      )}

    </article>

  )

}

const codeLines = [

  "import { design, develop } from './studio'",

  '',

  'const portfolio = {',

  "  name: 'Tamara Miović',",

  "  focus: ['Design', 'Frontend'],",

  "  stack: ['React', 'TypeScript', 'CSS'],",

  '  responsive: true,',

  "  approach: 'Purpose meets detail'",

  '}',

  '',

  'export default portfolio'

]

function CodeWindow() {

  const [visibleLines, setVisibleLines] = useState(0)

  const [started, setStarted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const element = containerRef.current

    if (!element) return

    const observer = new IntersectionObserver(

      entries => {

        if (entries[0].isIntersecting) {

          setStarted(true)

          observer.disconnect()

        }

      },

      { threshold: 0.2 }

    )

    observer.observe(element)

    return () => observer.disconnect()

  }, [])

  useEffect(() => {

    if (!started || visibleLines >= codeLines.length) return

    const timer = window.setTimeout(() => {

      setVisibleLines(value => value + 1)

    }, 140)

    return () => window.clearTimeout(timer)

  }, [started, visibleLines])

  return (

    <div className="code-window" ref={containerRef}>

      <div className="code-window-top">

        <span className="code-dots">

          <i /><i /><i />

        </span>

        <span>portfolio.ts</span>

        <Terminal size={16} />

      </div>

      <div className="code-window-body">

        {codeLines.slice(0, visibleLines).map((line, index) => (

          <div className="code-line" key={index}>

            <span className="code-line-number">

              {String(index + 1).padStart(2, '0')}

            </span>

            <code>{line || '\u00a0'}</code>

          </div>

        ))}

        <span className="code-cursor" />

      </div>

      <div className="code-window-bottom">

        <span>● READY TO BUILD</span>

        <span>UTF-8 / TS</span>

      </div>

    </div>

  )

}

function HeroTerminal({ sr }: { sr: boolean }) {

  const [text, setText] = useState('')

  const message = sr

    ? 'const ideja = dizajn + kod;'

    : 'const idea = design + code;'

  useEffect(() => {

    setText('')

    let position = 0

    const timer = window.setInterval(() => {

      position += 1

      setText(message.slice(0, position))

      if (position >= message.length) {

        window.clearInterval(timer)

      }

    }, 65)

    return () => window.clearInterval(timer)

  }, [message])

  return (

    <div className="hero-terminal">

      <span className="terminal-prompt">&gt;</span>

      <span>{text}</span>

      <span className="terminal-caret" />

    </div>

  )

}

const skillGroups = [

  {

    number: '01',

    title: 'Frontend Development',

    icon: Code2,

    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']

  },

  {

    number: '02',

    title: 'CMS & E-commerce',

    icon: Monitor,

    items: ['WordPress', 'Elementor', 'WooCommerce']

  },

  {

    number: '03',

    title: 'Design & Workflow',

    icon: Palette,

    items: ['Figma', 'Photoshop', 'Illustrator', 'VS Code', 'Git']

  }

]

export default function App() {

  const { i18n } = useTranslation()

  const sr = i18n.language.toLowerCase().startsWith('sr')

  useEffect(() => {

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add('is-visible')

            observer.unobserve(entry.target)

          }

        })

      },

      { threshold: 0.08 }

    )

    document

      .querySelectorAll('.reveal-on-scroll')

      .forEach(element => observer.observe(element))

    return () => observer.disconnect()

  }, [])

  return (

    <>

      <Header />

      <main>

        <section className="portfolio-hero" id="home">

          <div className="hero-background" aria-hidden="true" />

          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-topline">

            <span>TM® / DIGITAL PORTFOLIO</span>

            <span>DESIGN / DEVELOPMENT / DIGITAL</span>

          </div>

          <div className="hero-inner">

            <div className="hero-copy">

              <div className="hero-intro">

                <span className="intro-line" />

                {sr

                  ? 'ZDRAVO, JA SAM TAMARA MIOVIĆ'

                  : "HELLO, I'M TAMARA MIOVIĆ"}

              </div>

              <h1>

                <span>{sr ? 'DIZAJN.' : 'DESIGN.'}</span>

                <span className="hero-highlight">

                  {sr ? 'RAZVOJ.' : 'DEVELOP.'}

                </span>

                <span>{sr ? 'KREIRAM.' : 'CREATE.'}</span>

              </h1>

              <p>

                {sr

                  ? 'Spajam promišljen web dizajn i funkcionalan frontend razvoj kako bih stvarala digitalna iskustva koja ostavljaju utisak.'

                  : 'I bring thoughtful web design and functional frontend development together to create digital experiences with purpose.'}

              </p>

              <div className="hero-buttons">

                <a href="#work" className="hero-button-primary">

                  {sr ? 'POGLEDAJ PROJEKTE' : 'EXPLORE MY WORK'}

                  <ArrowUpRight size={19} />

                </a>

                <a href="#about" className="hero-button-secondary">

                  {sr ? 'VIŠE O MENI' : 'MORE ABOUT ME'}

                  <ArrowDown size={18} />

                </a>

              </div>

              <HeroTerminal sr={sr} />

            </div>

          </div>

          <div className="hero-side-label" aria-hidden="true">

            001 — FRONTEND / UI

          </div>

          <div className="hero-bottomline">

            <span>WEB DESIGNER & FRONTEND DEVELOPER</span>

            <a href="#work">

              {sr ? 'ISTRAŽI PROJEKTE' : 'SCROLL TO DISCOVER'}

              <ArrowDown size={16} />

            </a>

          </div>

        </section>

        <section className="work-section" id="work">

          <div className="section-heading reveal-on-scroll">

            <div className="section-meta">

              <span>01 / PORTFOLIO</span>

              <span>DESIGN × DEVELOPMENT</span>

            </div>

            <div className="section-heading-grid">

              <h2>

                {sr ? 'IZABRANI' : 'SELECTED'}

                <br />

                <em>{sr ? 'RADOVI.' : 'WORK.'}</em>

              </h2>

              <p>

                {sr

                  ? 'Četiri projekta. Različite tehnologije, stvarni izazovi i jedan pristup — spoj dizajna, funkcionalnosti i detalja.'

                  : 'Four projects. Different technologies, practical challenges and one approach — combining design, functionality and detail.'}

              </p>

            </div>

            <div className="tm-work-index">

              {projects.map(project => (

                <a

                  key={project.id}

                  href={`#project-${project.id}`}

                >

                  <span>{project.number}</span>

                  <strong>{project.name}</strong>

                  <ArrowUpRight size={15} />

                </a>

              ))}

            </div>

          </div>

          <div className="projects-list">

            {projects.map((project, index) => (

              <ProjectSection

                key={project.id}

                project={project}

                sr={sr}

                nextProject={projects[index + 1]}

              />

            ))}

          </div>

        </section>

        <section className="skills-section" id="skills">

          <div className="skills-inner">

            <div className="section-meta section-meta--dark">

              <span>02 / {sr ? 'VEŠTINE' : 'EXPERTISE'}</span>

              <span>

                {sr ? 'MOJI DIGITALNI ALATI' : 'MY DIGITAL TOOLKIT'}

              </span>

            </div>

            <div className="skills-heading reveal-on-scroll">

              <h2>

                {sr ? 'DIZAJN' : 'DESIGN'}

                <br />

                <span>

                  {sr ? 'SUSREĆE KOD.' : 'MEETS CODE.'}

                </span>

              </h2>

              <p>

                {sr

                  ? 'Tehnologije i alati koje koristim za dizajn, razvoj i realizaciju web projekata.'

                  : 'Technologies and tools I use to design, develop and deliver web projects.'}

              </p>

            </div>

            <div className="tm-skills-layout">

              {skillGroups.map(group => {

                const Icon = group.icon

                return (

                  <div className="tm-skill-group" key={group.number}>

                    <div className="tm-skill-group-heading">

                      <span>{group.number} / EXPERTISE</span>

                      <Icon size={23} strokeWidth={1.5} />

                    </div>

                    <h3>{group.title}</h3>

                    <div className="tm-skill-items">

                      {group.items.map(item => (

                        <div className="tm-skill-item" key={item}>

                          <TechIcon name={item} size="large" />

                          <span>{item}</span>


                        </div>

                      ))}

                    </div>

                  </div>

                )

              })}

            </div>

            <div className="tm-skills-footer">

              <span>

                <GitBranch size={17} />

                {sr

                  ? 'DIZAJN + KOD + KORISNIČKO ISKUSTVO'

                  : 'DESIGN + CODE + USER EXPERIENCE'}

              </span>

              <span>TM. / DIGITAL PRACTICE</span>

            </div>

          </div>

        </section>

        <div className="portfolio-marquee" aria-hidden="true">

          <div>

            DESIGN <span>/</span> DEVELOPMENT <span>/</span>

            CREATIVITY <span>/</span> DIGITAL EXPERIENCES

            <span>/</span> DESIGN <span>/</span> DEVELOPMENT

            <span>/</span>

          </div>

        </div>

        <section className="about-section" id="about">

          <div className="section-meta">

            <span>03 / {sr ? 'O MENI' : 'ABOUT ME'}</span>

            <span>DESIGN × CODE</span>

          </div>

          <div className="about-layout">

            <div className="about-left reveal-on-scroll">

              <div className="about-left-label">

                <span>

                  {sr ? 'IZA INTERFEJSA' : 'BEHIND THE INTERFACE'}

                </span>

                <span>TM. / 2026</span>

              </div>

              <CodeWindow />

              <div className="about-visual">

                <div className="about-visual-index">

                  <span>FIG. 01</span>

                  <span>

                    {sr

                      ? 'OSOBA IZA KODA'

                      : 'THE PERSON BEHIND THE CODE'}

                  </span>

                </div>

                <div className="about-photo">

                  <img

                    src="/images/about-tamara.png"

                    alt="Tamara Miović working on a laptop"

                    loading="lazy"

                  />

                  <div className="about-photo-overlay">

                    <span>TM.</span>

                    <span>DESIGN / CODE / CREATE</span>

                  </div>

                </div>

                <div className="about-visual-footer">

                  <span>

                    {sr

                      ? 'KREATIVNOST. TEHNIČKO RAZMIŠLJANJE.'

                      : 'CREATIVE MIND. TECHNICAL THINKING.'}

                  </span>

                  <span>↗</span>

                </div>

              </div>

            </div>

            <div className="about-right reveal-on-scroll">

              <span className="eyebrow about-code-tag">

                {'<about-me>'}

              </span>

              <h2>

                {sr

                  ? 'Više od sajta koji samo lepo izgleda.'

                  : 'More than a good-looking website.'}

              </h2>

              <p>

                {sr

                  ? 'Ja sam Tamara Miović, diplomirani inženjer informacionih tehnologija i sistema, smer Web dizajn. Bavim se web dizajnom i frontend razvojem, a najviše volim kada mogu da spojim kreativno razmišljanje sa konkretnom funkcionalnošću.'

                  : 'I’m Tamara Miović, a Web Design graduate in Information Technology and Systems Engineering. I work at the intersection of web design and frontend development, combining creative thinking with practical functionality.'}

              </p>

              <p>

                {sr

                  ? 'Kroz projekte istražujem kako tipografija, raspored elemenata, interakcije i kod zajedno stvaraju jasno i intuitivno digitalno iskustvo.'

                  : 'Through my projects, I explore how typography, layout, interactions and code work together to create clear and intuitive digital experiences.'}

              </p>

              <div className="about-facts">

                <div>

                  <span>

                    01 / {sr ? 'OBRAZOVANJE' : 'EDUCATION'}

                  </span>

                  <strong>

                    {sr

                      ? 'Web dizajn · Inženjer informacionih tehnologija i sistema'

                      : 'Web Design · IT & Systems Engineering'}

                  </strong>

                </div>

                <div>

                  <span>02 / {sr ? 'OBLASTI' : 'PRACTICE'}</span>

                  <strong>Frontend / UI / E-commerce</strong>

                </div>

                <div>

                  <span>03 / {sr ? 'ALATI' : 'TOOLKIT'}</span>

                  <strong>React / TypeScript / WordPress</strong>

                </div>

              </div>

              <a href={`mailto:${email}`} className="text-action">

                {sr ? 'HAJDE DA SARAĐUJEMO' : "LET'S CONNECT"}

                <ArrowUpRight size={19} />

              </a>

              <span className="about-code-tag about-code-close">

                {'</about-me>'}

              </span>

            </div>

          </div>

        </section>

        <section className="contact-section" id="contact">

          <div className="contact-inner">

            <div className="section-meta section-meta--dark">

              <span>04 / {sr ? 'KONTAKT' : 'CONTACT'}</span>

              <span>AVAILABLE FOR OPPORTUNITIES</span>

            </div>

            <div className="contact-layout">

              <div className="contact-main reveal-on-scroll">

                <span className="eyebrow">

                  {sr

                    ? 'IMAŠ IDEJU ILI PRILIKU ZA SARADNJU?'

                    : 'HAVE A PROJECT OR AN OPPORTUNITY?'}

                </span>

                <h2>

                  {sr ? 'HAJDE DA' : "LET'S"}

                  <br />

                  <span>{sr ? 'STVARAMO.' : 'BUILD.'}</span>

                </h2>

                <p>

                  {sr

                    ? 'Otvorena sam za zanimljive projekte, saradnje i prilike u web dizajnu i frontend razvoju.'

                    : 'Open to interesting projects, collaborations and opportunities in web design and frontend development.'}

                </p>

                <a

                  href={`mailto:${email}`}

                  className="contact-main-link"

                >

                  {sr ? 'POŠALJI MI MEJL' : 'SEND AN EMAIL'}

                  <ArrowUpRight size={21} />

                </a>

              </div>

              <div className="contact-aside reveal-on-scroll">

                <div className="contact-aside-top">

                  <span>CONNECT / 2026</span>

                  <span className="contact-status">

                    <i />

                    {sr ? 'OTVORENA ZA SARADNJU' : 'OPEN TO WORK'}

                  </span>

                </div>

                <div className="contact-aside-center">

                  <Mail size={25} strokeWidth={1.4} />

                  <span>{sr ? 'MEJL ADRESA' : 'EMAIL ADDRESS'}</span>

                  <a href={`mailto:${email}`} className="contact-email">

                    {email}

                    <ArrowUpRight size={18} />

                  </a>

                </div>

                <div className="contact-aside-bottom">

                  <span>DESIGN × DEVELOPMENT</span>

                  <a href="#work">

                    {sr ? 'NAZAD NA PROJEKTE' : 'BACK TO WORK'}

                    <ArrowRight size={16} />

                  </a>

                </div>

              </div>

            </div>

            <footer className="portfolio-footer">

              <span>TM. / TAMARA MIOVIĆ</span>

              <span>WEB DESIGN & FRONTEND DEVELOPMENT</span>

              <span>© 2026</span>

            </footer>

          </div>

        </section>

      </main>

    </>

  )

}
