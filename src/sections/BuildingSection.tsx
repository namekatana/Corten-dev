import { useTranslation } from 'react-i18next'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { buildingItems } from '../config/building'
import { SectionShell } from './SectionShell'
import './buildingSection.css'

export function BuildingSection() {
  const { t } = useTranslation()

  return (
    <SectionShell id="building" className="buildingSection">
      <SectionHead title={t('building.title')} />
      <div className="buildingList">
        {buildingItems.map((item) => (
          <div key={item.name} className="buildingRow">
            <span className="buildingArrow" aria-hidden="true">
              →
            </span>
            <span className="buildingName">{item.name}</span>
            <span className="buildingTech">{item.tech}</span>
            <span className="buildingStatus">{item.status}</span>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
