import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export function PageMeta() {
  const { t, i18n } = useTranslation()

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />
      <meta property="og:title" content={t('meta.ogTitle')} />
      <meta property="og:description" content={t('meta.ogDescription')} />
      <meta property="og:image:alt" content={t('meta.ogImageAlt')} />
      <meta name="twitter:title" content={t('meta.ogTitle')} />
      <meta name="twitter:description" content={t('meta.ogDescription')} />
    </Helmet>
  )
}
