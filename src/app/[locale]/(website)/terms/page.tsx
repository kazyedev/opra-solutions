import {getTranslations} from 'next-intl/server';

export default async function TermsPage() {
  const t = await getTranslations('Legal');

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">{t('termsTitle')}</h1>
      <p className="text-muted-foreground mb-6">{t('termsIntro')}</p>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>{t('useOfSiteTitle')}</h2>
        <p>{t('useOfSiteBody')}</p>
        <h2>{t('liabilityTitle')}</h2>
        <p>{t('liabilityBody')}</p>
        <h2>{t('governingLawTitle')}</h2>
        <p>{t('governingLawBody')}</p>
      </div>
    </section>
  );
}


