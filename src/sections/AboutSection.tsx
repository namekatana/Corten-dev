import { AboutMark } from '../components/AboutMark/AboutMark'
import { AboutPoints } from '../components/AboutPoints/AboutPoints'
import { RevealBlockTitle } from '../components/SectionHead/SectionHead'
import { StackList } from '../components/StackList/StackList'
import { aboutParagraphs, stackGroups } from '../config/about'
import { SectionShell } from './SectionShell'
import './aboutSection.css'

export function AboutSection() {
  return (
    <SectionShell id="about" className="altSection">
      <div className="aboutLayout">
        <AboutMark />
        <div className="aboutText">
          <RevealBlockTitle title="About" className="aboutTitle" />
          <AboutPoints />
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="aboutParagraph">
              {paragraph}
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
