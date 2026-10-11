
import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ExternalLink,
  Heart,
  MapPin,
  Music2,
  Smartphone,
  Sparkles
} from 'lucide-react'
import './WeddingCaseStudy.css'

type Props = {
  sr: boolean
}

const invitationUrl = 'https://vladimir-vedrana.com'

export default function WeddingCaseStudy({ sr }: Props) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [screenWidth, setScreenWidth] = useState(320)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const element = screenRef.current
    if (!element) return

    const update = () => setScreenWidth(element.clientWidth)
    update()

    const observer = new ResizeObserver(update)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scale = screenWidth / 390

  return (
    <section className="wcs">
      <div className="wcs-intro">
        <div className="wcs-intro-top">
          <span>04 / THE WEDDING EXPERIENCE</span>
          <span>2027 — REAL CLIENT PROJECT</span>
        </div>

        <div className="wcs-intro-content">
          <div>
            <span className="wcs-eyebrow">
              DIGITAL INVITATION / WEB EXPERIENCE
            </span>

            <h2>
              Vladimir
              <span className="wcs-amp">&</span>
              Vedrana
            </h2>

            <p>
              {sr
                ? 'Personalizovana digitalna pozivnica osmišljena kao interaktivno iskustvo — od otvaranja koverte do svih važnih informacija o venčanju.'
                : 'A personalized digital wedding invitation designed as an interactive experience — from opening the envelope to discovering every detail of the celebration.'}
            </p>
          </div>

          <div className="wcs-intro-aside">
            <span>PROJECT TYPE</span>
            <strong>
              {sr
                ? 'Interaktivna digitalna pozivnica'
                : 'Interactive digital invitation'}
            </strong>

            <span>PLATFORM</span>
            <strong>WordPress / Custom Design</strong>

            <span>EXPERIENCE</span>
            <strong>Mobile-first / Interactive</strong>
          </div>
        </div>
      </div>

      <div className="wcs-experience">
        <div className="wcs-experience-heading">
          <div>
            <span className="wcs-eyebrow">
              01 / LIVE EXPERIENCE
            </span>

            <h3>
              {sr
                ? 'Pozivnica koja oživljava.'
                : 'An invitation that comes to life.'}
            </h3>

            <p>
              {sr
                ? 'Otvori kovertu i istraži originalnu pozivnicu direktno u telefonu.'
                : 'Open the envelope and explore the original invitation directly inside the phone.'}
            </p>
          </div>

          <span className="wcs-side-note">
            INTERACTIVE PREVIEW
            <br />
            390 × 844
          </span>
        </div>

        <div className="wcs-stage">
          <div className="wcs-stage-mark wcs-stage-mark--left">
            VV / 2027
          </div>

          <div className="wcs-phone-wrap">
            <div className="wcs-phone">
              <div className="wcs-phone-inner">
                <div className="wcs-phone-screen" ref={screenRef}>
                  {!loaded && (
                    <div className="wcs-loading">
                      <div className="wcs-loading-monogram">
                        VV
                      </div>

                      <span>
                        {sr
                          ? 'UČITAVANJE POZIVNICE'
                          : 'LOADING INVITATION'}
                      </span>
                    </div>
                  )}

                  <iframe
                    title="Vladimir and Vedrana wedding invitation"
                    src={invitationUrl}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    style={{
                      width: 390,
                      height: 844,
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left'
                    }}
                  />
                </div>

                <div className="wcs-dynamic-island" />
              </div>
            </div>

            <div className="wcs-phone-caption">
              <span className="wcs-caption-dot" />
              LIVE WEBSITE / INTERACTIVE
            </div>
          </div>

          <div className="wcs-stage-mark wcs-stage-mark--right">
            DIGITAL
            <br />
            EXPERIENCE
          </div>
        </div>

        <div className="wcs-preview-footer">
          <div className="wcs-preview-notice">
            <span className="wcs-notice-title">
              PRIVATE INVITATION / PORTFOLIO PREVIEW
            </span>

            <p>
              {sr
                ? 'Ovo je originalna pozivnica za privatno venčanje. Molimo vas da ne šaljete RSVP potvrde.'
                : 'This is an original invitation for a private wedding. Please do not submit an RSVP response.'}
            </p>
          </div>

          <a
            className="wcs-live-link"
            href={invitationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sr
              ? 'OTVORI ORIGINALNU POZIVNICU'
              : 'OPEN LIVE INVITATION'}

            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="wcs-details">
        <div className="wcs-details-heading">
          <span className="wcs-eyebrow">
            02 / INTERACTIVE DETAILS
          </span>

          <h3>
            {sr
              ? 'Svaki detalj ima svoju ulogu.'
              : 'Every detail has a purpose.'}
          </h3>
        </div>

        <div className="wcs-feature-grid">
          <div className="wcs-feature">
            <span className="wcs-feature-number">01</span>
            <Sparkles size={26} strokeWidth={1.3} />

            <h4>
              {sr
                ? 'Animirana koverta'
                : 'Animated envelope'}
            </h4>

            <p>
              {sr
                ? 'Interaktivno otvaranje pozivnice uz personalizovani pečat.'
                : 'An interactive opening experience with a personalized wax seal.'}
            </p>
          </div>

          <div className="wcs-feature">
            <span className="wcs-feature-number">02</span>
            <Music2 size={26} strokeWidth={1.3} />

            <h4>
              {sr
                ? 'Muzika i animacije'
                : 'Music and motion'}
            </h4>

            <p>
              {sr
                ? 'Muzika, animirani tekst i pažljivo osmišljeni prelazi.'
                : 'Music, animated typography and thoughtfully designed transitions.'}
            </p>
          </div>

          <div className="wcs-feature">
            <span className="wcs-feature-number">03</span>
            <MapPin size={26} strokeWidth={1.3} />

            <h4>
              {sr
                ? 'Lokacija događaja'
                : 'Event location'}
            </h4>

            <p>
              {sr
                ? 'Prikaz mesta održavanja venčanja i pristup mapi.'
                : 'Wedding venue information with convenient map access.'}
            </p>
          </div>

          <div className="wcs-feature">
            <span className="wcs-feature-number">04</span>
            <Heart size={26} strokeWidth={1.3} />

            <h4>RSVP Experience</h4>

            <p>
              {sr
                ? 'Forma za potvrdu dolaska integrisana u originalnu pozivnicu.'
                : 'An RSVP form integrated into the original invitation.'}
            </p>
          </div>
        </div>
      </div>

      <div className="wcs-outro">
        <div>
          <span className="wcs-eyebrow">
            03 / PROJECT APPROACH
          </span>

          <h3>
            {sr
              ? 'Više od obične pozivnice.'
              : 'More than an invitation.'}
          </h3>

          <p>
            {sr
              ? 'Cilj je bio da se klasična pozivnica pretvori u digitalno iskustvo koje gosti mogu jednostavno da otvore na telefonu, istraže i koriste.'
              : 'The goal was to transform a traditional invitation into a digital experience that guests can easily open, explore and use on their phones.'}
          </p>
        </div>

        <div className="wcs-outro-right">
          <Smartphone size={25} strokeWidth={1.3} />

          <span>
            MOBILE-FIRST
            <br />
            DIGITAL EXPERIENCE
          </span>

          <a
            href={invitationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sr ? 'POGLEDAJ PROJEKAT' : 'VIEW PROJECT'}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
