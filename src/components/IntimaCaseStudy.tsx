

import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  ShoppingBag,
  Ruler,
  Layers3,
  Truck,
  Gift,
  Smartphone
} from 'lucide-react'
import './IntimaCaseStudy.css'


type Props = {
  sr: boolean
}

type Feature = {
  id: string
  en: string
  sr: string
  descriptionEn: string
  descriptionSr: string
}

const site = 'https://intimabellissima.com'

const features: Feature[] = [
  {
    id: 'catalogue',
    en: 'Product catalogue',
    sr: 'Katalog proizvoda',
    descriptionEn:
      'Editorial category pages, product collections and cup-size navigation help visitors find relevant products.',
    descriptionSr:
      'Editorial stranice kategorija, kolekcije proizvoda i navigacija po korpama olakšavaju pronalaženje odgovarajućih modela.'
  },
  {
    id: 'variations',
    en: 'Product variations',
    sr: 'Varijacije proizvoda',
    descriptionEn:
      'Product pages let shoppers choose a colour, cup size and band size before adding an available variation to the cart.',
    descriptionSr:
      'Stranice proizvoda omogućavaju izbor boje, korpe i obima pre dodavanja dostupne varijacije u korpu.'
  },
  {
    id: 'checkout',
    en: 'Shopping experience',
    sr: 'Proces kupovine',
    descriptionEn:
      'The cart and checkout present delivery details, coupon discounts, order totals and cash-on-delivery information.',
    descriptionSr:
      'Korpa i stranica poručivanja prikazuju dostavu, popuste, ukupnu cenu i informacije o plaćanju pouzećem.'
  }
]

function SectionLabel({
  number,
  children
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="ibcs-section-label">
      <span>{number}</span>
      <span>{children}</span>
      <span>INTIMA BELLISSIMA ®</span>
    </div>
  )
}

export default function IntimaCaseStudy({ sr }: Props) {
  const [featureIndex, setFeatureIndex] = useState(0)
  const [colour, setColour] = useState('Black')
  const [cup, setCup] = useState('C')
  const [band, setBand] = useState('80')
  const [underbust, setUnderbust] = useState('79')
  const [bust, setBust] = useState('97')
  const [sizeResult, setSizeResult] = useState('')
  const [preview, setPreview] = useState<'desktop' | 'mobile'>(
    'desktop'
  )

  const feature = features[featureIndex]

  function calculateSize() {
    const under = Number(underbust)
    const over = Number(bust)

    if (
      !Number.isFinite(under) ||
      !Number.isFinite(over) ||
      under < 55 ||
      under > 120 ||
      over <= under ||
      over > 160
    ) {
      setSizeResult('—')
      return
    }

    const roundedBand = Math.max(
      60,
      Math.min(115, Math.round(under / 5) * 5)
    )

    const difference = over - under
    const cupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const cupIndex = Math.max(
      0,
      Math.min(6, Math.floor((difference - 10) / 2))
    )

    setSizeResult(`${roundedBand}${cupLetters[cupIndex]}`)
  }

  return (
    <div className="ibcs">
      <div className="ibcs-intro">
        <div className="ibcs-intro-top">
          <span>03 / E-COMMERCE CASE STUDY</span>
          <span>REAL BUSINESS / LIVE WEBSITE</span>
        </div>

        <div className="ibcs-intro-content">
          <span className="ibcs-eyebrow">
            {sr
              ? 'DIZAJN, TEHNOLOGIJA I ONLINE KUPOVINA'
              : 'DESIGN, TECHNOLOGY & ONLINE SHOPPING'}
          </span>

          <h2>
            INTIMA
            <br />
            <em>BELLISSIMA.</em>
          </h2>

          <p>
            {sr
              ? 'Od fizičkog butika do digitalnog iskustva. Online prodavnica koja spaja minimalistički dizajn, organizovan katalog i funkcionalan proces kupovine.'
              : 'From a physical boutique to a digital experience. An online store bringing together minimalist design, an organized product catalogue and a functional shopping journey.'}
          </p>

          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="ibcs-main-link"
          >
            {sr ? 'POSETI ONLINE PRODAVNICU' : 'VISIT LIVE STORE'}
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="ibcs-intro-bottom">
          <span>WORDPRESS / ELEMENTOR / WOOCOMMERCE</span>
          <span>2026 — SERBIA</span>
        </div>
      </div>

      <section className="ibcs-section">
        <SectionLabel number="01 / 06">
          {sr ? 'O PROJEKTU' : 'THE PROJECT'}
        </SectionLabel>

        <div className="ibcs-overview">
          <div>
            <span className="ibcs-eyebrow">
              {sr ? 'STVARAN PROJEKAT' : 'REAL-WORLD PROJECT'}
            </span>

            <h3>
              {sr
                ? 'Više od lepog izloga.'
                : 'More than a beautiful storefront.'}
            </h3>
          </div>

          <div className="ibcs-overview-copy">
            <p>
              {sr
                ? 'INTIMA BELLISSIMA je postojeći butik donjeg veša u Somboru. Cilj projekta bio je da ponuda bude dostupna kupcima širom Srbije, kroz online prodavnicu koja zadržava prepoznatljiv vizuelni identitet brenda.'
                : 'INTIMA BELLISSIMA is an existing lingerie boutique in Sombor, Serbia. The goal was to bring its product offering online while maintaining a recognizable visual identity and making shopping accessible to customers across Serbia.'}
            </p>

            <p>
              {sr
                ? 'Radila sam na strukturi sajta, vizuelnom dizajnu, organizaciji kategorija i proizvoda, WooCommerce podešavanjima i korisničkom iskustvu.'
                : 'My work covered website structure, visual design, product and category organization, WooCommerce configuration and the overall user experience.'}
            </p>

            <div className="ibcs-facts">
              <div>
                <span>PLATFORM</span>
                <strong>WordPress</strong>
              </div>
              <div>
                <span>BUILDER</span>
                <strong>Elementor</strong>
              </div>
              <div>
                <span>COMMERCE</span>
                <strong>WooCommerce</strong>
              </div>
              <div>
                <span>STATUS</span>
                <strong>{sr ? 'Aktivan sajt' : 'Live website'}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ibcs-section">
        <SectionLabel number="02 / 06">
          {sr ? 'VIZUELNI IDENTITET' : 'VISUAL DIRECTION'}
        </SectionLabel>

        <div className="ibcs-visual-heading">
          <div>
            <span className="ibcs-eyebrow">ART DIRECTION</span>
            <h3>
              {sr ? 'Suptilno. Jasno.' : 'Quiet. Considered.'}
              <br />
              <em>{sr ? 'Prepoznatljivo.' : 'Distinctive.'}</em>
            </h3>
          </div>
          <p>
            {sr
              ? 'Topli neutralni tonovi, izražena tipografija, mnogo prostora i fotografije proizvoda u prvom planu.'
              : 'Warm neutrals, expressive typography, generous whitespace and product photography at the centre of the experience.'}
          </p>
        </div>

        <div className="ibcs-palette">
          <div className="ibcs-swatch ibcs-swatch--ivory">
            <span>01 / IVORY</span>
            <span>#F5F2EE</span>
          </div>
          <div className="ibcs-swatch ibcs-swatch--taupe">
            <span>02 / TAUPE</span>
            <span>#A99A8F</span>
          </div>
          <div className="ibcs-swatch ibcs-swatch--charcoal">
            <span>03 / CHARCOAL</span>
            <span>#191716</span>
          </div>
        </div>

        <div className="ibcs-typography">
          <span>TYPOGRAPHIC DIRECTION</span>
          <strong>Elegant by design.</strong>
          <span>MINIMALISM / EDITORIAL / COMMERCE</span>
        </div>
      </section>

      <section className="ibcs-section">
        <SectionLabel number="03 / 06">
          {sr ? 'ONLINE PRODAVNICA' : 'THE STOREFRONT'}
        </SectionLabel>

        <div className="ibcs-preview-header">
          <div>
            <span className="ibcs-eyebrow">LIVE WEBSITE</span>
            <h3>
              {sr
                ? 'Pogledaj iskustvo kupovine.'
                : 'Explore the storefront.'}
            </h3>
          </div>

          <div className="ibcs-switch" role="group" aria-label="Preview mode">
            <button
              type="button"
              className={preview === 'desktop' ? 'active' : ''}
              onClick={() => setPreview('desktop')}
            >
              DESKTOP
            </button>
            <button
              type="button"
              className={preview === 'mobile' ? 'active' : ''}
              onClick={() => setPreview('mobile')}
            >
              MOBILE
            </button>
          </div>
        </div>

        <div
          className={`ibcs-browser ${
            preview === 'mobile' ? 'ibcs-browser--mobile' : ''
          }`}
        >
          <div className="ibcs-browser-bar">
            <div className="ibcs-browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span>intimabellissima.com</span>
            <ExternalLink size={14} />
          </div>

          <div className="ibcs-browser-viewport">
            <iframe
              key={preview}
              title={`Intima Bellissima ${preview} preview`}
              src={site}
              loading="lazy"
            />
          </div>
        </div>

        <p className="ibcs-note">
          {sr
            ? 'Prikaz koristi aktivan sajt. Ukoliko se sadržaj ne učita u okviru, otvorite prodavnicu u novom tabu.'
            : 'This preview loads the live website. If embedding is unavailable, open the store in a new tab.'}
        </p>

        <div className="ibcs-feature-tabs">
          {features.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={featureIndex === index ? 'active' : ''}
              onClick={() => setFeatureIndex(index)}
            >
              <span>0{index + 1}</span>
              {sr ? item.sr : item.en}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>

        <div className="ibcs-feature-detail">
          <div>
            <span className="ibcs-eyebrow">
              FEATURE / 0{featureIndex + 1}
            </span>
            <h4>{sr ? feature.sr : feature.en}</h4>
          </div>
          <p>
            {sr
              ? feature.descriptionSr
              : feature.descriptionEn}
          </p>
        </div>
      </section>

      <section className="ibcs-section">
        <SectionLabel number="04 / 06">
          {sr ? 'INTERAKTIVNI ELEMENTI' : 'INTERACTIVE ELEMENTS'}
        </SectionLabel>

        <div className="ibcs-demo-heading">
          <span className="ibcs-eyebrow">PRODUCT EXPERIENCE / DEMO</span>
          <h3>
            {sr ? 'Svaki detalj je važan.' : 'Details make the difference.'}
          </h3>
          <p>
            {sr
              ? 'Isprobaj demonstraciju izbora varijacija proizvoda. Ovo je prikaz interfejsa za portfolio, bez stvarnog dodavanja proizvoda u korpu.'
              : 'Try this product-variation interface demo. It is a portfolio interaction and does not add items to the real shopping cart.'}
          </p>
        </div>

        <div className="ibcs-product-demo">
          <div className="ibcs-product-art">
            <div className="ibcs-product-art-top">
              <span>INTIMA BELLISSIMA</span>
              <span>PRODUCT / 001</span>
            </div>

            <div className="ibcs-product-art-centre">
              <ShoppingBag size={57} strokeWidth={0.8} />
              <span>THE INTIMA EDIT</span>
            </div>

            <div className="ibcs-product-art-bottom">
              <span>CURATED LINGERIE</span>
              <span>EST. 2025</span>
            </div>
          </div>

          <div className="ibcs-product-controls">
            <span className="ibcs-eyebrow">
              {sr ? 'IZBOR PROIZVODA' : 'PRODUCT SELECTION'}
            </span>
            <h4>BODY MOUSSE</h4>
            <p className="ibcs-product-price">3.700 RSD</p>

            <div className="ibcs-field">
              <span>
                {sr ? 'BOJA' : 'COLOUR'} /{' '}
                {colour === 'Black'
                  ? sr ? 'CRNA' : 'BLACK'
                  : colour === 'White'
                    ? sr ? 'BELA' : 'WHITE'
                    : sr ? 'KREM' : 'CREAM'}
              </span>

              <div className="ibcs-colours">
                {[
                  { name: 'White', hex: '#fff' },
                  { name: 'Black', hex: '#161616' },
                  { name: 'Cream', hex: '#dfd0ba' }
                ].map(item => (
                  <button
                    type="button"
                    key={item.name}
                    title={item.name}
                    aria-label={item.name}
                    aria-pressed={colour === item.name}
                    className={colour === item.name ? 'selected' : ''}
                    onClick={() => setColour(item.name)}
                  >
                    <i style={{ background: item.hex }} />
                  </button>
                ))}
              </div>
            </div>

            <div className="ibcs-field">
              <span>{sr ? 'KORPA' : 'CUP SIZE'} / {cup}</span>
              <div className="ibcs-options">
                {['B', 'C'].map(value => (
                  <button
                    type="button"
                    key={value}
                    className={cup === value ? 'selected' : ''}
                    onClick={() => setCup(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="ibcs-field">
              <span>{sr ? 'OBIM' : 'BAND SIZE'} / {band}</span>
              <div className="ibcs-options">
                {['70', '75', '80', '85', '90'].map(value => (
                  <button
                    type="button"
                    key={value}
                    className={band === value ? 'selected' : ''}
                    onClick={() => setBand(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="ibcs-selection-result">
              <Check size={16} />
              {sr ? 'IZABRANA VARIJACIJA' : 'SELECTED VARIATION'}
              <strong>{colour} / {cup} / {band}</strong>
            </div>

            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="ibcs-demo-link"
            >
              {sr ? 'ISTRAŽI PRAVE PROIZVODE' : 'EXPLORE REAL PRODUCTS'}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="ibcs-section ibcs-calculator-section">
        <SectionLabel number="05 / 06">
          {sr ? 'KALKULATOR VELIČINE' : 'SIZE CALCULATOR'}
        </SectionLabel>

        <div className="ibcs-calculator-layout">
          <div className="ibcs-calculator-copy">
            <Ruler size={30} strokeWidth={1.3} />
            <span className="ibcs-eyebrow">
              SIZE FINDER / INTERACTIVE DEMO
            </span>
            <h3>
              {sr ? 'Pronađi svoju' : 'Find your'}
              <br />
              <em>{sr ? 'veličinu.' : 'fit.'}</em>
            </h3>
            <p>
              {sr
                ? 'Na stvarnom sajtu kupci mogu da unesu obim ispod i preko grudi i dobiju preporuku veličine. Ovde možeš da isprobaš pojednostavljenu demonstraciju te funkcije.'
                : 'On the live website, customers can enter their underbust and bust measurements to receive a size suggestion. This is a simplified demonstration of that feature.'}
            </p>
          </div>

          <div className="ibcs-calculator">
            <span className="ibcs-eyebrow">
              {sr ? 'UNESI SVOJE MERE' : 'ENTER YOUR MEASUREMENTS'}
            </span>

            <div className="ibcs-calculator-inputs">
              <label>
                <span>{sr ? 'OBIM ISPOD GRUDI' : 'UNDERBUST'} / CM</span>
                <input
                  type="number"
                  min="55"
                  max="120"
                  value={underbust}
                  onChange={event => {
                    setUnderbust(event.target.value)
                    setSizeResult('')
                  }}
                />
              </label>

              <label>
                <span>{sr ? 'OBIM PREKO GRUDI' : 'BUST'} / CM</span>
                <input
                  type="number"
                  min="55"
                  max="160"
                  value={bust}
                  onChange={event => {
                    setBust(event.target.value)
                    setSizeResult('')
                  }}
                />
              </label>
            </div>

            <button
              type="button"
              className="ibcs-calculate-button"
              onClick={calculateSize}
            >
              {sr ? 'IZRAČUNAJ VELIČINU' : 'CALCULATE SIZE'}
              <ArrowRight size={18} />
            </button>

            <div className="ibcs-calculator-result" aria-live="polite">
              <span>
                {sr
                  ? 'ORIJENTACIONA VELIČINA'
                  : 'ILLUSTRATIVE SIZE RESULT'}
              </span>
              <strong>{sizeResult || '—'}</strong>
              <p>
                {sr
                  ? 'Demonstracioni proračun. Veličine se razlikuju po proizvođaču i modelu; za stvaran izbor proveri vodič i mere na sajtu.'
                  : 'Illustrative calculation only. Sizing varies by brand and style; consult the live store’s size guide before purchasing.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ibcs-section">
        <SectionLabel number="06 / 06">
          {sr ? 'IZA ONLINE PRODAVNICE' : 'BEHIND THE STORE'}
        </SectionLabel>

        <div className="ibcs-commerce-heading">
          <span className="ibcs-eyebrow">
            WORDPRESS / ELEMENTOR / WOOCOMMERCE
          </span>
          <h3>
            {sr ? 'Dizajn koji radi.' : 'Design that works.'}
          </h3>
          <p>
            {sr
              ? 'E-commerce projekat podrazumeva mnogo više od vizuelnog identiteta: organizaciju proizvoda, izbor varijacija, promocije, korpu, dostavu i proces poručivanja.'
              : 'An e-commerce project goes beyond visual identity: product organization, variations, promotions, cart functionality, shipping and checkout all form part of the experience.'}
          </p>
        </div>

        <div className="ibcs-commerce-grid">
          <div>
            <Layers3 size={26} strokeWidth={1.4} />
            <span>01 / CATALOGUE</span>
            <h4>{sr ? 'Kategorije i proizvodi' : 'Products & categories'}</h4>
            <p>
              {sr
                ? 'Kategorije, fotografije, opisi, veličine i dostupne varijacije proizvoda.'
                : 'Categories, product images, descriptions, sizes and available variations.'}
            </p>
          </div>

          <div>
            <Gift size={26} strokeWidth={1.4} />
            <span>02 / PROMOTIONS</span>
            <h4>{sr ? 'Popusti i promo kodovi' : 'Discounts & coupons'}</h4>
            <p>
              {sr
                ? 'Promo kodovi, obračun popusta i pregled ukupnog iznosa porudžbine.'
                : 'Coupon codes, discount calculations and clear order totals.'}
            </p>
          </div>

          <div>
            <Truck size={26} strokeWidth={1.4} />
            <span>03 / DELIVERY</span>
            <h4>{sr ? 'Dostava i poručivanje' : 'Shipping & checkout'}</h4>
            <p>
              {sr
                ? 'Praćenje iznosa do besplatne dostave, podaci za isporuku i plaćanje pouzećem.'
                : 'Free-shipping progress, delivery details and cash-on-delivery checkout.'}
            </p>
          </div>

          <div>
            <Smartphone size={26} strokeWidth={1.4} />
            <span>04 / RESPONSIVE</span>
            <h4>{sr ? 'Mobilno iskustvo' : 'Mobile experience'}</h4>
            <p>
              {sr
                ? 'Navigacija, katalog i proces kupovine prilagođeni manjim ekranima.'
                : 'Navigation, product browsing and the shopping journey adapted for smaller screens.'}
            </p>
          </div>
        </div>

        <div className="ibcs-ending">
          <div>
            <span>THE FINAL RESULT / LIVE E-COMMERCE</span>
            <h3>
              {sr
                ? 'Od ideje do online prodavnice.'
                : 'From concept to live commerce.'}
            </h3>
          </div>

          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sr ? 'POSETI SAJT' : 'VISIT WEBSITE'}
            <ArrowUpRight size={21} />
          </a>
        </div>
      </section>
    </div>
  )
}
