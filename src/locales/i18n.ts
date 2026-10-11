
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        work: 'Work',
        about: 'About',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        role: 'Web Designer & Frontend Developer',
        design: 'DESIGN.',
        develop: 'DEVELOP.',
        create: 'CREATE.',
        description:
          'Designing thoughtful interfaces. Developing functional digital experiences.',
        viewWork: 'View My Work',
        downloadCV: 'Download CV',
        scroll: 'Scroll to explore',
      },
      projects: {
        title: 'Selected Work',
        viewProject: 'View Project',
        liveWebsite: 'Live Website',
        caseStudy: 'Case Study',
      },
      expertise: {
        title: 'Expertise',
        frontend: 'Frontend Development',
        design: 'Web & UI Design',
        ecommerce: 'CMS & E-commerce',
      },
      about: {
        label: 'About Me',
        title: 'Turning ideas into digital experiences.',
      },
      contact: {
        title: "Let's work together.",
        description: "Open to new opportunities and meaningful digital projects.",
        button: 'Get in Touch',
      },
    },
  },
  sr: {
    translation: {
      navigation: {
        home: 'Početna',
        work: 'Projekti',
        about: 'O meni',
        skills: 'Veštine',
        contact: 'Kontakt',
      },
      hero: {
        role: 'Web dizajner i Frontend Developer',
        design: 'DIZAJN.',
        develop: 'RAZVOJ.',
        create: 'KREIRANJE.',
        description:
          'Dizajniram promišljene interfejse. Razvijam funkcionalna digitalna iskustva.',
        viewWork: 'Moji projekti',
        downloadCV: 'Preuzmi CV',
        scroll: 'Skroluj za više',
      },
      projects: {
        title: 'Odabrani projekti',
        viewProject: 'Pogledaj projekat',
        liveWebsite: 'Poseti sajt',
        caseStudy: 'Detalji projekta',
      },
      expertise: {
        title: 'Oblasti rada',
        frontend: 'Frontend razvoj',
        design: 'Web i UI dizajn',
        ecommerce: 'CMS i e-commerce',
      },
      about: {
        label: 'O meni',
        title: 'Od ideje do digitalnog iskustva.',
      },
      contact: {
        title: 'Hajde da sarađujemo.',
        description: 'Otvorena sam za nove poslovne prilike i zanimljive digitalne projekte.',
        button: 'Kontaktiraj me',
      },
    },
  },
}

const savedLanguage = localStorage.getItem('tm-language')
const initialLanguage = savedLanguage === 'sr' ? 'sr' : 'en'

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
