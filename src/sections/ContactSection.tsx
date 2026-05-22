import { Fragment } from 'react'
import { MagneticButton } from '../components/MagneticButton/MagneticButton'
import { contactPrimary, contactSocial } from '../config/contact'
import { SectionShell } from './SectionShell'
import './contactSection.css'

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="contactBlock">
        <h2 className="contactTitle">Have a project in mind?</h2>
        <p className="contactSub">
          Let&apos;s figure out if we&apos;re a good fit.
        </p>
        <div className="contactAction">
          <MagneticButton href={contactPrimary.href} className="contactCta">
            {contactPrimary.label}
          </MagneticButton>
          <p className="contactFind">or find me on</p>
          <nav className="contactSocial" aria-label="Social links">
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
