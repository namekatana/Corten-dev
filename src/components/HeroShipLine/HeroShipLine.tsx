import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import './HeroShipLine.css'

export function HeroShipLine() {
  const { t } = useTranslation()

  return (
    <div className="heroShipLine">
      <p className="heroShipLineRow">
        <AnimatedText text={t('hero.shipLine1')} as="span" />
      </p>
      <p className="heroShipLineRow">
        <AnimatedText text={t('hero.shipLine2')} as="span" />
      </p>
    </div>
  )
}
