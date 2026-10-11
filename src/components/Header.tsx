
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const changeLanguage = (language: 'en' | 'sr') => {
    void i18n.changeLanguage(language)
    localStorage.setItem('tm-language', language)
    document.documentElement.lang = language
    closeMenu()
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
      <a
        href="#home"
        className="brand"
        aria-label="Tamara Miović — Home"
        onClick={closeMenu}
      >
        <span className="brand-mark">TM</span>

        <span className="brand-info">
          <strong>TAMARA MIOVIĆ</strong>
          <small>WEB DESIGNER & FRONTEND DEVELOPER</small>
        </span>
      </a>

      <nav
        id="portfolio-navigation"
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            <span className="mobile-nav-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            {link.label}
            <ArrowUpRight className="mobile-nav-arrow" size={20} />
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div
          className="language-switch"
          aria-label="Choose language"
        >
          <button
            type="button"
            className={i18n.language.startsWith('en') ? 'active' : ''}
            onClick={() => changeLanguage('en')}
            aria-pressed={i18n.language.startsWith('en')}
          >
            EN
          </button>

          <button
            type="button"
            className={i18n.language.startsWith('sr') ? 'active' : ''}
            onClick={() => changeLanguage('sr')}
            aria-pressed={i18n.language.startsWith('sr')}
          >
            SR
          </button>
        </div>

        <a
          className="header-contact"
          href="mailto:miovictamara123@gmail.com"
        >
          {t('contact.button')}
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  )
}
