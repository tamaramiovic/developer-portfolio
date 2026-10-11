
import { useTranslation } from 'react-i18next'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const changeLanguage = (language: 'en' | 'sr') => {
    void i18n.changeLanguage(language)
    localStorage.setItem('tm-language', language)
    document.documentElement.lang = language
    setMenuOpen(false)
  }

  const links = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.work'), href: '#work' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.contact'), href: '#contact' },
  ]

  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Tamara Miović — Home">
        <span className="brand-mark">TM</span>
        <span className="brand-info">
          <strong>TAMARA MIOVIĆ</strong>
          <small>WEB DESIGNER & FRONTEND DEVELOPER</small>
        </span>
      </a>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label="Choose language">
          <button
            type="button"
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => changeLanguage('en')}
            aria-pressed={i18n.language === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            className={i18n.language === 'sr' ? 'active' : ''}
            onClick={() => changeLanguage('sr')}
            aria-pressed={i18n.language === 'sr'}
          >
            SR
          </button>
        </div>

        <a className="header-contact" href="mailto:miovictamara123@gmail.com">
          {t('contact.button')} <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}
