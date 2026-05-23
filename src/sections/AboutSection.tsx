import { useTranslation } from 'react-i18next'
import { AboutMark } from '../components/AboutMark/AboutMark'
import { AboutPoints } from '../components/AboutPoints/AboutPoints'
import { AnimatedText } from '../components/AnimatedText/AnimatedText'
import { RevealBlockTitle } from '../components/SectionHead/SectionHead'
import { StackList } from '../components/StackList/StackList'
import { aboutParagraphKeys, stackGroups } from '../config/about'
import { SectionShell } from './SectionShell'
import './aboutSection.css'

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <SectionShell id="about" className="altSection">
      <div className="aboutLayout">
        <AboutMark />
        <div className="aboutText">
          <RevealBlockTitle title={t('about.title')} className="aboutTitle" />
          <AboutPoints />
          {aboutParagraphKeys.map((key) => (
            <p key={key} className="aboutParagraph">
              <AnimatedText text={t(key)} as="span" />
            </p>
          ))}
        </div>
        <div className="aboutStack">
          <StackList groups={stackGroups} />
        </div>
      </div>
    </SectionShell>
  )
}
