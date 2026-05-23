import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../components/AnimatedText/AnimatedText'
import { MagneticButton } from '../components/MagneticButton/MagneticButton'
import { contactPrimary, contactSocial } from '../config/contact'
import { SectionShell } from './SectionShell'
import './contactSection.css'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <SectionShell id="contact">
      <div className="contactBlock">
        <h2 className="contactTitle">
          <AnimatedText text={t('contact.title')} as="span" />
        </h2>
        <p className="contactSub">
          <AnimatedText text={t('contact.sub')} as="span" />
        </p>
        <div className="contactAction">
          <MagneticButton href={contactPrimary.href} className="contactCta">
            <AnimatedText text={t('contact.cta')} />
          </MagneticButton>
          <p className="contactFind">
            <AnimatedText text={t('contact.find')} as="span" />
          </p>
          <nav className="contactSocial" aria-label={t('contact.socialAria')}>
            {contactSocial.map((link, index) => (
              <Fragment key={link.label}>
                {index > 0 ? (
                  <span className="contactSocialSep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  className="contactSocialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </SectionShell>
  )
}
