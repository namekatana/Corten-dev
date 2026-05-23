import { useTranslation } from 'react-i18next'
import './Footer.css'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footerInner">
        <span className="footerBrand">{t('footer.brand')}</span>
        {' '}
        {t('footer.year')}
      </div>
    </footer>
  )
}
